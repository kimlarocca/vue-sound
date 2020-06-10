<template>
  <a class="button u-padding">
    <slot>button</slot>
    <i v-if="hasIcon" :class="icon"></i>
  </a>
</template>

<script>
  export default {
    name: 'VButton',
    props: {
      icon: String
    },
    computed: {
      hasIcon () {
        return !!this.$props.icon
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button,
  .button:visited,
  .button:active {
    display: inline-block;
    background: var(--button-background);
    border: var(--button-border);
    color: var(--button-text);
    text-transform: var(--button-text-transform);
    font-weight: var(--button-font-weight);
    font-size: var(--button-font-size);
    padding: var(--button-padding);
    transition: var(--transition);

    &:hover {
      background: var(--button-background-hover);
      border: var(--button-border-hover);
      color: var(--button-text-hover);
    }

    i {
      margin-left: 0.5rem;
    }
  }
</style>
