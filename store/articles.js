// import assign from "lodash.assign";

function initialArticleState() {
  return {
    article: {
      title: '',
      slug: '',
      content: '',
      category_id: [],
      is_public: true,
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
  articles: [],
  article: {
  },
  currentSort: 'id',
  currentSortDir: 'desc',
  ...initialArticleFilters()
});

export const actions = {

  async FETCH_ALL_ARTICLES(context) {
    if (Object.keys(context.state.articles).length !== 0 ) {
      return this.state.articles;
    } else {
    const url = '/api/articles';
      console.log('new state');
    const articles = await this.$axios.get(url);
      context.commit('SET_ALL_ARTICLES', articles.data);
    }
  },

  SORT_ARTICLES: (context, s) => {
    context.commit('SET_SORT_ARTICLES', s);
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
  async FETCH_ARTICLE(context, slug) {
    const url = '/api/articles/';
    const article = await this.$axios.get(url + slug);
    console.log('article', article.data);
    context.commit('SET_ARTICLE_DATA', article.data);
  },

  /**
   * create article
   * @param state
   * @returns {Promise<void>}
   * @constructor
   */
  async CREATE_ARTICLE({state}) {
    state.articles = [];
    const url = '/api/articles/';
    await this.$axios.post(url, state.article);
  },

  /**
   * update article
   * @returns {Promise<void>}
   * @constructor
   * @param context
   */
  async UPDATE_ARTICLE(context) {
    state.articles = [];
    const url = '/api/articles/';
    // await this.$axios.get('/sanctum/csrf-cookie');
    await this.$axios.put(url + context.state.article.id, context.state.article);

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
   * reset state
   */
  RESET_ARTICLE_STATE({commit}) {
    commit('ARTICLES_RESET_STATE');
  },


  UPDATE_CATEGORY_ID (context, category) {
    if(category.checked) {
      context.commit('UPDATE_CATEGORY', parseInt(category.id))
    } else {
      context.commit('REMOVE_CATEGORY_ID', parseInt(category.id))
    }
  }

};

export const mutations = {

  SET_SLUG: (state, slug) => {
    state.article.slug = slug;
  },

  UPDATE_SLUG(context, slug) {
    context.commit('SET_SLUG', slug)
  },

  /**
   * mutate articles state
   * @param state
   * @param articles
   * @constructor
   */
  SET_ALL_ARTICLES: (state, articles) => {
    state.articles = articles;
  },


  SET_SORT_ARTICLES: (state, sortKey) => {

    //if s == current sort, reverse
    if(sortKey === state.currentSort) {
      state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc';
    }
    state.currentSort = sortKey;
      state.articles.sort((a,b) => {
        let modifier = 1;
        if(state.currentSortDir === 'desc') modifier = -1;
        if(a[state.currentSort] < b[state.currentSort]) return -1 * modifier;
        if(a[state.currentSort] > b[state.currentSort]) return modifier;
        return state.articles;
      });

  },

  UPDATE_TITLE(state, value) {
    console.log('here yes', value);
    state.article.title = value;
  },

  UPDATE_CATEGORY(state, value) {
    state.article.category_id.push(value);
  },

  REMOVE_CATEGORY_ID(state, value) {
    state.article.category_id = state.article.category_id.filter( category => {
    return category !== value;
    });
  },

  UPDATE_CONTENT(state, value) {
    state.article.content = value;
  },

  UPDATE_IS_PUBLIC(state, value) {
    state.article.is_public = value;
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
    state.article.created_at = new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' })
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
   * reset user state
   * @param state
   * @constructor
   */
  ARTICLES_RESET_STATE: (state) => {
    Object.assign(state, initialArticleState());
  },

  RESET_ARTICLE: (state) => {
    Object.assign(state, initialArticleState());
    console.log('article reset', state.article);
  },

  RESET_ARTICLE_FILTERS: (state) => {
    Object.assign(state, initialArticleFilters());
  }

};

export const getters = {
  articles: (state) => {
    return state.articles;
  },
  article: (state) => {
    return state.article;
  },
  articleFilter: (state) => {
    return state.articleFilter;
  },

};
