<template>

  <div class="image-with-caption">
    <a v-if="hasLink" :href="link" :aria-label="caption"></a>
    <img :src="image" :alt="altText">
    <div v-if="hasCaption" class="caption">{{caption}}</div>
    <div v-if="hasGradient" class="black-gradient-overlay"></div>
  </div>

</template>

<script>
  export default {
    name: 'PhotoWithCaption',
    props: {
      image: String,
      altText: String,
      caption: String,
      link: String,
      hasGradient: {
        default: true
      }
    },
    computed: {
      hasLink () {
        return !!this.$props.link
      },
      hasCaption () {
        return !!this.$props.caption
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-with-caption {
    position: relative;
    display: inline-block;

    a,
    a:visited,
    a:active {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: transparent;
    }

    .caption {
      position: absolute;
      color: var(--image-with-caption-text);
      z-index: 2;
      right: 1rem;
      bottom: 1rem;
    }
  }

  .black-gradient-overlay {
    background: var(--image-with-caption-gradient);
    position: absolute;
    height: 100px;
    bottom: 0;
    width: 100%;
    right: 0;
    left: 0;
    z-index: 1;
  }
</style>
