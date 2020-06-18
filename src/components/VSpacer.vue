<template>
  <div class="v-spacer" :class="spacingClass"/>
</template>

<script>
  export default {
    name: 'VSpacer',
    props: {
      size: String
    },
    computed: {
      spacingClass () {
        if (this.$props.size) {
          return 'u-padding--' + this.size + '--top'
        } else {
          return 'u-padding--top'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-spacer {
    clear: both;
  }
</style>
