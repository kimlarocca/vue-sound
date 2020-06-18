<template>
  <div class="biography-card" :class="layout">
    <div class="l-grid" :class="{'l-grid--1x4 l-grid--1up--small': isHorizontal}">
      <div v-if="hasImage">
        <img :src="image" :alt="altText"/>
      </div>
      <div>
        <div class="name"><a v-if="hasLink && hasName" :href="link">{{ name }}</a></div>
        <div v-if="!hasLink && hasName" class="name">{{ name }}</div>
        <div v-if="hasTitle" class="title">{{ title }}</div>
        <div v-if="hasSlot" class="u-space--bottom"></div>
        <slot></slot>
        <div v-if="hasSlot" class="u-space--bottom"></div>
        <p v-if="hasCta && hasLink && !hasTextLink" class="u-space--top"><a :href="link" class="button">{{ cta }}</a>
        </p>
        <p v-if="hasCta && hasLink && hasTextLink" class="u-space--top"><a :href="link">{{ cta }}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamMemberCard',
    props: {
      name: String,
      image: String,
      altText: String,
      title: String,
      cta: String,
      link: String,
      hasTextLink: {
        type: Boolean,
        default: false
      },
      layout: {
        type: String,
        default: 'vertical'
      }
    },
    computed: {
      hasSlot () {
        return !!this.$slots
      },
      hasImage () {
        return !!this.$props.image
      },
      hasLink () {
        return !!this.$props.link
      },
      hasCta () {
        return !!this.$props.cta
      },
      hasName () {
        return !!this.$props.name
      },
      hasTitle () {
        return !!this.$props.title
      },
      isHorizontal () {
        return this.$props.layout === 'horizontal'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .biography-card .name {
    font-weight: 700;
  }

  .biography-card .title {
    font-style: italic;
  }
</style>
