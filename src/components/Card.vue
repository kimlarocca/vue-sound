<template>

  <div class="card">
    <div v-if="hasHeader" class="header">{{ header }}</div>
    <a v-if="hasLink" :href="link" :aria-label="title"></a>
    <img v-if="hasImage" :src="image" :alt="altText"/>
    <div v-if="hasVideo">
      <media-block :url="video"></media-block>
    </div>
    <div class="content">
      <div v-if="hasSubtitle" class="subtitle">{{ subtitle }}</div>
      <div class="title">{{ title }}</div>
      <template v-if="hasTextLink">
        <div class="cta">{{ cta }}</div>
      </template>
    </div>
  </div>

</template>

<script>
  import MediaBlock from './MediaBlock'

  export default {
    name: 'Card',
    components: {
      'media-block': MediaBlock
    },
    props: {
      header: String,
      video: String,
      image: String,
      altText: String,
      subtitle: String,
      title: String,
      cta: {
        type: String,
        default: 'learn more'
      },
      link: String,
      hasTextLink: {
        default: false
      }
    },
    computed: {
      hasHeader () {
        return !!this.$props.header
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
  .card {
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

    .header {
      padding: var(--card-padding);
      background: var(--card-header-background);
      text-transform: uppercase;
      font-weight: 700;
    }

    img {
      top: 0;
      left: 0;
    }

    .content {
      padding: var(--card-padding);

      .subtitle {
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: var(--card-margin);
      }

      .title {
        margin-bottom: 0;
      }

      .cta {
        font-weight: 700;
        color: var(--card-color-link);
        margin: var(--card-margin) 0 0;

        &::after {
          font-family: var(--font-family-fa);
          font-weight: 900;
          content: "\f30b";
          margin-left: 0.5rem;
        }
      }
    }
  }
</style>
