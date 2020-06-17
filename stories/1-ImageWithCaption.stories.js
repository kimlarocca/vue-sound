import ImageWithCaption from '../src/components/ImageWithCaption'

export default {
  title: 'Image With Caption',
  component: ImageWithCaption
}

export const WithGradient = () => ({
  components: { ImageWithCaption },
  template: `
    <div class="sbdocs-small-container">
      <image-with-caption
        image="./assets/Placeholder-Image-4_3.png"
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
        image="./assets/Placeholder-Image-4_3.png"
        altText="lorem ipsum dolor"
        caption="by john doe"
        link="http://www.bing.com"
        :hasGradient="false"
      >
      </image-with-caption>
    </div>
`
})
