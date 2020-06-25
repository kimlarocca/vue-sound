import VueHifi from '../src/components/VueHifi'

export default {
  title: 'Vue Hifi Audio Player',
  component: VueHifi
}

export const Default = () => ({
  components: { VueHifi },
  template: `
    <vue-hifi
      show-download
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const Livestream = () => ({
  components: { VueHifi },
  template: `
    <vue-hifi
      livestream
      show-download
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutDownloadButton = () => ({
  components: { VueHifi },
  template: `
    <vue-hifi
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutLinks = () => ({
  components: { VueHifi },
  template: `
    <vue-hifi
      show-download
      title="The Show"
      details="Lorem Ipsum Dolor Sit Amet"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutDetails = () => ({
  components: { VueHifi },
  template: `
    <vue-hifi
      show-download
      title="The Show"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutATitle = () => ({
  components: { VueHifi },
  template: `
    <vue-hifi
      show-download
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutSkipButtons = () => ({
  components: { VueHifi },
  template: `
    <vue-hifi
      :show-skip="false"
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})
