<template>
  <div class="login-container">
        <form class="form-signin" @submit.prevent="createAccount()">
            <!-- <p class="error-message">{{  errorMessage }}</p> -->
            <p class="error-message" v-if="errorMessage">Wrong Credentials</p>
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            <label for="inputName" class="sr-only">Name</label>
            <input type="text" v-model="createAccountForm.name" id="inputName" class="form-control" placeholder="Name" required="" autofocus="true">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" v-model="createAccountForm.email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="createAccountForm.password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <label for="inputRetypePassword" class="sr-only">Password</label>
            <input type="password" v-model="retypePassword" id="inputRetypePassword" class="form-control" placeholder="Retype Password" required="">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
        </form>


<!--    XSRF-TOKEN=eyJpdiI6IkpZN3BsNjg2ak5LUHB2bVZJc2g5WVE9PSIsInZhbHVlIjoiZGZVeFpwK1lpN3AwTm5PK3FkNk1QTFhsdUVnTTlyMjNVb2VMbkFURzJGZDl1eFRHUWUvTUIrNk5MV0VuM1Nxa1F2OHlzNUF2RkJwQ25GNW9QWEVycEhwNnJaazdxNkxmQlBNa0M3UEMrRFJMUVJpRzhIQ25BQVZUcWJycVBrNmQiLCJtYWMiOiI4NmYzZjI3YjA4NGQ0MDMwN2ZmNTNhODdmNmRlM2Y1MmU0OGZjYjhiNzc4MjY0NWNiMDljMWIzNjRmMDc4YzQ4In0%3D; expires=Tue, 16-Feb-2021 22:52:42 GMT; Max-Age=7200; path=/; domain=localhost; samesite=lax-->
<!--    response-->
<!--    laravel_session=eyJpdiI6IlMwYXNVREt3RlcwdVpoNHBRcER0bFE9PSIsInZhbHVlIjoiaG1xSWRTaVZwUjNjMkJJSEcrTG1KZUFFRHNsQjR1YTZXRExhRDVUaUk1NlY3RHVuRzN5cGJpQ0tLNm1GT0tOMytyekpwNS90MmtNQ1Q2QlVPbFFxRGF6NFBRM3VFZ2ZBY0ZPMHpjbXdUSkpadW1RVFlJL0R5ZmlTaFRtQ2xaZXgiLCJtYWMiOiIyOTQwMjE5MmU2ZDRjNGQzMjAwZWY5MjE0ZmVjMTc2ZGQ5MmY2Y2IwYmRmOTk1NTFhZmYyMzAyOGI1ZDc0ODQ1In0%3D; expires=Tue, 16-Feb-2021 23:08:26 GMT; Max-Age=7200; path=/; domain=localhost; httponly; samesite=lax-->
<!--    XSRF-TOKEN=eyJpdiI6InpaQWgwN2JPbFhRdlJaTmg2N3VwWnc9PSIsInZhbHVlIjoiWC9oOHhQTmRsVk5hM1YxRk1SM0FWZHUxV2NlZHI2TGRmenVjYVhTOFcvSmlybUJTR3N5QW9RT1RwR1lHblpkSXB1eHJKczNZRWo4QjhzNzFBMEUram4wRjhpcTk0bDROcGExb1l3U3IvaG5JUytIY3h5MkxvcHBOYTN5b21MWEoiLCJtYWMiOiIwMmQzODJhMmU0Yjc5NTIwNDk5ODYyMjYxNDRlNTIyMjkwMTY0ZjkzYmRkZjQ2N2JmMGQ3ZTg1Njc5YjhhNjNkIn0%3D; expires=Tue, 16-Feb-2021 22:48:58 GMT; Max-Age=7200; path=/; domain=localhost; samesite=lax-->
<!--    request-->
<!--    auth.strategy=laravelSanctum; auth._token_expiration.laravelSanctum=false; laravel_session=eyJpdiI6IlpwL094TVBiRGdqUkphREZ5V1pEUmc9PSIsInZhbHVlIjoiS3FPU0JDem9CUVpzZDVMN2lKZEVwdnZldFA2V2E1SG9nVUFjSzBTNWtoOWtOKy8rbjZZU1FTRHRUYmkxY0YxNkxBaGJXV0l5VlEvREhpSm9NOVE2Z3BGQXQvUWl0MitkTUlXWWZyVmhGd3p0bTF5Yms0ZnFMSmw1M2grcCtLZVIiLCJtYWMiOiIyMzRiNDcyYzIyZDcxYTJkNzdlODZlMDI3MGQ4YzFhZjg2NTczNzBlOTMzY2MwZDllYTM4MzRhODFlYmNjM2FhIn0%3D; auth._token.laravelSanctum=false-->
<!--    auth.strategy=laravelSanctum; auth._token_expiration.laravelSanctum=false; laravel_session=eyJpdiI6IktwVjlMNWlDQTVRM0tOU2F4cFA0YVE9PSIsInZhbHVlIjoiWDkwTndtdEtlM0FVVyt4eDk4cnBrMFJJd2h5NCtNUDZWRnpoSVpMYy92Y1A1VTV4NTZScDViM3JRSmhNK2J4QzNNSC9POFR1SjVxWXc3Q0hucWlsdVgwUlhoSGNBTS9kaDk0TGh3WFdlM3NXTUE5bWRlajNqd25YVXVZcUNZYzIiLCJtYWMiOiJlNDYzOWRhZThlZjM5ZDZmNjU3YWIxZjI4ZWVhMzI1YTdmOTBkOGYxZTIyYzA2MTlmM2RlMzc3NzE1NDQxMDMyIn0%3D; auth._token.laravelSanctum=false-->
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
              await this.$axios.get('/sanctum/csrf-cookie');
              await  this.$axios.post('api/register', this.createAccountForm);
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
