import IconLink from '../src/components/IconLink'

export default {
  title: 'Icon Link',
  component: IconLink
}

export const All = () => ({
  components: { IconLink },
  template: `
    <div class="sbdocs-large-container">
      <ul class="icon-links">
        <icon-link
          icon="./assets/spotify.svg"
          link="https://www.spotify.com"
          alt-text="spotify"
        />
      </ul>
    </div>
  `
})
