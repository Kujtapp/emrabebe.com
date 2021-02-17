<template>
    <div class="container mt-5">
      <h1>Articles works</h1>
      <!-- <div v-for="article in articles" :key="article.id">
        <nuxt-link :to="`/articles/${article.slug}`">{{ article.title }}</nuxt-link>
      </div> -->
    </div>
</template>

<script>

  // import {mapGetters} from "vuex";

    export default {
      name: "articles",

      // computed: {
      //   ...mapGetters({
      //     articles: 'articles/articles'
      //   }),
      // },

      // async fetch({store}) {
      //   await store.dispatch('articles/' + 'FETCH_ALL_ARTICLES');
      // },

    }
</script>
