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
        alt-text="alt text"
        caption="by john doe"
        link="http://www.bing.com"
      />
    </div>
`
})

export const WithoutGradient = () => ({
  components: { ImageWithCaption },
  template: `
    <div class="sbdocs-small-container">
      <image-with-caption
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alt text"
        caption="by john doe"
        link="http://www.bing.com"
        :hasGradient="false"
      />
    </div>
`
})
