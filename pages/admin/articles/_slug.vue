<template>
  <div>
          <nuxt-child :article="article"></nuxt-child>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "article-details",
    layout: 'adminPanel',
    middleware: 'admin',
    head() {
      return {
        // title: `${this.article.title} - kushtrim.net`
      }
    },
    data() {
      return {
        slug: this.$route.params.slug
      }
    },

    computed: {
      ...mapGetters({
        article: 'articles/article'
      })
    },

    async fetch({ store, route }) {
      await store.dispatch('articles/FETCH_ARTICLE', route.params.slug);
    },

  }
</script>

<style scoped>

</style>
