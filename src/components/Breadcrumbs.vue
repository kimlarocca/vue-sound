<template>
  <section class="breadcrumbs">
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
    name: 'Breadcrumbs',
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
  .breadcrumbs {
    a,
    a:visited,
    a:active {
      color: var(--breadcrumbs-link-color);
      text-decoration: none;

      &:hover {
        color: var(--breadcrumbs-link-color-hover);
      }
    }

    ul {
      list-style: none;

      li {
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
    }
  }
</style>
