<template>
<div class="container mt-5">
<div class="row">
  <div class="col-10">
    <div class="row">
      <nuxt-link :to="`/articles/${article.slug}`" class=" col-1"><</nuxt-link>
      <h3 class="col-3">Editing {{ article.title }}</h3>
    </div>
  </div>
  <div class="col-2">
    <nuxt-link :to="`/articles/${article.slug}`" class="btn btn-danger">back to article</nuxt-link>
  </div>
</div>
  <div class="mt-5">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-8 col-md-8 col-lg-8">
          <div class="form-group">
            <input type="text" placeholder="Title" v-model="title" name="title" class="form-control">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="article.content">{{ article.content }}</textarea>
          </div>
<!--          <slug :url="fullUrl" sub-directory="blog" :title="article.title"></slug>-->
        </div>

        <div class="col-sm-4 col-md-4 col-lg-4">
          <div class="published-wrapper">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="Published" v-model="article.public">
              <label class="form-check-label" for="Published">Public</label>
            </div>
          </div>
          <div class="article-photo">
            <div class="form-group">
              <picture v-show="article.photo">
                <img :src="article.photo" alt="article photo" class="img-fluid img-thumbnail" width="150px">
              </picture>
              <label for="FormControlUserPhoto">Add Article Photo</label>
              <input type="file" class="form-control-file" id="FormControlUserPhoto" @change="createArticlePhoto">
            </div>
          </div>

          <div class="category-wrapper">
            <label>Add category to Article</label>
<!--            <category categories="article.category"></category>-->
          </div>

          <button :disabled="inProgress" type="submit" class="btn btn-primary mt-3">Submit
<!--            <Spinner v-if="inProgress" class="Spinner-mini Spinner-color-white" />-->
          </button>
<!--          <ErrorsList :errors="errors" />-->
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
      props: ['article'],
      data() {
        return {
          // fullUrl: window.location.origin,
          id: this.$route.params.id,
          inProgress: false,
          errors: {}
        }
      },
      methods: {
        ...mapActions(['articles/CREATE_ARTICLE', 'articles/UPDATE_ARTICLE', 'UPDATE_ARTICLE_PHOTO', 'SET_CONTENT_IN_STORE']),
        /**
         * create or update the article
         */
        onSubmit() {
          let action = '';
          let actionMessage = '';
          if (this.id) {
            action = 'articles/' + 'UPDATE_ARTICLE';
            actionMessage = 'Updated'
          } else {
            action = 'articles/CREATE_ARTICLE';
            actionMessage = 'Created';
          }
          this.inProgress = true;
          this.$store.dispatch(action)
            .then( () => {
              this.inProgress = false;
              Swal.fire(
                actionMessage,
                'Article Has been' + actionMessage,
                'success'
              )
              this.$router.push('/articles');
            })
            .catch(({ response }) => {
              this.inProgress = false;
              if (response?.data?.errors) {
                this.errors = response?.data?.errors
              } else {
                this.errors = response?.data
              }
              console.log('you have an error on creating an user');
            })
        },

        /**
         * update profile photo
         * @param event
         */
        createArticlePhoto(event) {
          let file = event.target.files[0];
          let reader = new FileReader();
          if (file['size'] < 2111776) {
            reader.onloadend = (file) => {
              this.$store.dispatch('UPDATE_ARTICLE_PHOTO', [reader.result])
            }
            reader.readAsDataURL(file);
          } else {
            Swal.fire(
              'Error!',
              'oops... file too big, make sure it is less then 2MB',
              'warning'
            )
          }
        },

      },
      computed: {
        title: {
          get() {
            return this.$store.state.articles.article.title
          },
          set (value) {
            this.$store.commit('articles/' + 'updateTitle', value);
          }
        }
      }
    }
</script>

<style scoped>

</style>
