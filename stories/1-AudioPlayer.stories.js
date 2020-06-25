import AudioPlayer from '../src/components/AudioPlayer'

export default {
  title: 'Audio Player',
  component: AudioPlayer
}

export const Default = () => ({
  components: { AudioPlayer },
  template: `
    <audio-player
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
  components: { AudioPlayer },
  template: `
    <audio-player
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
