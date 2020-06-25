# Vue Hifi: An audio player built with Vue.js

Easily add a beautiful, lightweight, cross-browser HTML5 audio player to your vue app. 

## Installation and Usage

```
npm install vue-hifi
```

Import or require Vue and Vue Hifi in your code:

```
import Vue from 'vue'
import VueHifi from 'vue-hifi'
```

### Example

``` 
<audio-player
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

Prop | Type | Default | Description
--- | --- | --- | ---
livestream | boolean | false | if true, displays slimmer version of audio player meant for a livestream
show-download | boolean | false | if true, display a download button
title | string | null | the title of the track
title-link | string | null | url for the title link
details | string | null | details for the track
details-link | string | null | url for the details
file | string | null | url for the audio file (mp3 recommended)

### Browser Support

The audio element is supported by all modern browsers. We recommend using MP3 audio files since that format is also supported by all modern browsers.

## Development Environment

```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Launches Storybook
```
npm run storybook
```

Lints and fixes files
```
npm run lint
```

## Questions / Contributing

