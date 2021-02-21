<template>
  <div class="login-container">
        <form class="form-signin" @submit.prevent="createAccount()">
            <!-- <p class="error-message">{{  errorMessage }}</p> -->
            <p class="error-message" v-if="errorMessage"> {{ errorMessage }}</p>
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            <div class="form-group">
              <label for="inputName" class="sr-only">Name</label>
              <input type="text" v-model="createAccountForm.name" @focus="hideErrorMessage" id="inputName" class="form-control" placeholder="Name" required="" autofocus="true">
            </div>
            <div class="form-group">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input type="email" v-model="createAccountForm.email" @focus="hideErrorMessage" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            </div>

            <div class="input-group mb-3">
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" v-model="createAccountForm.password" @focus="hideErrorMessage" :type="[showPassword ? 'text' : 'password']" :class="{'is-invalid': isValid }" id="inputPassword" class="form-control" placeholder="Password" required="">
              <div class="input-group-append">
                <span class="input-group-text" @click="showPassword = !showPassword" >
                  <font-awesome-icon far :icon="showPassword ? 'eye' : 'eye-slash'" />
                </span>
              </div>
            </div>

          <div class="input-group mb-3">
            <label for="inputRetypePassword" class="sr-only">retype Password</label>
            <input type="password" v-model="createAccountForm.retypePassword" @focus="hideErrorMessage" :type="[showPassword ? 'text' : 'password']" :class="{'is-invalid': isValid }" id="inputRetypePassword" class="form-control" placeholder="Password" required="">
          </div>

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
                retypePassword: ''
            },
            errorMessage: false,
            isValid: false,
            showPassword: false,
        }
    },

    methods: {
        async createAccount() {
              if (!this.createAccountForm.password.match(/^.{6,}$/)) {
                this.errorMessage = 'password must be 6 characters or longer';
                this.isValid = true;
              }else if(this.createAccountForm.password !== this.createAccountForm.retypePassword) {
                this.errorMessage = 'Passwords do not match';
                this.isValid = true;
              } else{
                await this.$axios.get('/sanctum/csrf-cookie');
                await this.$axios.post('api/register', this.createAccountForm)
                  .then(() => {
                    this.$router.push('/Auth/registrationSuccess');
                  })
                  .catch(err => {
                    switch (err.response.data.status) {
                      case 422:
                        this.errorMessage = 'incorrect credentials';
                        break;
                      case 500:
                        this.errorMessage = 'Server is not responding please try later';
                        break;
                      case 403:
                        this.errorMessage = 'User not verified, please check your email';
                        break;
                      default:
                        this.errorMessage = 'Something went wrong, this user could be already registered';
                        break;
                    }
                  });
              }
        },
        hideErrorMessage() {
            this.errorMessage = false;
            this.focused = true;
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
