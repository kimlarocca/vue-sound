import Card from '../src/components/Card'

export default {
  title: 'Card'
}

export const WithImage = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        title="Title"
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        subdescription="subtitle"
        :hasTextLink="true"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
    </div>
  `
})

export const WithVideo = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        title="Title"
        video="https://player.vimeo.com/video/90283590"
        altText="alternative text"
        subdescription="subtitle"
        :hasTextLink="true"
        cta="click here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
    </div>
  `
})

export const WithoutTitle = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        subdescription="subtitle"
        :hasTextLink="true"
        cta="click here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
    </div>
  `
})

export const WithoutSubtitle = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        :hasTextLink="true"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
    </div>
  `
})

export const WithoutCTA = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
    </div>
  `
})

export const WithoutImage = () => ({
  components: { Card },
  template: `
    <div class="sbdocs-small-container">
      <card
        altText="alternative text"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      >
      </card>
    </div>
  `
})
