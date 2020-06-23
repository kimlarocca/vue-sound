import AudioPlayer from '../src/components/AudioPlayer'

export default {
  title: 'Audio Player',
  component: AudioPlayer
}

export const Default = () => ({
  components: { AudioPlayer },
  template: `
    <audio-player
      file="https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis-Emmanuel_Jadin_-_Nocturne_No._3_in_G_minor_-_2._Allegro_molto.ogg"
    />
  `
})
