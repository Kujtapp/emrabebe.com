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
   * @returns {Promise<void>}
   * @constructor
   * @param context
   */
  async FETCH_ALL_USERS(context) {
    let users = '';
    if (Object.keys(context.state.users).length !== 0) {
      return this.state.users;
    } else {
      let url = '/api/users';
      try {
        users = await this.$axios.get(url);
      } catch (err) {
        switch (err.users.data.status) {
          case 422:
            this.errorMessage = 'incorrect credentials';
            break;
          case 500:
            this.errorMessage = 'Server is not responding please try later';
            break;
          case 403:
            this.errorMessage = 'User not verified, please check you email';
            break;
          default:
            this.errorMessage = 'Something went wrong';
            break;
        }
      }
      context.commit('SET_USERS', users.data);
    }
  },

  /**
   * fetch a user
   * @param context
   * @param id
   * @returns {Promise<void>}
   */
  async fetch_user(context, id) {
    let index = "";
    try {
      index = context.state.users.filter(( index ) => index.id == id);
      context.commit('SET_USER', index[0]);
    } catch (e) {
      let url = '/api/users/';
      await this.$axios.get(url + id)
        .then( (user) => {
          context.commit('SET_USER', user.data);
        });
    }

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



