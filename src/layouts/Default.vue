<template>
  <vue-hifi
    title="The Show"
    title-link="http://www.google.com"
    details="Lorem Ipsum Dolor Sit Amet this is a really long title so I can test this out!"
    details-link="http://www.bing.com"
    file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
  />
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
