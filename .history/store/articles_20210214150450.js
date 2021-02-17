
function initialArticleState() {
  return {
    article: {
      title: '',
      slug: '',
      content: '',
      photo: '',
      public: true,
      // category: [],
      created_at: '',
      updated_at: '',
      cat: []
    },
  }
}

function initialArticleFilters() {
  return {
    articleFilter: {
      search: '',
      category: 0
    }
  }
}


export const state = () => ({
  ...initialArticleState(),
  articleStateChanged: false,
  articles: {},
  ...initialArticleFilters()
})

export const actions = {

  async FETCH_ALL_ARTICLES({ commit }) {
    // if (!context.state.articleStateChanged && Object.keys(context.state.articles).length !== 0 ) {
    //   return this.state.article;
    // } else {
    let url = 'articles?page=';
    const article = await this.$axios.get(url);
    commit('SET_ALL_ARTICLES', article.data);
    // }
  },

  /**
   * fetch filtered article
   * @param context
   * @param page
   */
  async FETCH_FILTERED_ARTICLES(context, page) {
    let url = '/api/article?';

    if (page > 0) {
      url += "page=" + page;
    } else {
      url += "page=1"
    }

    if (context.state.articleFilter.search) {
      url += "&search=" + context.state.articleFilter.search;
    }
    if (context.state.articleFilter.category > 0) {
      url += "&cat=" + context.state.articleFilter.category
    }

    const article = await axios.get(url);
    context.commit('SET_ALL_ARTICLES', article.data);
  },


  /**
   * reset article filters
   * @param context
   * @constructor
   */
  CLEAR_ARTICLE_FILTERS(context) {
    context.commit('RESET_ARTICLE_FILTERS');
  },

  /**
   * get article detailed data
   * @param context
   * @param slug
   * @returns {Promise<void>}
   * @constructor
   */
  async FETCH_ARTICLE_DATA(context, slug) {
    const url = '/article/';
    console.log('slug -> ', slug);
    const article = await this.$axios.get(url + slug);
    context.commit('SET_ARTICLE_DATA', article.data);
  },

  /**
   * create article
   * @param state
   * @returns {Promise<void>}
   * @constructor
   */
  async CREATE_ARTICLE({state}) {
    const url = '/api/article/';
    await axios.post(url, state.article);
    state.articleStateChanged = true;
  },

  /**
   * update article
   * @param state
   * @param id
   * @returns {Promise<void>}
   * @constructor
   */
  async UPDATE_ARTICLE({state}) {
    console.log('hero -> ', state);
    const url = '/articles/';
    await this.$axios.put(url + state.article.id, state.article);
    state.articleStateChanged = true;
  },

  /**
   * delete article
   * @param context
   * @param slug
   * @returns {Promise<void>}
   * @constructor
   */
  async DELETE_ARTICLE({state}, slug) {
    await axios.delete("/api/article/" + slug);
    state.articleStateChanged = true;
  },

  /**
   * Set content in store
   * @param state
   * @param content
   */
  SET_CONTENT_IN_STORE({state}, content) {
    state.article.content = content;
  },

  /**
   * update photo state
   * @param state
   * @constructor
   * @param context
   */
  UPDATE_ARTICLE_PHOTO(context, [reader]) {
    context.commit('SET_ARTICLE_PHOTO', reader);
  },

  /**
   * update slug
   * @param context
   * @param slug
   * @constructor
   */
  UPDATE_SLUG(context, slug) {
    context.commit('SET_SLUG', slug)
  },

  /**
   * reset state
   */
  RESET_ARTICLE_STATE({commit}) {
    commit('ARTICLE_RESET_STATE');
  },
}

export const mutations = {
  /**
   * mutate articles state
   * @param state
   * @param articles
   * @constructor
   */
  SET_ALL_ARTICLES: (state, articles) => {
    state.articles = articles;
    state.articleStateChanged = false;
  },

  updateTitle(state, value) {
    state.article.title = value;
  },

  /**
   * set article data
   * @param state
   * @param article
   * @constructor
   */
  SET_ARTICLE_DATA: (state, article) => {
    state.article = article;
    state.article.photo = '../storage/article/' + state.article.photo;
  },

  /**
   * set user photo
   * @param state
   * @param reader
   * @constructor
   */
  SET_ARTICLE_PHOTO: (state, reader) => {
    state.article.photo = reader
  },

  /**
   * set slug
   * @param state
   * @param slug
   * @constructor
   */
  SET_SLUG: (state, slug) => {
    state.article.slug = slug;
  },

  /**
   * reset user state
   * @param state
   * @constructor
   */
  ARTICLE_RESET_STATE: (state) => {
    Object.assign(state, initialArticleState());
  },

  RESET_ARTICLE_FILTERS: (state) => {
    Object.assign(state, initialArticleFilters());
  }
}

export const getters = {
  articles: (state) => {
    return state.articles;
  },
  article: (state) => {
    return state.article;
  },
  articleFilter: (state) => {
    return state.articleFilter;
  }
}
