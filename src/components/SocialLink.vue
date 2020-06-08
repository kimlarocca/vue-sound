<template>
  <li>
    <a :href="link" :style="{ background: backgroundColor }" :class="{'no-background' : !hasBackground }">
      <i :class="icon" :style="{ color: iconColor }"/>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'SocialLink',
    props: {
      id: Number,
      icon: String,
      link: String,
      altText: String,
      iconColor: String,
      backgroundColor: String
    },
    computed: {
      hasBackground () {
        return !!this.$props.backgroundColor
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social-links {
    li {
      display: inline-block;
      margin-right: 1rem;

      a,
      a:visited,
      a:active {
        color: var(--icon-color);
        background: transparent;
        height: 1.5rem;
        width: 1.5rem;
        display: inline-block;
        font-size: 1rem;
        text-align: center;
        opacity: 1;
        transition: var(--transition);

        &:hover {
          opacity: var(--opacity-on-hover);
        }

        &.no-background {
          height: 1rem;
          width: 1rem;
        }
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

  }
</style>
