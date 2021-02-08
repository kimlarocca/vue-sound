import VueSound from '../src/components/VueSound'

export default {
  title: 'Vue Sound Audio Player'
}

export const Default = () => ({
  components: { VueSound },
  template: `
    <vue-sound
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
  components: { VueSound },
  template: `
    <vue-sound
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
  components: { VueSound },
  template: `
    <vue-sound
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutLinks = () => ({
  components: { VueSound },
  template: `
    <vue-sound
      show-download
      title="The Show"
      details="Lorem Ipsum Dolor Sit Amet"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutDetails = () => ({
  components: { VueSound },
  template: `
    <vue-sound
      show-download
      title="The Show"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutATitle = () => ({
  components: { VueSound },
  template: `
    <vue-sound
      show-download
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const WithoutSkipButtons = () => ({
  components: { VueSound },
  template: `
    <vue-sound
      :show-skip="false"
      title="The Show"
      title-link="http://www.google.com"
      details="Lorem Ipsum Dolor Sit Amet"
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})
