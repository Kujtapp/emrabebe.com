<template>
  <div class="slug-wrapper">
    <font-awesome-icon fas icon="link" />
    <span>{{ url }}/{{ subDirectory }}/</span>
    <span class="slug" v-show="title && !isEditing" style="margin-left: -3px" @click="editSlug">{{ slug }}</span>
    <input type="text" name="slug-edit" class="input is-small" v-show="isEditing" :value="title" >
    <button class="btn btn-outline-dark btn-sm" v-show="!isEditing" @click.prevent="editSlug">Edit</button>
    <button class="btn btn-outline-dark btn-sm" v-show="isEditing" @click.prevent="saveSlug">save</button>
  </div>
</template>

<script>
  import Slug from 'slug';
  import {mapGetters} from "vuex";

  export default {
    name: "Slug",
    props: {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      subDirectory: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        slug: this.title,
        isEditing: false
      }
    },
    methods: {
      /**
       * convert title to slug
       * @returns {*}
       */
      convertTitle() {
        let slug = this.title;
        this.$store.dispatch('articles/UPDATE_SLUG', slug)
        // return slug;
      },
      /**
       * edit slug
       */
      editSlug() {
        this.isEditing = true;
      },
      /**
       * save slug
       */
      saveSlug() {
        this.isEditing = false;
      }
    },
    computed: {
      ...mapGetters({
        article: 'articles/article'
      }),
    },
    watch: {
      /**
       * watching the title
       */
      title() {
        this.convertTitle();
      }
    }
  }

</script>

<style scoped>

</style>
