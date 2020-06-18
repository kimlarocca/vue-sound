<template>
  <div>
    <the-header/>
    <v-spacer size="triple"/>
    <main>
      <slot/>
    </main>
    <v-spacer size="dec"/>
    <hr class="l-container">
    <v-spacer size="double"/>
    <the-all-shows-bar/>
    <v-spacer size="double"/>
    <hr class="l-container">
    <v-spacer size="double"/>
    <the-about-bar/>
    <v-spacer size="double"/>
    <hr class="l-container">
    <v-spacer size="double"/>
    <the-footer/>
    <v-spacer size="double"/>
  </div>
</template>

<script>
  import VSpacer from '../components/VSpacer'
  import TheHeader from '../components/TheHeader'
  import TheAllShowsBar from '../components/TheAllShowsBar'
  import TheAboutBar from '../components/TheAboutBar'
  import TheFooter from '../components/TheFooter'

  export default {
    name: 'Default',
    components: { VSpacer, TheHeader, TheAllShowsBar, TheAboutBar, TheFooter }
  }
</script>
