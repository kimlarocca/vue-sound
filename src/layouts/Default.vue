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
      title="Sample Audio File"
      file="https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis-Emmanuel_Jadin_-_Nocturne_No._3_in_G_minor_-_2._Allegro_molto.ogg"
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
