<template>
  <section class="content-blade">
    <div class="l-grid l-grid--large-gutters" :class="getLayout()">
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
        <p v-if="hasPretitle" class="pretitle u-space--bottom">{{ pretitle }}</p>
        <h3 v-if="hasTitle" class="u-space--bottom">{{ title }}</h3>
        <slot name="content"></slot>
        <p v-if="hasLink && hasCta" class="u-space--top">
          <a :href="link" target="_blank">{{cta}}</a>
        </p>
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
      pretitle: String,
      title: String,
      image: String,
      altText: String,
      video: String,
      alignment: String,
      verticalAlignment: String,
      layout: {
        type: String,
        default: 'equal'
      },
      cta: {
        type: String,
        default: 'Read More'
      },
      link: String
    },
    computed: {
      hasPretitle () {
        return !!this.$props.pretitle
      },
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
      },
      verticalAlignment () {
        if (this.$props.verticalAlignment === 'middle') {
          return 'l-grid--middle'
        } else {
          return 'l-grid--top'
        }
      }
    },
    methods: {
      getLayout () {
        if (this.$props.alignment === 'right') {
          if (this.$props.layout === '2x3') {
            return 'l-grid--3x2 l-grid--1up--small ' + this.verticalAlignment
          } else if (this.$props.layout === '1x4') {
            return 'l-grid--4x1 l-grid--1up--small ' + this.verticalAlignment
          } else {
            return 'l-grid--2up ' + this.verticalAlignment
          }
        } else {
          if (this.$props.layout === '2x3') {
            return 'l-grid--2x3 l-grid--1up--small ' + this.verticalAlignment
          } else if (this.$props.layout === '1x4') {
            return 'l-grid--1x4 l-grid--1up--small ' + this.verticalAlignment
          } else {
            return 'l-grid--2up ' + this.verticalAlignment
          }
        }
      }
    }
  }
</script>
