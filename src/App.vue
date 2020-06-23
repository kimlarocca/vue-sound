<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
  // layouts
  import Default from './layouts/Default'

  const defaultLayout = 'default'

  export default {
    components: { Default },
    computed: {
      layout () {
        return (this.$route.meta.layout || defaultLayout + '-layout')
      }
    }
  }
</script>
