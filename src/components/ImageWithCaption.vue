<template>
  <div class="image-with-caption">
    <a
      v-if="hasLink"
      :href="link"
      :aria-label="caption"
    />
    <img
      :src="image"
      :alt="altText"
    >
    <div
      v-if="hasCaption"
      class="caption"
    >
      {{ caption }}
    </div>
    <div
      v-if="hasGradient"
      class="black-gradient-overlay"
    />
  </div>
</template>

<script>
  export default {
    name: 'ImageWithCaption',
    props: {
      image: {
        type: String,
        default: null
      },
      altText: {
        type: String,
        default: null
      },
      caption: {
        type: String,
        default: null
      },
      link: {
        type: String,
        default: null
      },
      hasGradient: {
        type: Boolean,
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
  }

  .image-with-caption a,
  .image-with-caption a:visited,
  .image-with-caption a:active {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
  }

  .image-with-caption .caption {
    position: absolute;
    color: var(--image-with-caption-text);
    z-index: 2;
    right: 1rem;
    bottom: 1rem;
  }

  .image-with-caption .black-gradient-overlay {
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
