import BasicCard from '../src/components/BasicCard'

export default {
  title: 'Basic Card',
  component: BasicCard
}

export const WithAnImage = () => ({
  components: { BasicCard },
  template: `
    <div class="sbdocs-small-container">
      <basic-card
        title="Title"
        image="./assets/Placeholder-Image-4_3.png"
        alt-text="alternative text"
        subdescription="subtitle"
        :has-text-link="true"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      />
    </div>
  `
})

export const WithAVideo = () => ({
  components: { BasicCard },
  template: `
    <div class="sbdocs-small-container">
      <basic-card
        title="Title"
        video="https://player.vimeo.com/video/90283590"
        alt-text="alternative text"
        subdescription="subtitle"
        :has-text-link="true"
        cta="Click Here"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      />
    </div>
  `
})
