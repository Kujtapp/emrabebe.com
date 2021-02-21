<template>
  <div>
    <h1 class="dashboard">Dashboard</h1>
    <div class="card" title="private Dashboard">
      {{ $auth.user.name }}
      {{ $auth.user.role }}
    </div>
  </div>
</template>

<script>


export default {
  layout: 'adminPanel',
  middleware: "auth"
}
</script>
