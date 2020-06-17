<template>
  <div>
    <v-header/>
    <v-spacer size="triple"/>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script>
  import VHeader from '../components/VHeader'
  import VSpacer from '../components/VSpacer'

  export default {
    name: 'Default',
    components: { VHeader, VSpacer }
  }
</script>
