<template>
  <div class="player">
    <div class="player-controls">
      <a
        v-if="showSkip && !livestream"
        class="player-back-15-icon"
        aria-label="go back 15 seconds"
        @click="goBack15"
      >
        <back15-icon />
      </a>
      <a
        class="player-play-pause-icon"
        :aria-label="playing ? 'pause' : 'play'"
        @click="togglePlay"
      >
        <play-icon v-if="!playing" />
        <pause-icon v-if="playing" />
      </a>
      <a
        v-if="showSkip && !livestream"
        class="player-ahead-15-icon"
        aria-label="go ahead 15 seconds"
        @click="goAhead15"
      >
        <ahead15-icon />
      </a>
      <div class="player-track">
        <div class="player-track-title">
          <a
            v-if="hasTitle && hasTitleLink"
            :href="titleLink"
          >
            {{ title }}
          </a>
          <span v-if="hasTitle && !hasTitleLink">{{ title }}</span>
          <span v-if="hasTitle && hasDetails"> - </span>
          <span
            v-if="hasDetails && !hasDetailsLink"
            class="player-track-title-details"
          >
            {{ details }}
          </span>
          <a
            v-if="hasDetails && hasDetailsLink"
            :href="detailsLink"
            class="player-track-title-details"
          >
            {{ details }}
          </a>
        </div>
        <template v-if="!livestream">
          <div
            class="player-track-progress"
            @click.prevent="seek"
          >
            <div
              :style="{ width: percentComplete + '%' }"
              class="player-track-seeker"
            />
            <div
              :style="{ width: percentBuffered + '%' }"
              class="player-track-buffered"
            />
          </div>
          <div class="player-track-time">
            <span class="player-track-time-current">{{ currentSeconds | convertTimeHHMMSS }}</span>
            <span class="player-track-time-separator">/</span>
            <span class="player-track-time-total">{{ durationSeconds | convertTimeHHMMSS }}</span>
          </div>
        </template>
      </div>
      <div
        class="player-volume"
        @mouseover.prevent="showVolume = true"
        @mouseleave.prevent="showVolume = false"
      >
        <label
          for="playerVolume"
          class="hide-ally-element"
        >
          volume slider
        </label>
        <transition name="slide-left">
          <input
            v-show="showVolume"
            id="playerVolume"
            v-model="volume"
            type="range"
            min="0"
            max="100"
          >
        </transition>
        <a
          tabindex="0"
          class="player-volume-icon"
          :aria-label="muted ? 'unmute' : 'mute'"
          @click="mute"
          @keypress.space.enter="mute"
        >
          <volume-icon v-if="!muted" />
          <volume-muted-icon v-if="muted" />
        </a>
      </div>
      <a
        v-if="showDownload && !livestream"
        tabindex="0"
        class="player-download-icon"
        aria-label="download"
        @click="download"
        @keypress.space.enter="download"
      >
        <download-icon />
      </a>
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
    components: {
      PlayIcon,
      PauseIcon,
      Back15Icon,
      Ahead15Icon,
      VolumeIcon,
      VolumeMutedIcon,
      DownloadIcon
    },
    filters: {
      convertTimeHHMMSS (val) {
        const hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
        return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
      }
    },
    props: {
      autoPlay: {
        type: Boolean,
        default: false
      },
      details: {
        type: String,
        default: null
      },
      detailsLink: {
        type: String,
        default: null
      },
      file: {
        type: String,
        default: null
      },
      livestream: {
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
      },
      showSkip: {
        type: Boolean,
        default: true
      },
      showTrack: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: null
      },
      titleLink: {
        type: String,
        default: null
      }
    },
    data () {
      return {
        audio: undefined,
        currentSeconds: 0,
        durationSeconds: 0,
        buffered: 0,
        innerLoop: false,
        loaded: false,
        playing: false,
        previousVolume: 35,
        showVolume: false,
        volume: 100
      }
    },
    computed: {
      hasDetails () {
        return this.$props.details
      },
      hasDetailsLink () {
        return this.$props.detailsLink
      },
      hasTitle () {
        return this.$props.title
      },
      hasTitleLink () {
        return this.$props.titleLink
      },
      muted () {
        return this.volume / 100 === 0
      },
      percentBuffered () {
        return (this.buffered / this.durationSeconds) * 100
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
      // keyboard accessibility
      window.addEventListener('keydown', event => {
        switch (event.code) {
          case 'Space':
            this.togglePlay()
            break
          case 'Enter':
            this.togglePlay()
            break
          case 'ArrowUp':
            if (this.volume < 100) this.volume++
            break
          case 'ArrowDown':
            if (this.volume > 0) this.volume--
            break
          case 'ArrowLeft':
            this.goBack15()
            break
          case 'ArrowRight':
            this.goAhead15()
            break
        }
      })
    },
    mounted () {
      this.audio = this.$refs.audioFile
      this.audio.addEventListener('timeupdate', this.update)
      this.audio.addEventListener('loadeddata', this.load)
      this.audio.addEventListener('buffered', this.update)
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
      togglePlay () {
        this.playing = !this.playing
      },
      update () {
        this.currentSeconds = this.audio.currentTime
        this.buffered = this.audio.buffered.end(0)
      }
    }
  }
</script>

<style lang="scss">
  $breakpoint: 768px;

  :root {
    --player-background: #ff9efc;
    --player-font-size: 1rem;
    --player-font-size-small: .7rem;
    --player-font-weight: 300;
    --player-font-weight-bold: 500;
    --player-text-color: #451a43;
    --player-icon-color: var(--player-text-color);
    --player-link-color: var(--player-text-color);
    --player-progress-color: #f25ced;
    --player-buffered-color: #cc4ec8;
    --player-seeker-color: #451a43;
    --player-input-range-color: var(--player-text-color);
  }

  .player {
    width: 100%;
    background-color: var(--player-background);
    padding: .5rem 1rem;
    font-weight: var(--player-font-weight);
  }

  .player a,
  .player a:visited,
  .player a:active {
    color: var(--player-link-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .player-controls {
    display: flex;
    align-items: center;
  }

  .player-back-15-icon,
  .player-play-pause-icon,
  .player-ahead-15-icon,
  .player-download-icon,
  .player-volume-icon {
    display: flex;
    fill: var(--player-icon-color);
  }

  .player-back-15-icon {
    margin-right: 1rem;
    width: 20px;
  }

  .player-ahead-15-icon {
    margin-left: 1rem;
    width: 20px;
  }

  .player-download-icon {
    display: none;
    @media all and (min-width: $breakpoint) {
      display: flex;
      margin-left: 1rem;
    }
  }

  .player-track {
    flex: auto;
    padding: 0 2rem;
    overflow: hidden;
  }

  .player-track-title {
    font-size: var(--player-font-size);
    font-weight: var(--player-font-weight-bold);
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .player-track-title-details {
    font-weight: 300;
  }

  .player-track-progress {
    position: absolute;
    background-color: var(--player-progress-color);
    cursor: pointer;
    min-width: 200px;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    @media all and (min-width: $breakpoint) {
      top: -5px;
      height: 3px;
      margin-top: .75rem;
      position: relative;
    }
  }

  .player-track-progress .player-track-seeker {
    background-color: var(--player-seeker-color);
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 20;
  }

  .player-track-progress .player-track-buffered {
    background-color: var(--player-buffered-color);
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 10;
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
      background-color: var(--player-buffered-color);
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
    font-size: var(--player-font-size-small);
    font-weight: var(--player-font-weight-bold);
    @media all and (min-width: $breakpoint) {
      justify-content: flex-end;
    }
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
    display: none;
    @media all and (min-width: $breakpoint) {
      display: flex;
      justify-content: flex-end;
    }
  }

  // input range base styles

  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    background: transparent; /* Otherwise white in Chrome */
    width: 100%; /* Chrome needs this */
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
    background: var(--player-input-range-color);
    cursor: pointer;
    margin-top: -6px; /* (thumb height/2 + track height/2) You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  input[type=range]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--player-input-range-color);
    cursor: pointer;
  }

  input[type=range]::-ms-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--player-input-range-color);
    cursor: pointer;
  }

  // input range track

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: var(--player-input-range-color);
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    background: var(--player-input-range-color);
  }

  input[type=range]::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: var(--player-input-range-color);
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
    background: var(--player-input-range-color);
  }

  input[type=range]:focus::-ms-fill-lower {
    background: var(--player-input-range-color);
  }

  input[type=range]::-ms-fill-upper {
    background: var(--player-input-range-color);
  }

  input[type=range]:focus::-ms-fill-upper {
    background: var(--player-input-range-color);
  }

  // slide in transition

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: var(--animation-duration);
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }
</style>
