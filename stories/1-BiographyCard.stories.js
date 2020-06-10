import BiographyCard from '../src/components/BiographyCard'

export default {
  title: 'Biography Card'
}

export const VerticalLayout = () => ({
  components: { BiographyCard },
  template: `
    <div class="sbdocs-small-container">
      <biography-card
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        title="President, Google.com, Seattle"
        name="John Doe 1"
        link="http://www.google.com"
        cta="read more"
        layout="vertical"
        hasTextLink
      />
    </div>
  `
})

export const VerticalLayoutWithContentSlot = () => ({
  components: { BiographyCard },
  template: `
    <div class="sbdocs-small-container">
      <biography-card
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        name="John Doe 1"
        link="http://www.google.com"
        layout="vertical"
        hasTextLink
      >
        <slot>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </slot>
      </biography-card>
    </div>
  `
})

export const HorizontalLayout = () => ({
  components: { BiographyCard },
  template: `
    <div class="sbdocs-large-container">
      <biography-card
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        title="President, Google.com, Seattle"
        name="John Doe 1"
        link="http://www.google.com"
        cta="read more"
        layout="horizontal"
        hasTextLink
      />
    </div>
  `
})

export const HorizontalLayoutWithContentSlot = () => ({
  components: { BiographyCard },
  template: `
    <div class="sbdocs-large-container">
      <biography-card
        image="https://picsum.photos/768/400?grayscale"
        altText="alternative text"
        name="John Doe 1"
        link="http://www.google.com"
        layout="horizontal"
        hasTextLink
      >
        <slot>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
            ipsum odio
            praesentium quis.
          </p>
        </slot>
      </biography-card>
    </div>
  `
})
