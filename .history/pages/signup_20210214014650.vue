<template>
  <div class="login-container">
        <form class="form-signin" @submit.prevent="login()">
            <!-- <p class="error-message">{{  errorMessage }}</p> -->
            <p class="error-message" v-if="errorMessage">Wrong Credentials</p>
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Name</label>
            <input type="text" v-model="loginForm.name" id="inputNmae" class="form-control" placeholder="Name" required="" autofocus="true">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" v-model="loginForm.email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="loginForm.password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="loginForm.retypePassword" id="inputRetypePassword" class="form-control" placeholder="Retype Password" required="">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
        </form>
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
            errorMessage: false
        }
    },

    methods: {
        async login() {
            console.log('values', this.loginForm);
            try {
                await this.$auth.loginWith('laravelSanctum', {data: this.loginForm})
            } catch (err) {
                err.response.data.message ? this.errorMessage = true : this.errorMessage = false;
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