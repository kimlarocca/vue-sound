<template>
  <div id="app">
    <v-header/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import VHeader from './components/VHeader'

  export default {
    components: { VHeader }
  }
</script>
