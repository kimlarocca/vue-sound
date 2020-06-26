<template>
  <main class="home">
    <div class="u-padding--double">
      <h1 class="u-align--center u-space--bottom">Vue Hifi</h1>
      <p class="u-align--center">An accessible audio player built with Vue.js. <a href="https://github.com/kimlarocca/vue-hifi">View on GitHub ></a></p>
    </div>
    <vue-hifi
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet this is a really long title so I can test this out!"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  </main>
</template>

<script>
  import VueHifi from '../components/VueHifi'

  export default {
    name: 'Default',
    components: {
      VueHifi
    }
  }
</script>
