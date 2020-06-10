import ImageWithCaption from '../src/components/ImageWithCaption'

export default {
  title: 'Image With Caption'
}

export const WithGradient = () => ({
  components: { ImageWithCaption },
  template: `
    <div class="sbdocs-small-container">
      <image-with-caption
        image="https://picsum.photos/768/400?grayscale"
        altText="lorem ipsum dolor"
        caption="by john doe"
        link="http://www.bing.com"
      >
      </image-with-caption>
    </div>
`
})

export const WithoutGradient = () => ({
  components: { ImageWithCaption },
  template: `
    <div class="sbdocs-small-container">
      <image-with-caption
        image="https://picsum.photos/768/400?grayscale"
        altText="lorem ipsum dolor"
        caption="by john doe"
        link="http://www.bing.com"
        :hasGradient="false"
      >
      </image-with-caption>
    </div>
`
})
