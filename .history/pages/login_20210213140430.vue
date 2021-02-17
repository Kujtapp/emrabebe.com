<template>
  <div class="container">
    <div class="something"><p>hello</p></div>
    <div class="card">
      Welcome Home
      <b-button variant="primary" @click="login()">Login</b-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: 'admin@admin.com',
                password: 'password'
            }
        }
    },

    methods: {
        login() {
            this.#auth.loginWith('laravelSanctum', {
                data: this.form
            }).than( response => {
                console.log("Response: ", response);
            })
            .catch(err => {
                console.log('error: ', err)
            });
        }
    }
}
</script>
