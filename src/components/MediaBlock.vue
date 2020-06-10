<template>
  <div class="responsive-embed">
    <iframe width="1240" height="700" :src="url" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Template',
    props: {
      url: String
    }
  }
</script>

<style lang="scss" scoped>
  .responsive-embed {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
