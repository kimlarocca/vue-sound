<template>

  <div class="basic-card">
    <div v-if="hasTitle" class="title u-padding">{{ title }}</div>
    <a v-if="hasLink" :href="link" :aria-label="title"></a>
    <img v-if="hasImage" :src="image" :alt="altText"/>
    <div v-if="hasVideo">
      <media-block :url="video"></media-block>
    </div>
    <div class="content u-padding">
      <div v-if="hasSubtitle" class="subtitle u-space--bottom">{{ subtitle }}</div>
      <div class="description">{{ description }}</div>
      <template v-if="hasTextLink">
        <div class="cta u-space--top">{{ cta }}</div>
      </template>
    </div>
  </div>

</template>

<script>
  import MediaBlock from './MediaBlock'

  export default {
    name: 'BasicCard',
    components: {
      'media-block': MediaBlock
    },
    props: {
      title: String,
      video: String,
      image: String,
      altText: String,
      subtitle: String,
      description: String,
      cta: {
        type: String,
        default: 'Learn More'
      },
      link: String,
      hasTextLink: {
        default: false
      }
    },
    computed: {
      hasTitle () {
        return !!this.$props.title
      },
      hasImage () {
        return !!this.$props.image
      },
      hasLink () {
        return !!this.$props.link
      },
      hasSubtitle () {
        return !!this.$props.subtitle
      },
      hasVideo () {
        return !!this.$props.video
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-card {
    width: 100%;
    height: 100%;
    opacity: 1;
    background: var(--card-background);
    transition: var(--transition);
    position: relative;

    &:hover {
      opacity: var(--opacity-on-hover);
      cursor: pointer;
    }
  }

  .basic-card .title {
    background: var(--card-header-background);
    font-weight: 700;
  }

  .basic-card img {
    top: 0;
    left: 0;
  }

  .basic-card .content .subtitle {
    font-weight: 700;
  }

  .basic-card .content .subtitle .cta {
    color: var(--card-color-link);
  }
</style>
