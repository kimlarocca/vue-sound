<template>
  <main class="home">
    <div class="u-padding--double">
      <div class="u-align--center">
        <img
          src="/logo.png"
          alt="vue sound"
        >
      </div>
      <h1 class="u-align--center u-space--bottom">
        Vue Sound
      </h1>
      <p class="u-align--center u-space--bottom">
        An accessible audio player built with Vue
      </p>
      <p class="u-align--center">
        <a href="https://github.com/kimlarocca/vue-sound">View on GitHub</a>
      </p>
    </div>
    <div class="l-container">
      <vue-sound
        title="Haydn Cello Concerto"
        title-link="https://github.com/kimlarocca/vue-sound"
        details="Lorem Ipsum Dolor Sit Amet"
        details-link="https://github.com/kimlarocca/vue-sound"
        file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      />
    </div>
  </main>
</template>

<script>
import VueSound from '../components/VueSound'

export default {
  name: 'Default',
  components: {
    VueSound
  }
}
</script>
