<template>
  <div>
    <the-header />
    <v-spacer size="triple" />
    <main>
      <slot />
    </main>
    <v-spacer size="dec" />
    <hr class="l-container">
    <v-spacer size="double" />
    <the-all-shows-bar />
    <v-spacer size="double" />
    <hr class="l-container">
    <v-spacer size="double" />
    <the-about-bar />
    <v-spacer size="double" />
    <hr class="l-container">
    <v-spacer size="double" />
    <the-footer />
    <v-spacer size="double" />
    <audio-player
      livestream
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet this is a really long title so I can test this out!"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  </div>
</template>

<script>
  import VSpacer from '../components/VSpacer'
  import TheHeader from '../components/TheHeader'
  import TheAllShowsBar from '../components/TheAllShowsBar'
  import TheAboutBar from '../components/TheAboutBar'
  import TheFooter from '../components/TheFooter'
  import AudioPlayer from '../components/AudioPlayer'

  export default {
    name: 'Default',
    components: { VSpacer, TheHeader, TheAllShowsBar, TheAboutBar, TheFooter, AudioPlayer }
  }
</script>
