import { openBlock, createElementBlock, createElementVNode, resolveComponent, createCommentVNode, createVNode, createBlock, toDisplayString, Fragment, withModifiers, normalizeStyle, Transition, withCtx, withDirectives, vShow, vModelText, withKeys } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {};
const _hoisted_1$7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  height: "32",
  width: "32",
  class: "play-icon",
  role: "img"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("title", null, "Play", -1);
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("path", { d: "M356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5zM208 182.3V329.7L328.7 255.1L208 182.3zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z" }, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$7,
  _hoisted_3$7
];
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$7);
}
var PlayIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {};
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  height: "32",
  width: "32",
  class: "pause-icon",
  role: "img"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("title", null, "Pause", -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", { d: "M208 160C199.2 160 192 167.2 192 176v160C192 344.8 199.2 352 208 352S224 344.8 224 336v-160C224 167.2 216.8 160 208 160zM304 160C295.2 160 288 167.2 288 176v160c0 8.844 7.156 16 16 16s16-7.156 16-16v-160C320 167.2 312.8 160 304 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z" }, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$6,
  _hoisted_3$6
];
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$6);
}
var PauseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {};
const _hoisted_1$5 = {
  height: "32",
  viewBox: "0 0 32 32",
  width: "32",
  xmlns: "http://www.w3.org/2000/svg",
  class: "back-15-icon",
  role: "img"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("title", null, "Go Back 15 Seconds", -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", { d: "m16 2c-4.418 0-8.418 1.791-11.313 4.687l-4.686-4.687v12h12l-4.485-4.485c2.172-2.172 5.172-3.515 8.485-3.515 6.627 0 12 5.373 12 12 0 3.584-1.572 6.801-4.063 9l2.646 3c3.322-2.932 5.417-7.221 5.417-12 0-8.837-7.163-16-16-16z" }, null, -1);
const _hoisted_4$5 = [
  _hoisted_2$5,
  _hoisted_3$5
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$5);
}
var Back15Icon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {};
const _hoisted_1$4 = {
  height: "32",
  viewBox: "0 0 32 32",
  width: "32",
  xmlns: "http://www.w3.org/2000/svg",
  class: "ahead-15-icon",
  role: "img"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("title", null, "Go Ahead 15 Seconds", -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", { d: "m0 18c0 4.779 2.095 9.068 5.417 12l2.646-3c-2.491-2.199-4.063-5.416-4.063-9 0-6.627 5.373-12 12-12 3.314 0 6.314 1.343 8.485 3.515l-4.485 4.485h12v-12l-4.687 4.687c-2.895-2.896-6.895-4.687-11.313-4.687-8.837 0-16 7.163-16 16z" }, null, -1);
const _hoisted_4$4 = [
  _hoisted_2$4,
  _hoisted_3$4
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$4);
}
var Ahead15Icon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {};
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512",
  height: "32",
  width: "32",
  class: "volume-icon",
  role: "img"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("title", null, "Volume", -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", { d: "M333.2 34.84c-4.201-1.895-8.727-2.841-13.16-2.841c-7.697 0-15.29 2.784-21.27 8.1L163.8 160H80c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C304.7 477.2 312.3 480 320 480c4.438 0 8.959-.9312 13.16-2.837C344.7 472 352 460.6 352 448V64C352 51.41 344.7 39.1 333.2 34.84zM319.1 447.1L175.1 319.1H80c-8.822 0-16-7.16-16-15.96v-96c0-8.801 7.178-15.96 16-15.96h95.1l143.1-127.1c.0078-.0078-.0039 .0039 0 0L319.1 447.1zM491.4 98.7c-7.344-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C517.7 154.8 544 203.7 544 256s-26.33 101.2-70.44 130.7c-7.344 4.922-9.312 14.86-4.391 22.2C472.3 413.5 477.3 416 482.5 416c3.062 0 6.156-.875 8.891-2.703C544.4 377.8 576 319 576 256S544.4 134.2 491.4 98.7zM438.4 178.7c-7.328-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C437.8 216.8 448 235.7 448 256s-10.23 39.23-27.38 50.7c-7.344 4.922-9.312 14.86-4.391 22.2C419.3 333.5 424.4 336 429.5 336c3.062 0 6.156-.875 8.891-2.703C464.5 315.9 480 286.1 480 256S464.5 196.1 438.4 178.7z" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$3);
}
var VolumeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512",
  height: "32",
  width: "32",
  class: "volume-muted-icon",
  role: "img"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("title", null, "Volume Muted", -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", { d: "M351.1 64.05C351.1 64.04 351.1 64.05 351.1 64.05l.002 135.6L384 224.1V64c0-12.6-7.337-24.01-18.84-29.16c-4.201-1.895-8.727-2.841-13.16-2.841c-7.697 0-15.29 2.784-21.27 8.1L245.6 115.7L271.2 135.9L351.1 64.05zM480 256c0 12.91-4.529 25.05-11.97 35.3L493 311C504.8 295.2 512 276.2 512 256c0-30.97-15.53-59.86-41.56-77.3c-7.328-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C469.8 216.8 480 235.7 480 256zM576 256c0 34.73-11.82 67.81-32.54 94.86l25.07 19.79C593.7 338 608 298 608 256c0-63-31.64-121.8-84.63-157.3c-7.344-4.922-17.28-2.953-22.2 4.391s-2.953 17.28 4.391 22.2C549.7 154.8 576 203.7 576 256zM351.1 447.1L207.1 319.1H112c-8.822 0-16-7.16-16-15.96v-96c0-8.801 7.178-15.96 16-15.96h23.71L98.04 162.3C78.39 168.3 64 186.4 64 208V304c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C336.7 477.2 344.3 480 352 480c4.438 0 8.959-.9312 13.16-2.837C376.7 472 384 460.6 384 448v-59.93l-32.02-25.28L351.1 447.1zM633.9 483.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$2);
}
var VolumeMutedIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  width: "32",
  height: "32",
  class: "download-icon",
  role: "img"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("title", null, "Download", -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", { d: "M245.4 379.1C248.4 382.7 252.2 384 256 384s7.594-1.344 10.62-4.047l144-128c6.594-5.859 7.219-15.98 1.344-22.58c-5.875-6.625-16.06-7.234-22.59-1.328L272 332.4V16C272 7.156 264.8 0 256 0S240 7.156 240 16v316.4L122.6 228C116.1 222.1 105.9 222.8 100 229.4C94.16 235.1 94.78 246.1 101.4 251.1L245.4 379.1zM448 320h-48c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16H448c17.67 0 32 14.33 32 32v64c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32v-64c0-17.67 14.33-32 32-32h48C120.8 352 128 344.8 128 336C128 327.2 120.8 320 112 320H64c-35.35 0-64 28.65-64 64v64c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-64C512 348.7 483.3 320 448 320zM440 416c0-13.25-10.75-24-24-24s-24 10.75-24 24s10.75 24 24 24S440 429.3 440 416z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
var DownloadIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var VueSound_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "VueSound",
  components: {
    PlayIcon,
    PauseIcon,
    Back15Icon,
    Ahead15Icon,
    VolumeIcon,
    VolumeMutedIcon,
    DownloadIcon
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
    image: {
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
  data() {
    return {
      audio: void 0,
      currentSeconds: 0,
      durationSeconds: 0,
      buffered: 0,
      innerLoop: false,
      loaded: false,
      playing: false,
      previousVolume: 35,
      showVolume: false,
      volume: 100
    };
  },
  computed: {
    hasDetails() {
      return this.$props.details;
    },
    hasDetailsLink() {
      return this.$props.detailsLink;
    },
    hasTitle() {
      return this.$props.title;
    },
    hasTitleLink() {
      return this.$props.titleLink;
    },
    muted() {
      return this.volume / 100 === 0;
    },
    percentBuffered() {
      return this.buffered / this.durationSeconds * 100;
    },
    percentComplete() {
      return this.currentSeconds / this.durationSeconds * 100;
    }
  },
  watch: {
    playing(value) {
      if (value) {
        return this.audio.play();
      }
      this.audio.pause();
    },
    volume() {
      this.audio.volume = this.volume / 100;
    }
  },
  created() {
    this.innerLoop = this.loop;
    window.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "Space":
          this.togglePlay();
          break;
        case "Enter":
          this.togglePlay();
          break;
        case "ArrowUp":
          if (this.volume < 100)
            this.volume++;
          break;
        case "ArrowDown":
          if (this.volume > 0)
            this.volume--;
          break;
        case "ArrowLeft":
          this.goBack15();
          break;
        case "ArrowRight":
          this.goAhead15();
          break;
      }
    });
  },
  mounted() {
    this.audio = this.$refs.audioFile;
    this.audio.addEventListener("timeupdate", this.update);
    this.audio.addEventListener("loadeddata", this.load);
    this.audio.addEventListener("buffered", this.update);
    this.audio.addEventListener("pause", () => {
      this.playing = false;
    });
    this.audio.addEventListener("play", () => {
      this.playing = true;
    });
  },
  methods: {
    convertTimeHHMMSS(val) {
      const hhmmss = new Date(val * 1e3).toISOString().substr(11, 8);
      return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
    },
    download() {
      this.stop();
      window.open(this.file, "download");
    },
    goAhead15() {
      this.audio.currentTime = this.audio.currentTime + 15;
    },
    goBack15() {
      this.audio.currentTime = this.audio.currentTime - 15;
    },
    load() {
      if (this.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.audio.duration);
        this.playing = this.autoPlay;
        return this.playing;
      }
      throw new Error("Failed to load sound file.");
    },
    mute() {
      if (this.muted) {
        this.volume = this.previousVolume;
        return this.volume;
      }
      this.previousVolume = this.volume;
      this.volume = 0;
    },
    seek(e) {
      if (!this.loaded)
        return;
      const el = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - el.left) / el.width;
      this.audio.currentTime = this.audio.duration * seekPos;
    },
    stop() {
      this.playing = false;
      this.audio.currentTime = 0;
    },
    togglePlay() {
      this.playing = !this.playing;
    },
    update() {
      this.currentSeconds = this.audio.currentTime;
      this.buffered = this.audio.buffered.end(0);
    }
  }
};
const _hoisted_1 = { class: "vue-sound" };
const _hoisted_2 = {
  key: 0,
  class: "player-image"
};
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "player" };
const _hoisted_5 = { class: "player-controls" };
const _hoisted_6 = ["aria-label"];
const _hoisted_7 = { class: "player-track" };
const _hoisted_8 = { class: "player-track-title" };
const _hoisted_9 = ["href"];
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { key: 2 };
const _hoisted_12 = {
  key: 3,
  class: "player-track-title-details"
};
const _hoisted_13 = ["href"];
const _hoisted_14 = { class: "player-track-time" };
const _hoisted_15 = { class: "player-track-time-current" };
const _hoisted_16 = /* @__PURE__ */ createElementVNode("span", { class: "player-track-time-separator" }, "/", -1);
const _hoisted_17 = { class: "player-track-time-total" };
const _hoisted_18 = /* @__PURE__ */ createElementVNode("label", {
  for: "playerVolume",
  class: "hide-ally-element"
}, " volume slider ", -1);
const _hoisted_19 = ["aria-label"];
const _hoisted_20 = ["loop", "src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_back15_icon = resolveComponent("back15-icon");
  const _component_play_icon = resolveComponent("play-icon");
  const _component_pause_icon = resolveComponent("pause-icon");
  const _component_ahead15_icon = resolveComponent("ahead15-icon");
  const _component_volume_icon = resolveComponent("volume-icon");
  const _component_volume_muted_icon = resolveComponent("volume-muted-icon");
  const _component_download_icon = resolveComponent("download-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $props.image ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createElementVNode("img", {
        src: $props.image,
        alt: $props.title
      }, null, 8, _hoisted_3)
    ])) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_4, [
      createElementVNode("div", _hoisted_5, [
        $props.showSkip && !$props.livestream ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: "player-back-15-icon",
          "aria-label": "go back 15 seconds",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack15 && $options.goBack15(...args))
        }, [
          createVNode(_component_back15_icon)
        ])) : createCommentVNode("", true),
        createElementVNode("a", {
          class: "player-play-pause-icon",
          "aria-label": $data.playing ? "pause" : "play",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.togglePlay && $options.togglePlay(...args))
        }, [
          !$data.playing ? (openBlock(), createBlock(_component_play_icon, { key: 0 })) : createCommentVNode("", true),
          $data.playing ? (openBlock(), createBlock(_component_pause_icon, { key: 1 })) : createCommentVNode("", true)
        ], 8, _hoisted_6),
        $props.showSkip && !$props.livestream ? (openBlock(), createElementBlock("a", {
          key: 1,
          class: "player-ahead-15-icon",
          "aria-label": "go ahead 15 seconds",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.goAhead15 && $options.goAhead15(...args))
        }, [
          createVNode(_component_ahead15_icon)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_7, [
          createElementVNode("div", _hoisted_8, [
            $options.hasTitle && $options.hasTitleLink ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: $props.titleLink,
              class: "player-track-title-link"
            }, toDisplayString($props.title), 9, _hoisted_9)) : createCommentVNode("", true),
            $options.hasTitle && !$options.hasTitleLink ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString($props.title), 1)) : createCommentVNode("", true),
            $options.hasTitle && $options.hasDetails ? (openBlock(), createElementBlock("span", _hoisted_11, " - ")) : createCommentVNode("", true),
            $options.hasDetails && !$options.hasDetailsLink ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString($props.details), 1)) : createCommentVNode("", true),
            $options.hasDetails && $options.hasDetailsLink ? (openBlock(), createElementBlock("a", {
              key: 4,
              href: $props.detailsLink,
              class: "player-track-title-details-link"
            }, toDisplayString($props.details), 9, _hoisted_13)) : createCommentVNode("", true)
          ]),
          !$props.livestream ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createElementVNode("div", {
              class: "player-track-progress",
              onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.seek && $options.seek(...args), ["prevent"]))
            }, [
              createElementVNode("div", {
                style: normalizeStyle({ width: $options.percentComplete + "%" }),
                class: "player-track-seeker"
              }, null, 4),
              createElementVNode("div", {
                style: normalizeStyle({ width: $options.percentBuffered + "%" }),
                class: "player-track-buffered"
              }, null, 4)
            ]),
            createElementVNode("div", _hoisted_14, [
              createElementVNode("span", _hoisted_15, toDisplayString($options.convertTimeHHMMSS($data.currentSeconds)), 1),
              _hoisted_16,
              createElementVNode("span", _hoisted_17, toDisplayString($options.convertTimeHHMMSS($data.durationSeconds)), 1)
            ])
          ], 64)) : createCommentVNode("", true)
        ]),
        createElementVNode("div", {
          class: "player-volume",
          onMouseover: _cache[7] || (_cache[7] = withModifiers(($event) => $data.showVolume = true, ["prevent"])),
          onMouseleave: _cache[8] || (_cache[8] = withModifiers(($event) => $data.showVolume = false, ["prevent"]))
        }, [
          _hoisted_18,
          createVNode(Transition, { name: "slide-left" }, {
            default: withCtx(() => [
              withDirectives(createElementVNode("input", {
                id: "playerVolume",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.volume = $event),
                type: "range",
                min: "0",
                max: "100"
              }, null, 512), [
                [vShow, $data.showVolume],
                [vModelText, $data.volume]
              ])
            ]),
            _: 1
          }),
          createElementVNode("a", {
            tabindex: "0",
            class: "player-volume-icon",
            "aria-label": $options.muted ? "unmute" : "mute",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.mute && $options.mute(...args)),
            onKeypress: _cache[6] || (_cache[6] = withKeys((...args) => $options.mute && $options.mute(...args), ["space", "enter"]))
          }, [
            !$options.muted ? (openBlock(), createBlock(_component_volume_icon, { key: 0 })) : createCommentVNode("", true),
            $options.muted ? (openBlock(), createBlock(_component_volume_muted_icon, { key: 1 })) : createCommentVNode("", true)
          ], 40, _hoisted_19)
        ], 32),
        $props.showDownload && !$props.livestream ? (openBlock(), createElementBlock("a", {
          key: 2,
          tabindex: "0",
          class: "player-download-icon",
          "aria-label": "download",
          onClick: _cache[9] || (_cache[9] = (...args) => $options.download && $options.download(...args)),
          onKeypress: _cache[10] || (_cache[10] = withKeys((...args) => $options.download && $options.download(...args), ["space", "enter"]))
        }, [
          createVNode(_component_download_icon)
        ], 32)) : createCommentVNode("", true)
      ]),
      createElementVNode("audio", {
        ref: "audioFile",
        loop: $data.innerLoop,
        src: $props.file,
        preload: "auto",
        style: { "display": "none" }
      }, null, 8, _hoisted_20)
    ])
  ]);
}
var VueSound = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var main = {
  install: (App) => {
    App.component("VueSound", VueSound);
  }
};
export { VueSound, main as default };
