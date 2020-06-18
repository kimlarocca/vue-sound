import VButton from '../src/components/VButton'

export default {
  title: 'Button',
  component: VButton
}

export const StandardButton = () => ({
  components: { VButton },
  template: `
    <div class="sbdocs-large-container">
      <v-button href="http://www.google.com">Test Button</v-button>
    </div>
  `
})

export const InlineButton = () => ({
  components: { VButton },
  template: `
    <div class="sbdocs-small-container">
      <div class="input-group u-space--bottom">
        <label for="inline-input" class="hide-ally-element">Label</label>
        <input id="inline-input" class="input-group-field" type="number">
        <v-button type="submit" class="inline-button">Subscribe&nbsp;Now</v-button>
      </div>
    </div>
  `
})
