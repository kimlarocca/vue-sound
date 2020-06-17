<template>
  <footer>
    <div class="container">

      <div class="grid-x grid-margin-x">
        <div class="cell large-4 content">
          <div class="margin-bottom-2 text-center large-text-left">
            <img src="https://via.placeholder.com/225x70?text=logo" alt="placeholder image"/>
          </div>
          <ul class="social-links text-center large-text-left margin-bottom-1">
            <social-link
              icon="fab fa-facebook-f"
              link="https://www.facebook.com"
              altText="facebook"
            >
            </social-link>
            <social-link
              icon="fab fa-twitter"
              link="https://www.twitter.com"
              altText="twitter"
            >
            </social-link>
            <social-link
              icon="fab fa-youtube"
              link="https://www.youtube.com"
              altText="youtube"
            >
            </social-link>
            <social-link
              icon="fab fa-instagram"
              link="https://www.instagram.com"
              altText="instagram"
            >
            </social-link>
            <social-link
              icon="fab fa-linkedin-in"
              link="https://www.linkedin.com"
              altText="linkedin"
            >
            </social-link>
          </ul>
          <div class="margin-bottom-1 like-h6">subscribe to our newsletter</div>
          <form>
            <label for="emailAddress" class="hide-ally-element"/>
            <input id="emailAddress" type="text" placeholder="email address">
            <button class="button">submit</button>
          </form>
        </div>
        <div class="cell large-2 menus">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <h6>link group 1</h6>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in servicesLinks" :key="index"><a :href="link.url">{{
                    link.name }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
        <div class="cell large-2">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <div class="like-h6">link group 2</div>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in whyLinks" :key="index"><a :href="link.url">{{ link.name
                    }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
        <div class="cell large-2">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <div class="like-h6">link group 3</div>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in aboutLinks" :key="index"><a :href="link.url">{{
                    link.name }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
        <div class="cell large-2">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <div class="like-h6">link group 4</div>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in resourcesLinks" :key="index"><a :href="link.url">{{
                    link.name }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
      </div>

      <div class="bottom content">
        <ul>
          <li class="copyright">©{{ currentYear }} Company Name. All rights reserved.</li>
          <li v-for="(link, index) in footerLinks" :key="index">
            <a :href="link.url"> {{ link.name }}</a>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
  import SocialLink from '../components/SocialLink'
  import Accordion from '../components/Accordion'
  import AccordionItem from '../components/AccordionItem'
  import navigation from '../assets/json/navigation'

  export default {
    name: 'VFooter',
    components: {
      'social-link': SocialLink,
      'accordion': Accordion,
      'accordion-item': AccordionItem
    },
    data: function () {
      return {
        currentYear: this.getCurrentYear(),
        servicesLinks: navigation.services,
        whyLinks: navigation.why,
        aboutLinks: navigation.about,
        resourcesLinks: navigation.resources,
        footerLinks: navigation.footerLinks
      }
    },
    methods: {
      getCurrentYear () {
        return new Date().getFullYear()
      }
    }
  }
</script>
