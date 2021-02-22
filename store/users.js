function initialUserState() {
  return {
    user: {
      name: '',
      email: '',
      role: '',
      created_at: '',
      updated_at: '',
      email_verified_at: ''
    },
  }
}

export const state = () => ({
  ...initialUserState(),
  users: {},
});

export const actions = {
  /**
   * get all users
   * @param commit
   * @returns {Promise<void>}
   * @constructor
   */
  async ALL_USERS({commit}) {
    let url = '/api/users';
    const users = await this.$axios.get(url);
    commit('SET_USERS', users.data);
  },

  /**
   * fetch a user
   * @param commit
   * @param id
   * @returns {Promise<void>}
   */
  async fetch_user(context, id) {
    let url = '/api/users/';
    await this.$axios.get(url + id)
      .then( (user) => {
        context.commit('SET_USER', user.data);
      });
  }
};

export const mutations = {

  /**
   * set all users
   * @param state
   * @param users
   * @constructor
   */
  SET_USERS: (state, users) => {
    state.users = users;
  },

  /**
   * set a user
   * @param state
   * @param user
   * @constructor
   */
  SET_USER: (state, user) => {
    state.user = user;
  },



};

export const getters = {

  users: (state) => {
    return state.users;
  },

  user: (state) => {
    return state.user;
  }

};



