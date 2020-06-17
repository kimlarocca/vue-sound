<template>
  <li>
    <a :href="link" target="_blank" :aria-label="label">
      <i :class="icon"/>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'SocialLink',
    props: {
      icon: String,
      link: String,
      label: String
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
        background: var(--icon-background-color);
        height: var(--icon-size);
        width: var(--icon-size);
        display: inline-block;
        font-size: var(--icon-size);
        transition: var(--transition);

        &:hover {
          color: var(--icon-color-hover);
          background: var(--icon-background-color-hover);
        }
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

  }
</style>
