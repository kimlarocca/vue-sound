import ContentBlade from '../src/components/ContentBlade'

export default {
  title: 'Content Blade'
}

export const MediaOnLeft = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        pretitle="pretitle"
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        image="https://picsum.photos/768/400?grayscale"
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
    </div>
  `
})

export const MediaOnRight = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        pretitle="pretitle"
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
    </div>
  `
})

export const TwoThirdsLayout = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="https://picsum.photos/768/400?grayscale"
        layout="2x3"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const TwoThirdsWithMediaOnRight = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="https://picsum.photos/768/400?grayscale"
        layout="2x3"
        alignment="right"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const OneQuarterLayout = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="https://picsum.photos/768/400?grayscale"
        layout="1x4"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-blade>
    </div>
  `
})

export const OneQuarterWithMediaOnRight = () => ({
  components: { ContentBlade },
  template: `
    <div class="sbdocs-large-container">
      <content-blade
        title="Title Lorem Ipsum Dolor"
        link="http://www.google.com"
        cta="check this out"
        image="https://picsum.photos/768/400?grayscale"
        layout="1x4"
        alignment="right"
      >
        <template slot="content">
          <p>Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
            lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
            ultrices
          </p>
        </template>
      </content-blade>
    </div>
  `
})
