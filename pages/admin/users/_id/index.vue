<template>
  <div class="container mt-5">
    <div class="row">
<!--      <div class="col-10"><h3>{{ user.name }}</h3></div>-->
      <div class="col-1">
<!--        <nuxt-link :to="`${user.id}/edit`" class="btn btn-warning">Edit</nuxt-link>-->
      </div>
    </div>
    <div class="row">
      <div class="col mt-5">
        <div class="row">
          <div class="col-6">
            <p>ID:</p>
            <p>Name:</p>
            <p>email:</p>
          </div>
          <div class="col-5 ">
            <p>{{user.id}}</p>
            <p>{{user.name}}</p>
            <p>{{user.email}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    layout: 'adminPanel',
    middleware: 'admin',
    props: ['user'],
    data() {
      return {
        id: this.$route.params.id
      }
    },
  }
</script>

<style scoped>

</style>
