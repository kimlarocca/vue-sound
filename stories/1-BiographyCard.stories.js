import BiographyCard from '../src/components/BiographyCard'

export default {
  title: 'Biography Card',
  component: BiographyCard
}

export const VerticalLayout = () => ({
  components: {BiographyCard},
  template: `
    <div class="sbdocs-xsmall-container">
      <biography-card
        image="./assets/Placeholder-Image-1_1.png"
        altText="alternative text"
        name="John Doe 1"
        title="President, Google.com, Seattle"
        link="http://www.google.com"
        layout="vertical"
        hasTextLink
        cta="Learn More"
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
  components: {BiographyCard},
  template: `
    <div class="sbdocs-large-container">
      <biography-card
        image="./assets/Placeholder-Image-1_1.png"
        altText="alternative text"
        name="John Doe 1"
        title="President, Google.com, Seattle"
        link="http://www.google.com"
        layout="horizontal"
        hasTextLink
        cta="Learn more about John"
      >
        <slot>
          <p class="u-space--bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </slot>
      </biography-card>
    </div>
  `
})
