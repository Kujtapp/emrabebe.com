function initialCategoryState() {
  return {
    articles: [],
  }
}


export const state = () => ({
  ...initialCategoryState(),
  categories: [],
  category: {},
});

export const actions = {

  /**
   * get all categories
   * @param context
   * @returns {Promise<void>}
   * @constructor
   */
  async FETCH_ALL_CATEGORIES(context) {
    const url = '/api/categories';
    const categories = await this.$axios.get(url);
    context.commit('SET_ALL_CATEGORIES', categories.data);
  },
};

export const mutations = {

  /**
   * mutate categories list
   * @param state
   * @param categories
   * @constructor
   */
  SET_ALL_CATEGORIES: (state, categories) => {
    state.categories = categories;
  },

  /**
   * reset Categories
   * @constructor
   */
  RESET_CATEGORIES: (state) => {
    Object.assign(state, initialCategoryState())
  }

};

export const getters = {
  /**
   * get categories list
   * @param state
   * @returns {any}
   */
  categories: (state) => {
    return state.categories;
  },

  /**
   * set one category
   * @param state
   * @returns {any}
   */
  category(state) {
    return state.category;
  }

};
