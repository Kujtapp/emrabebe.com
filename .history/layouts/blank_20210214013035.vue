<template>
    <div>
    <Nuxt />
  </div>
</template>

<script>
export default {

  data(){
    return {

    }
  },

  methods: {

    async logout() {
      try {
        await this.$auth.logout();
      } catch (err) {
        console.log(err);
      }
    }
     
  }

}
</script>
