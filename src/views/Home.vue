<template>
  <section class="home">
    <div class="container">
      <h1>Join the movement, fight for freedom!!</h1>
      <a class="button arrow">take action</a>
    </div>
    <div class="hero"></div>
  </section>
</template>

<style lang="scss" scoped>
  .home {
    background: var(--color-primary);
    min-height: calc(100vh - 10rem);
    position: relative;
    padding: 4rem 0 0 0;
  }

  .hero {
    z-index: 10;
    position: absolute;
    background: url(https://images.unsplash.com/photo-1591155426209-23831d47700d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80) no-repeat;
    top: 4rem;
    right: -3rem;
    height: calc(100vh - 13rem);
    left: 12rem;
    width: 100vw;
    background-size: cover;
  }

  .container {
    margin-left: 8rem;
  }

  h1 {
    position: relative;
    z-index: 20;
    transform: rotate(-5deg);
    font-family: var(--font-family-rock-salt);
    color: var(--color-white);
    text-shadow: 0 0 20px var(--color-dark-gray);
    font-size: 6rem;
    line-height: 6rem;
    margin-bottom: 7rem;
  }

  .button {
    position: relative;
    z-index: 30;
  }
</style>
