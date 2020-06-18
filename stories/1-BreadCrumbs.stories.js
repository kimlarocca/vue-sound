import BreadCrumbs from '../src/components/BreadCrumbs'

export default {
  title: 'Bread Crumbs',
  component: BreadCrumbs
}

export const All = () => ({
  components: { BreadCrumbs },
  template: `
    <div class="sbdocs-large-container">
      <bread-crumbs
        :crumbs="[{name: 'Home', link: 'http://www.google.com'},{name: 'Resources', link: 'http://www.yahoo.com'},{name: 'This Article', link: ''}]"
      />
    </div>
  `
})
