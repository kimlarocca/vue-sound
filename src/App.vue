<script setup>
import VueSound from './components/VueSound.vue'
</script>

<template>
  <main>
    <div>
      <div class="text-center">
        <img src="/logo.png" alt="vue sound" width="300" />
      </div>
      <h1 class="text-center mb-4">Vue Sound</h1>
      <p class="text-center mb-4">An accessible audio player built with Vue!</p>
      <p class="text-center mb-8">
        <a href="https://github.com/kimlarocca/vue-sound">View on GitHub</a>
      </p>
      <h2 class="text-center mb-4">Default Player</h2>
      <vue-sound
        show-download
        title="Haydn Cello Concerto"
        title-link="https://github.com/kimlarocca/vue-sound"
        details="Lorem Ipsum Dolor Sit Amet"
        details-link="https://github.com/kimlarocca/vue-sound"
        file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
        class="mb-8"
      />
      <h2 class="text-center mb-4">With An Image</h2>
      <vue-sound
        show-download
        image="https://images.unsplash.com/photo-1506423456648-c11ccb27338d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=750&q=80"
        title="Haydn Cello Concerto"
        title-link="https://github.com/kimlarocca/vue-sound"
        details="Lorem Ipsum Dolor Sit Amet"
        details-link="https://github.com/kimlarocca/vue-sound"
        file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
        class="mb-8"
      />
      <h2 class="text-center mb-4">Livestream / Slim Version</h2>
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
main {
  width: 1600px;
  max-width: 90%;
  margin: auto;
  font-family: "Roboto", sans-serif;
}
h1 {
  font-size: 3rem;
  margin: 0;
}
.text-center {
  text-align: center;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-8 {
  margin-bottom: 3rem;
}
</style>