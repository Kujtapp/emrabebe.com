<template>
  <div class="categories">
    <!-- loading Spinner-->
    <div class="form-check" v-for="category in categories" :key="category.id">
      <input class="form-check-input" type="checkbox" :checked="cat.includes(category.id)" :value="category.name" :id="category.id" @change="updateCategoryId">
      <label class="form-check-label" :for="category.id">
        {{ category.name }}
      </label>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "categories",

    // beforeDestroy() {
    //   // reset state of user
    //   this.$store.dispatch("categories/RESET_CATEGORIES");
    // },
    props: ['cat'],

    data() {
      return {
        loading: false
      }
    },
    /**
     * fetch all users
     */
    fetch() {
      this.loading = true;
      this.$store.dispatch('categories/FETCH_ALL_CATEGORIES')
        .then(() => this.loading = false)
        .catch(() => {
          this.loading = false;
          console.log('Fetching categories failed');
        });
    },
    methods: {
      updateCategoryId (e) {
        this.$store.dispatch('articles/UPDATE_CATEGORY_ID', e.target);
      },

    },


    computed: {
      // get user from store
      ...mapGetters({
        categories: 'categories/categories'
      }),

    },
  }
</script>
