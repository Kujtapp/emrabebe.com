<template>
  <div class="container">
    <div class="card">
       <form class="row g-3">
            <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Email</label>
                <input type="text" v-model="email" class="form-control" id="staticEmail2" value="email@example.com">
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input type="password" v-model="password" class="form-control" id="inputPassword2" placeholder="Password">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3" @click="login()">Login</button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    middleware: ['guest'],
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        login() {
            console.log('values', this.email + " " + this.password);
            this.$auth.loginWith('laravelSanctum', {data: this.form})
        }
    }
}
</script>
