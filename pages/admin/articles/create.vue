<template>
  <div class="container mt-5">
  <div class="row">
    <div class="col-10">
      <div class="row">
        <!--      <nuxt-link :to="`/articles/${article.slug}`" class=" col-1"><</nuxt-link>-->
        <h3 class="col-3">Create Article</h3>
      </div>
    </div>
  </div>
  <article-form></article-form>
</div>
</template>

<script>
    import ArticleForm from "~/components/ArticleForm";

    export default {
      name: "createArticle",
      components: {ArticleForm},
      layout: "adminPanel",
      middleware: "admin",

      fetch({store}) {
        store.commit('articles/SET_ALL_ARTICLES', {})
      },

      beforeCreate() {
        this.$store.commit('articles/RESET_ARTICLE')
      }

    }
</script>

<style scoped>

</style>
