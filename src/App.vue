<script setup>
import VueSound from './components/VueSound.vue'
</script>

<template>
  <main>
    <div class="l-container u-padding--double--bottom">
      <div class="u-align--center">
        <img src="/logo.png" alt="vue sound" width="300" />
      </div>
      <h1 class="u-align--center u-space--bottom">Vue Sound</h1>
      <p class="u-align--center u-space--bottom">
        An accessible audio player built with Vue!
      </p>
      <p class="u-align--center u-space--double--bottom">
        <a href="https://github.com/kimlarocca/vue-sound">View on GitHub</a>
      </p>
      <vue-sound
        show-download
        title="Haydn Cello Concerto"
        title-link="https://github.com/kimlarocca/vue-sound"
        details="Lorem Ipsum Dolor Sit Amet"
        details-link="https://github.com/kimlarocca/vue-sound"
        file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      />
      <h3 class="u-align--center u-space--double--top u-space--bottom">
        Livestream / Slim Version
      </h3>
      <vue-sound
        livestream
        title="Haydn Cello Concerto"
        title-link="https://github.com/kimlarocca/vue-sound"
        details="Lorem Ipsum Dolor Sit Amet"
        details-link="https://github.com/kimlarocca/vue-sound"
        file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      />
    </div>
  </main>
</template>
