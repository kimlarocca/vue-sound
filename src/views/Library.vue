<template>
  <main class="library">
    <h1 class="u-space--quad--bottom">Library</h1>
    <h3 class="u-space--quad--bottom">Cards</h3>
    <div class="l-grid l-grid--3up u-space--double--bottom">
      <card
        class="u-space--bottom"
        header="Header"
        image="https://picsum.photos/600/400?grayscale"
        altText="alternative text"
        subtitle="subtitle"
        title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
      <card
        class="u-space--bottom"
        image="https://picsum.photos/600/400?grayscale"
        altText="alternative text"
        :hasTextLink="true"
        subtitle="subtitle"
        title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
      <card
        class="u-space--bottom"
        video="https://player.vimeo.com/video/90283590"
        link="http://www.google.com"
        :hasTextLink="true"
        cta="check it out"
        subtitle="subtitle"
        title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
    </div>
    <hr class="u-space--quad--top u-space--quad--bottom">
    <h3 class="u-space--quad--bottom">Content Blades</h3>
    <content-blade
      class="u-space--quad--bottom"
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      image="https://picsum.photos/600/400?grayscale"
      altText="alt text"
    >
      <template slot="content">
        <p class="u-space--bottom">Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
          lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
          ultrices
        </p>
        <p><strong>LOREM IPSUM DOLOR SITE AMET</strong></p>
      </template>
    </content-blade>
    <content-blade
      title="Title Lorem Ipsum Dolor"
      link="http://www.google.com"
      cta="check this out"
      video="https://player.vimeo.com/video/90283590"
      alignment="right"
    >
      <template slot="content">
        <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
          lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
          ultrices
        </p>
      </template>
    </content-blade>
    <hr class="u-space--quad--top u-space--quad--bottom">
    <h3 class="u-space--quad--bottom">Image with Caption</h3>

    <div class="l-grid l-grid--3up u-space--double--bottom">
      <image-with-caption
        image="https://picsum.photos/600/400?grayscale"
        altText="lorem ipsum dolor"
        caption="by john doe"
        link="http://www.bing.com"
      >
      </image-with-caption>
      <image-with-caption
        image="https://picsum.photos/600/400?grayscale"
        altText="lorem ipsum dolor"
        caption="by john doe"
        link="http://www.google.com"
        :hasGradient="false"
      >
      </image-with-caption>
    </div>
    <hr class="u-space--quad--top u-space--quad--bottom">
    <h3 class="u-space--quad--bottom">Social Links</h3>
    <ul class="social-links">
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
    <hr class="u-space--quad--top u-space--quad--bottom">
  </main>
</template>

<script>
  import Card from '../components/Card'
  import ContentBlade from '../components/ContentBlade'
  import ImageWithCaption from '../components/ImageWithCaption'
  import SocialLink from '../components/SocialLink'

  export default {
    name: 'CardPage',
    components: {
      card: Card,
      'content-blade': ContentBlade,
      'image-with-caption': ImageWithCaption,
      'social-link': SocialLink
    }
  }
</script>
