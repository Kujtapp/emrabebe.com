<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-10"><h3>{{ article.title }}</h3></div>
      <div class="col-1">
        <nuxt-link :to="`${article.slug}/edit`" class="btn btn-warning">Edit</nuxt-link>
      </div>
    </div>
    <div class="row">
      <div class="col mt-5">
        <div class="row">
          <div class="col-6">
            <p>ID:</p>
            <p>Title:</p>
            <p>Slug:</p>
            <p>Content:</p>
            <p>Photo:</p>
            <p>Create At:</p>
          </div>
          <div class="col-5 ">
            <p>{{article.id}}</p>
            <p>{{article.title}}</p>
            <p>{{article.slug}}</p>
            <p>{{article.content}}</p>
            <p>{{article.photo}}</p>
            <p>{{article.created_at}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['article']
  }
</script>
