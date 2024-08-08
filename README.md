<img width="300" src="https://raw.githubusercontent.com/kimlarocca/vue-sound/main/public/logo.png" alt="vue sound" />

# Vue Sound: An accessible audio player built with Vue.js

Add a beautiful & accessible cross-browser HTML5 audio player to your Vue app!

Demo: [https://www.kimlarocca.com/vue-sound/](https://www.kimlarocca.com/vue-sound/)

## Installation and Usage

```
npm install vue-sound --save-dev
```

Import Vue Sound:

```
import { VueSound } from 'vue-sound'
```

Import the Vue Sound styles from 'vue-sound/style.css'. For example:

```
@import 'vue-sound/style.css';
```

### Example

```
<vue-sound
  livestream
  show-download
  title="The Show"
  title-link="http://www.google.com"
  details="Lorem Ipsum Dolor Sit Amet"
  details-link="http://www.bing.com"
  file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
/>
```

### Configuration

All props except for the audio file are optional.

| Prop          | Type    | Default | Description |
| ------------- | ------- | ------- | ------------------------------------------------------------------------ |
| livestream    | boolean | false   | if true, displays slimmer version of audio player meant for a livestream |
| show-download | boolean | false   | if true, display a download button |
| image         | string  | null    | url for the track image |
| title         | string  | null    | the title of the track |
| title-link    | string  | null    | url for the title link |
| details       | string  | null    | details for the track |
| details-link  | string  | null    | url for the details link |
| file          | string  | null    | url for the audio file (mp3 is highly recommended) |

#### Styles

Override these CSS variables to customize the look and feel:

```
:root {
  --player-background: #00123e;
  --player-font-family: "Open Sans", sans-serif;
  --player-font-size: 0.9rem;
  --player-font-size-small: 0.7rem;
  --player-font-weight: 300;
  --player-font-weight-bold: 600;
  --player-text-color: #ffffff;
  --player-icon-color: var(--player-text-color);
  --player-link-color: var(--player-text-color);
  --player-progress-color: #41b883;
  --player-buffered-color: #41b883;
  --player-seeker-color: #ffffff;
  --player-input-range-color: var(--player-text-color);
}
```

### Browser Support

The audio element is supported by all modern browsers. We recommend using MP3 audio files since that format is also supported by all modern browsers.

### Accessibility

Vue Sound is 100% keyboard accessible. The enter/space keys toggle play/pause, the up/down arrows control the volume, and the right/left arrows skip ahead/back. Other audio player controls such as mute and download can be tabbed to and controlled by the keyboard.

## Local Development Environment

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

#### Runs unit tests

```
npm run test
```

## Questions / Contributing

Report issues or open pull requests on github: https://github.com/kimlarocca/vue-sound

## Need support for streaming or audio fallbacks?

Try adding `vue-hifi` by NY Public Radio to your project! [https://github.com/nypublicradio/vue-hifi](https://github.com/nypublicradio/vue-hifi)
