<template>
    <div class="container mt-5">
      <div class="title-header">
        <h1>Articles</h1>
        <nuxt-link :to="`/admin/articles/create`">Create</nuxt-link>
      </div>

      <div class="spinner-border" role="status" v-if="loading">
        <span class="sr-only">Loading...</span>
      </div>

      <p><span>Currently sorting - </span>{{ this.$store.state.articles.currentSort }} - {{ this.$store.state.articles.currentSortDir}}</p>
      <table class="table" v-if="!loading">
        <thead>
        <tr>
          <th scope="col" @click="sort('id')"># <span class="sort-icon">  <font-awesome-icon far icon="sort" /></span></th>
          <th scope="col" @click="sort('title')">Title <span class="sort-icon">  <font-awesome-icon far icon="sort" /></span></th>
          <th scope="col" @click="sort('content')">Content <span class="sort-icon">  <font-awesome-icon far icon="sort" /></span></th>
          <th scope="col" @click="sort('is_public')">public <span class="sort-icon">  <font-awesome-icon far icon="sort" /></span></th>
          <th scope="col" @click="sort('created_at')">create_date <span class="sort-icon">  <font-awesome-icon far icon="sort" /></span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="article in articles" :key="article.id">
          <th scope="row">{{ article.id}}</th>
          <td><nuxt-link :to="`/admin/articles/${article.slug}`">{{ article.title }}</nuxt-link></td>
          <td>{{ article.content.slice(1, 15) }}</td>
          <td>{{ article.is_public }}</td>
          <td> {{ article.created_at }}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>

  import {mapGetters, mapActions} from "vuex";

    export default {
      name: "articles",
      layout: 'adminPanel',
      middleware: 'admin',

      data() {
        return {
          loading: false,
        }
      },

      computed: {
        ...mapGetters({
          articles: 'articles/articles',
        }),
      },

      async fetch({store}) {
        await store.dispatch('articles/' + 'FETCH_ALL_ARTICLES');
      },

      methods: {
        ...mapActions(['articles/SORT_ARTICLES']),
        sort(s) {
          this.$store.dispatch('articles/' + 'SORT_ARTICLES', s)
        }
      },

    }
</script>

<style scoped>
  th:hover {
    cursor: pointer;
  }

  .sort-icon {
    float: right;
    color: #ccc;
  }
</style>
