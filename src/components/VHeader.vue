<template>
  <header>
    <div class="logo">
      <img alt="black lives matter morristown nj" src="/img/logo.png"/>
    </div>
    <nav>
      <i class="fas fa-bars"></i>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'VHeader'
  }
</script>

<style lang="scss">
  header {
    position: relative;
    z-index: 100;
  }

  nav {
    position: absolute;
    top: 1rem;
    right: 1rem;

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
</style>
