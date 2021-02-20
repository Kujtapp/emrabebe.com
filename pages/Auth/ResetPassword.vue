<template>
  <div class="middle-container">
    <div class="form-signin">
    <form @submit.prevent="resetPassword">
      <!-- <p class="error-message">{{  errorMessage }}</p> -->
      <p class="alert alert-danger" v-if="errorMessage">Wrong Credentials</p>
                  <h1 class="h3 mb-3 font-weight-normal">Reset your password?</h1>
                  <label for="inputEmail" class="sr-only">Email address</label>
                  <input type="email" v-model="reset.email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                  <label for="verify-code" class="sr-only">Verification Code</label>
                  <input type="text" v-model="reset.verification_code" id="verify-code" class="form-control" placeholder="Verification Code" required="" autofocus="">
                  <label for="inputPassword" class="sr-only">Password</label>
                  <input type="password" v-model="reset.password" id="inputPassword" class="form-control" placeholder="Password" required="">
                  <label for="inputRetypePassword" class="sr-only">Password</label>
                  <input type="password" v-model="reset.password_confirmation" id="inputRetypePassword" class="form-control" placeholder="Retype Password" required="">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Reset</button>
    </form>
  </div>
  </div>
</template>

<script>
    export default {
        layout: 'blank',
        name: "resetPassword",
      data() {
        return {
          reset: {
          email: '',
          verification_code: '',
          password: '',
          password_confirmation: '',
          },
          errorMessage: '',
        }
      },

      methods: {
        async resetPassword() {
            await this.$axios.get('/sanctum/csrf-cookie');
            await  this.$axios.post('api/reset', this.reset)
          .then( () => {
            this.$router.push('login');
          })
          .catch((err) => {
            switch (err.response.data.status) {
              case 401:
                this.errorMessage = 'incorrect credentials';
                break;
              case 500:
                this.errorMessage = 'Server is not responding please try later';
                break;
              default:
                this.errorMessage = 'Something went wrong';
                break;
            }
          })
        },
        hideErrorMessage() {
          this.errorMessage = false;
        }
      }
    }
</script>

<style scoped>

</style>
