<template>
  <div class="slug-wrapper" @click="editSlug">
    <font-awesome-icon fas icon="link" />
    <span>{{ url }}/{{ subDirectory }}/</span>
    <span class="slug" v-show="title && !isEditing" style="margin-left: -3px" @click="editSlug">{{ result }}</span>
    <input type="text" ref="slugInput" name="slug-edit" class="input is-small slug-input" v-show="isEditing" :value="result" @change="saveSlug">
<!--    <button class="btn btn-outline-dark btn-sm" v-show="!isEditing" @click.prevent="editSlug">Edit</button>-->
    <button class="btn btn-outline-dark btn-sm" v-show="isEditing" @click.prevent="saveSlug">save</button>
  </div>
</template>

<script>
  import slug from 'slug';
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
      result: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isEditing: false
      }
    },

    methods: {

      convertTitle() {
        this.$store.dispatch('articles/UPDATE_SLUG', slug(this.title));
      },

      editSlug() {
        this.$refs.slugInput.focus();
        this.isEditing = true;
      },

      saveSlug(e) {
        this.isEditing = false;
        this.$store.dispatch('articles/UPDATE_SLUG', slug(e.target.value));
      }
    },

    computed: {
      ...mapGetters({
        article: 'articles/article'
      }),
    },

    watch: {
      title() {
        this.convertTitle();
      }
    }
  }

</script>

<style scoped>

  .slug-wrapper {
    display: flex;
  }

  .slug-input {
    border: 0;
    background: transparent;
    width: 100%;
  }

  .slug-input:focus {
    border-bottom: 1px solid;
    border-color: #ccc;
    outline: none;
  }

</style>
