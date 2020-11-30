<template>
  <section class="container">
    <div>
      <p>{{ $store.state.message}}</p>
      <button v-on:click="$store.commit('updateMessage')">update </button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

