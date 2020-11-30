<template>
  <section class="container">
    <div>
      <p>{{ $store.state.message}}</p>
      <!-- <button v-on:click="$store.commit('updateMessage')">update </button> -->
      <button v-on:click="$store.commit('updateMessage', 'commit with payload')">update </button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

