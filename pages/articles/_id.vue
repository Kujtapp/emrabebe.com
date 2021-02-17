<template>
    <div>
      <nuxt-child :article="article"></nuxt-child>
    </div>
</template>

<script>
  import {mapGetters} from "vuex";

    export default {
      head() {
        return {
          title: `${this.article.title} - kushtrim.net`
        }
      },
      data() {
        return {
          slug: this.$route.params.id
        }
      },

      computed: {
        ...mapGetters({
          article: 'articles/article'
        }),
      },

      async fetch(context) {
        await context.store.dispatch('articles/' + 'FETCH_ARTICLE_DATA', context.params.id);
      },

    }
</script>

<style scoped>

</style>
