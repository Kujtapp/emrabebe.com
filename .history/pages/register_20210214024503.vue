<template>
  <div class="login-container">
        <form class="form-signin" @submit.prevent="createAccount()">
            <!-- <p class="error-message">{{  errorMessage }}</p> -->
            <p class="error-message" v-if="errorMessage">Wrong Credentials</p>
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            <label for="inputEmail" class="sr-only">Name</label>
            <input type="text" v-model="createAccountForm.name" id="inputNmae" class="form-control" placeholder="Name" required="" autofocus="true">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" v-model="createAccountForm.email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="createAccountForm.password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="retypePassword" id="inputRetypePassword" class="form-control" placeholder="Retype Password" required="">
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
            createAccountForm: {
                name: '',
                email: '',
                password: '',
            },
            retypePassword: '',
            errorMessage: false
        }
    },

    methods: {
        async createAccount() {
            console.log('values', this.createAccountForm);
            try {
                await this.$auth.registerWith('laravelSanctum', data: this.createAccountForm);
                this.errorMessage || false;
            } catch (err) {
                this.errorMessage = true
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