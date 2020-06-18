<template>
  <section class="bread-crumbs">
    <ul>
      <li :key="index" v-for="(crumb, index) in crumbs">
        <a v-if="hasLink(crumb)" :href="crumb.link">{{ crumb.name }}</a>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'BreadCrumbs',
    props: {
      crumbs: Array
    },
    methods: {
      hasLink (crumb) {
        return !!crumb.link
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bread-crumbs a,
  .bread-crumbs a:visited,
  .bread-crumbs a:active {
    color: var(--breadcrumbs-link-color);
    text-decoration: none;

    &:hover {
      color: var(--breadcrumbs-link-color-hover);
    }
  }

  .bread-crumbs ul {
    list-style: none;
  }

  .bread-crumbs li {
    display: inline;
    margin-right: var(--breadcrumbs-spacing);
    color: var(--breadcrumbs-text);

    &:after {
      margin-left: var(--breadcrumbs-spacing);
      content: var(--breadcrumbs-seperator);
      color: var(--breadcrumbs-seperator-color);
    }

    &:last-of-type {
      &:after {
        content: '';
      }
    }
  }
</style>
