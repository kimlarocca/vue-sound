<template>
    <section class="content-blade">
        <div class="l-grid l-grid--middle l-grid--large-gutters"
             :class="rightAligned ? 'l-grid--3x2' : 'l-grid--2x3'">
            <div v-if="hasImage"
                 :class="rightAligned ? 'l-grid--order-2-large' : 'l-grid--order-1-large'">
                <img :src="image" :alt="altText">
            </div>
            <div v-if="hasVideo"
                 :class="rightAligned ? 'l-grid--order-2-large' : 'l-grid--order-1-large'">
                <media-block :url="video"></media-block>
            </div>
            <div class="content"
                 :class="rightAligned ? 'l-grid--order-1-large' : 'l-grid--order-2-large'">
                <h3 v-if="hasTitle" class="u-space--double--bottom">{{ title }}</h3>
                <slot name="content"></slot>
                <template v-if="hasLink && hasCta">
                    <a :href="link" class="button u-space--double--top" target="_blank">{{cta}}</a>
                </template>
            </div>
        </div>
    </section>
</template>

<script>
  import MediaBlock from './MediaBlock'

  export default {
    name: 'ContentBlade',
    components: {
      'media-block': MediaBlock
    },
    props: {
      title: String,
      image: String,
      altText: String,
      video: String,
      alignment: String,
      cta: {
        type: String,
        default: 'learn more'
      },
      link: String
    },
    computed: {
      hasTitle () {
        return !!this.$props.title
      },
      hasLink () {
        return !!this.$props.link
      },
      hasImage () {
        return !!this.$props.image
      },
      hasVideo () {
        return !!this.$props.video
      },
      hasCta () {
        return !!this.$props.cta
      },
      rightAligned () {
        return this.$props.alignment === 'right'
      }
    }
  }
</script>
