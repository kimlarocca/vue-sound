<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
  import VHeader from './components/VHeader'

  // layouts
  import Default from './layouts/Default'
  const defaultLayout = 'default'

  export default {
    components: { VHeader, Default },
    computed: {
      layout () {
        return (this.$route.meta.layout || defaultLayout + '-layout')
      }
    }
  }
</script>
