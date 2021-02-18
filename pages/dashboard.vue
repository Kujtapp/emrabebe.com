<template>
  <div>
    <h1>Dashboard</h1>
    <div class="card" title="private Dashboard">
      {{ $auth.user.name }}
    </div>
  </div>
</template>

<script>


export default {
  layout: 'adminPanel',
  middleware: "auth"
}
</script>
