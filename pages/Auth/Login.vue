<template>
  <div class="middle-container">
    <div class="form-signin">
        <form @submit.prevent="login">
            <!-- <p class="error-message">{{  errorMessage }}</p> -->
            <p class="alert alert-danger" v-if="errorMessage">{{ errorMessage }}</p>
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" v-model="loginForm.email" @focus="hideErrorMessage" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="loginForm.password" @focus="hideErrorMessage" id="inputPassword" class="form-control" placeholder="Password" required="">
            <div class="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    <nuxt-link to="forgotPassword">Forgot password?</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'blank',
    middleware: ['guest'],
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            errorMessage: ''
        }
    },

    methods: {
           async login() {
                try {
                    await this.$auth.loginWith('laravelSanctum', {data: this.loginForm})
                } catch (err) {
                  switch (err.response.data.status) {
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
           },

        hideErrorMessage() {
            this.errorMessage = false;
        }
    }
}
</script>

<style scoped>

.login-container {
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
.error-message {
    color: red;
}
</style>
