<template>
  <div class="container">
    <div class="something"><p>hello</p></div>
    <div class="card" title="private Dashboard">
       Dashboard
      {{ $auth.user.name }}
    </div>
  </div>
</template>

<script>
export default {
    middleware: "auth"
}
</script>
