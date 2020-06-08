<template>
  <div>
    <v-header/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
  import VHeader from '../components/VHeader'

  export default {
    name: 'Default',
    components: { VHeader }
  }
</script>
