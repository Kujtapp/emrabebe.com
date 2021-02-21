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
});


