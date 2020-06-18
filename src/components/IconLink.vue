<template>
  <li class="icon-link-item" :data-label="altText">
    <a :href="link" target="_blank" class="icon-link">
      <img :src="icon" alt="alt-text">
    </a>
  </li>
</template>

<script>
  export default {
    name: 'IconLink',
    props: {
      icon: String,
      link: String,
      altText: String
    }
  }
</script>

<style lang="scss" scoped>
  .icon-links .icon-link-item {
    display: inline-block;
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .icon-links .icon-link,
  .icon-links .icon-link:visited,
  .icon-links .icon-link:active {
    height: var(--icon-size);
    width: var(--icon-size);
    display: inline-block;
    transition: var(--transition);
    filter: grayscale(100%);

    &:hover {
      filter: none;
    }
  }
</style>
