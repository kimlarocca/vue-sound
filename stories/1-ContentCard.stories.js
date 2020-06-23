import ContentCard from '../src/components/ContentCard'

export default {
  title: 'Content Card',
  component: ContentCard
}

export const MediaOnLeft = () => ({
  components: { ContentCard },
  template: `
    <div class="sbdocs-large-container">
      <content-card
        pretitle="pretitle"
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
          <p><strong>LOREM IPSUM DOLOR SITE AMET</strong></p>
        </template>
      </content-card>
    </div>
  `
})

export const MediaOnRight = () => ({
  components: { ContentCard },
  template: `
    <div class="sbdocs-large-container">
      <content-card
        pretitle="pretitle"
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        video="https://player.vimeo.com/video/90283590"
        alignment="right"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-card>
    </div>
  `
})

export const MiddleAlignment = () => ({
  components: { ContentCard },
  template: `
    <div class="sbdocs-large-container">
      <content-card
        pretitle="pretitle"
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        verticalAlignment="middle"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem?
          </p>
        </template>
      </content-card>
    </div>
  `
})

export const TwoThirdsLayout = () => ({
  components: { ContentCard },
  template: `
    <div class="sbdocs-large-container">
      <content-card
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="2x3"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-card>
    </div>
  `
})

export const TwoThirdsWithMediaOnRight = () => ({
  components: { ContentCard },
  template: `
    <div class="sbdocs-large-container">
      <content-card
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="2x3"
        alignment="right"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-card>
    </div>
  `
})

export const OneQuarterLayout = () => ({
  components: { ContentCard },
  template: `
    <div class="sbdocs-large-container">
      <content-card
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="1x4"
      >
        <template slot="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </template>
      </content-card>
    </div>
  `
})

export const OneQuarterWithMediaOnRight = () => ({
  components: { ContentCard },
  template: `
    <div class="sbdocs-large-container">
      <content-card
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        layout="1x4"
        alignment="right"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-card>
    </div>
  `
})
