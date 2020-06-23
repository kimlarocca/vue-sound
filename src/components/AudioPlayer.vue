<template>
  <div class="player">
    <div class="player-controls">
      <a @click="goBack15">
        <back15-icon />
      </a>
      <a @click="playing = !playing">
        <play-icon v-if="!playing" />
        <pause-icon v-if="playing" />
      </a>
      <a @click="goAhead15">
        <ahead15-icon />
      </a>
      <div class="player-track">
        <p class="player-track-title">
          {{ title }}
        </p>
        <div
          class="player-track-progress"
          @click="seek"
        >
          <div
            :style="{ width: percentComplete + '%' }"
            class="player-track-seeker"
          />
        </div>
        <div class="player-track-time">
          <span class="player-track-time-current">{{ currentSeconds | convertTimeHHMMSS }}</span>
          <span class="player-track-time-separator">/</span>
          <span class="player-track-time-total">{{ durationSeconds | convertTimeHHMMSS }}</span>
        </div>
      </div>
      <a
        v-if="showDownload"
        @click="download"
      >
        <download-icon />
      </a>
      <input
        v-model="volume"
        type="range"
        min="0"
        max="100"
      >
      <a
        class="player-volume"
        @mouseover.prevent="showVolume = true"
        @mouseleave.prevent="showVolume = false"
        @click="mute"
      >
        <volume-icon v-if="!muted" />
        <volume-muted-icon v-if="muted" />
      </a>
      <!--      <input v-model="volume" :style="{visibility: showVolume ? 'visible' : 'hidden'}" type="range" min="0" max="100"/>-->
    </div>
    <audio
      ref="audioFile"
      :loop="innerLoop"
      :src="file"
      preload="auto"
      style="display: none"
    />
  </div>
</template>

<script>
  import PlayIcon from './svg/PlayIcon'
  import PauseIcon from './svg/PauseIcon'
  import Back15Icon from './svg/Back15Icon'
  import Ahead15Icon from './svg/Ahead15Icon'
  import VolumeIcon from './svg/VolumeIcon'
  import VolumeMutedIcon from './svg/VolumeMutedIcon'
  import DownloadIcon from './svg/DownloadIcon'

  export default {
    name: 'AudioPlayer',
    components: { PlayIcon, PauseIcon, Back15Icon, Ahead15Icon, VolumeIcon, VolumeMutedIcon, DownloadIcon },
    filters: {
      convertTimeHHMMSS (val) {
        const hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
        return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
      }
    },
    props: {
      title: {
        type: String,
        default: null
      },
      file: {
        type: String,
        default: null
      },
      autoPlay: {
        type: Boolean,
        default: false
      },
      loop: {
        type: Boolean,
        default: false
      },
      showDownload: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        audio: undefined,
        currentSeconds: 0,
        durationSeconds: 0,
        innerLoop: false,
        loaded: false,
        playing: false,
        previousVolume: 35,
        showVolume: false,
        volume: 100
      }
    },
    computed: {
      muted () {
        return this.volume / 100 === 0
      },
      percentComplete () {
        return (this.currentSeconds / this.durationSeconds) * 100
      }
    },
    watch: {
      playing (value) {
        if (value) {
          return this.audio.play()
        }
        this.audio.pause()
      },
      volume () {
        this.audio.volume = this.volume / 100
      }
    },
    created () {
      this.innerLoop = this.loop
    },
    mounted () {
      this.audio = this.$refs.audioFile
      this.audio.addEventListener('timeupdate', this.update)
      this.audio.addEventListener('loadeddata', this.load)
      this.audio.addEventListener('pause', () => {
        this.playing = false
      })
      this.audio.addEventListener('play', () => {
        this.playing = true
      })
    },
    methods: {
      download () {
        this.stop()
        window.open(this.file, 'download')
      },
      goAhead15 () {
        this.audio.currentTime = this.audio.currentTime + 15
      },
      goBack15 () {
        this.audio.currentTime = this.audio.currentTime - 15
      },
      load () {
        if (this.audio.readyState >= 2) {
          this.loaded = true
          this.durationSeconds = parseInt(this.audio.duration)
          this.playing = this.autoPlay
          return this.playing
        }
        throw new Error('Failed to load sound file.')
      },
      mute () {
        console.log('kim')
        if (this.muted) {
          this.volume = this.previousVolume
          return this.volume
        }
        this.previousVolume = this.volume
        this.volume = 0
      },
      seek (e) {
        if (!this.loaded) return

        const el = e.target.getBoundingClientRect()
        const seekPos = (e.clientX - el.left) / el.width

        this.audio.currentTime = (this.audio.duration * seekPos)
      },
      stop () {
        this.playing = false
        this.audio.currentTime = 0
      },
      update () {
        this.currentSeconds = (this.audio.currentTime)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $player-bg: var(--color-septary);
  $player-text-color: #451a43;
  $player-progress-color: var(--color-quinary);
  $player-seeker-color: $player-text-color;
  $player-link-color: $player-text-color;

  .player {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: $player-bg;
    padding: .5rem 2rem;
  }

  .player-controls {
    display: flex;
    align-items: center;
  }

  .player-controls .back-15-icon {
    margin-right: 1rem;
  }

  .player-controls .ahead-15-icon {
    margin-left: 1rem;
  }

  .player-controls .download-icon {
    margin-right: 1rem;
  }

  .player-track {
    flex: auto;
    padding: 0 2rem;
  }

  .player-track-title {
    font-size: var(--font-size-7);
    font-weight: 500;
    margin-bottom: .5rem;
  }

  .player-track-progress {
    position: relative;
    background-color: $player-progress-color;
    cursor: pointer;
    height: 3px;
    min-width: 200px;
  }

  .player-track-progress .player-track-seeker {
    background-color: $player-seeker-color;
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
  }

  .player-track-progress .player-track-playhead {
    position: absolute;
    height: 22px;
    width: 22px;
    margin: -8px -16px;
    transform: scale(0, 0);
    left: 0;
    opacity: 0;
    bottom: 0;
    transition: opacity .2s linear, transform .2s;

    &::after {
      content: '';
      height: 22px;
      width: 22px;
      background-color: #451a43;
      border-radius: 50%;
      opacity: 1;
      display: block;
      position: absolute;
      left: calc(50% - 11px);
      top: calc(50% - 11px);
    }
  }

  .player-track-time {
    display: flex;
    justify-content: flex-end;
    font-size: var(--font-size-2);
    font-weight: 500;
  }

  .player-track-time .player-track-time-current {
    opacity: 1;
    margin-right: .25rem;
  }

  .player-track-time .player-track-time-separator {
    opacity: .6;
  }

  .player-track-time .player-track-time-total {
    opacity: .6;
    margin-left: .25rem;
  }

  .player-volume {
    display: flex;
  }

  // input range base styles

  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    background: transparent; /* Otherwise white in Chrome */
    width: 76px;
    margin-right: 1.5rem;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;

    // Hides the slider so custom styles can be added
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  // input range thumb

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--color-black);
    cursor: pointer;
    margin-top: -6px; /* (thumb height/2 + track height/2) You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  input[type=range]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--color-black);
    cursor: pointer;
  }

  input[type=range]::-ms-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--color-black);
    cursor: pointer;
  }

  // input range track

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: var(--color-black);
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: var(--color-black);
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: var(--color-black);
  }

  input[type=range]::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }

  input[type=range]::-ms-fill-lower {
    background: var(--color-black);
  }

  input[type=range]:focus::-ms-fill-lower {
    background: var(--color-black);
  }

  input[type=range]::-ms-fill-upper {
    background: var(--color-black);
  }

  input[type=range]:focus::-ms-fill-upper {
    background: var(--color-black);
  }
</style>
