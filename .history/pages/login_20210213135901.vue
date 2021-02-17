<template>
  <div class="container">
    <div class="something"><p>hello</p></div>
    <div class="card">
      Welcome Home
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
            console.log('log in');
        }
    }
}
</script>
