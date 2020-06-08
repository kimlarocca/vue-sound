<template>
  <header>
    <div class="logo">
      <img alt="black lives matter morristown nj" src="/img/logo.png"/>
    </div>
    <nav>
      <a class="button donate">donate</a>
      <i class="fas fa-bars"></i>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'VHeader'
  }
</script>

<style lang="scss" scoped>
  header {
    position: relative;
    z-index: 100;
  }

  nav {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;

    i {
      color: black;
      font-size: 2rem;
    }
  }

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    width: 150px;
    height: 175px;
    display: flex;
    padding: 1rem;
  }

  .donate {
    background: var(--color-secondary);
    border: var(--color-secondary);
    color: var(--color-white);
    opacity: 1;
    margin-right: 1.5rem;
    padding: .25rem 1.5rem;
    line-height: 1.45rem;

    &:hover {
      background: var(--color-secondary);
      border: var(--color-secondary);
      color: var(--color-white);
      opacity: var(--opacity-on-hover);
    }
  }
</style>
