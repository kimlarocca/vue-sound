<template>
  <header>
    <div class="l-container">
      <div class="l-grid l-grid--2up u-padding--top u-padding--half--bottom">
        <div>
          <logo/>
        </div>
        <div class="u-align--right u-hide-until--m">
          <ul class="social-links">
            <social-link
              icon="fab fa-facebook-f"
              link="https://www.facebook.com/newsounds/"
              label="facebook"
            />
            <social-link
              icon="fab fa-twitter"
              link="https://twitter.com/newsounds"
              label="twitter"
            />
            <social-link
              icon="fab fa-instagram"
              link="https://www.instagram.com/newsounds/"
              label="instagram"
            />
            <social-link
              icon="fab fa-youtube"
              link="https://www.youtube.com/channel/UC-8reoPK4lLyGUZjANQKxuA"
              label="youtube"
            />
            <social-link
              icon="fab fa-spotify"
              link="https://open.spotify.com/user/newsoundsmusic"
              label="spotify"
            />
          </ul>
        </div>
      </div>
      <hr>
      <div class="u-padding--half--top u-padding--half--bottom">
        <v-button class="u-display--inline-block">Listen Live</v-button>
        <img class="u-display--inline-block" src="/img/sinewave.gif" alt="sine wave animation">
      </div>
      <hr>
      <v-nav/>
      <hr>
    </div>
  </header>
</template>

<script>
  import Logo from './svg/Logo'
  import VNav from './VNav'
  import SocialLink from './SocialLink'
  import VButton from './VButton'

  export default {
    name: 'VHeader',
    components: { Logo, VNav, SocialLink, VButton }
  }
</script>

<style lang="scss" scoped>

</style>
