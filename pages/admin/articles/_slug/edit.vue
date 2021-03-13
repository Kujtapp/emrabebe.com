<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-10">
        <div class="row">
          <!--      <nuxt-link :to="`/articles/${article.slug}`" class=" col-1"><</nuxt-link>-->
          <h3 class="col-3">Create Article</h3>
        </div>
      </div>
      <div class="col-2">
        <nuxt-link :to="`/admin/articles/${slug}`" class="btn btn-danger">back to article</nuxt-link>
      </div>
    </div>
    <article-form></article-form>
  </div>
</template>

<script>
  import ArticleForm from "~/components/ArticleForm";

export default {
  components: {ArticleForm},

  data() {
   return {
     id: this.$route.params.slug,
   }
  }

}
</script>

<style scoped>

</style>
