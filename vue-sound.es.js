import { openBlock, createElementBlock, createElementVNode, resolveComponent, createVNode, createCommentVNode, createBlock, toDisplayString, Fragment, withModifiers, normalizeStyle, Transition, withCtx, withDirectives, vShow, vModelText, withKeys } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {};
const _hoisted_1$7 = {
  height: "32",
  viewBox: "0 0 32 32",
  width: "32",
  xmlns: "http://www.w3.org/2000/svg",
  class: "play icon",
  role: "img"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("title", null, "Play", -1);
const _hoisted_3$7 = /* @__PURE__ */ createElementVNode("path", { d: "m16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-4-20 12 7-12 7z" }, null, -1);
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
  height: "32",
  viewBox: "0 0 32 32",
  width: "32",
  xmlns: "http://www.w3.org/2000/svg",
  class: "pause-icon",
  role: "img"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("title", null, "Pause", -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", { d: "m16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-6-19h4v12h-4zm8 0h4v12h-4z" }, null, -1);
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
  height: "32",
  viewBox: "0 0 32 32",
  width: "32",
  xmlns: "http://www.w3.org/2000/svg",
  class: "volume-icon",
  role: "img"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("title", null, "Volume", -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", { d: "m22.485 25.985c-.384 0-.768-.146-1.061-.439-.586-.586-.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-.586-.586-.586-1.536 0-2.121s1.536-.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-.293.293-.677.439-1.061.439zm-5.328-2.828c-.384 0-.768-.146-1.061-.439-.586-.586-.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-.586-.586-.586-1.536 0-2.121s1.535-.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-.293.293-.677.439-1.061.439z" }, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("path", { d: "m13 30c-.26 0-.516-.102-.707-.293l-7.707-7.707h-3.586c-.552 0-1-.448-1-1v-10c0-.552.448-1 1-1h3.586l7.707-7.707c.286-.286.716-.372 1.09-.217s.617.519.617.924v26c0 .404-.244.769-.617.924-.124.051-.254.076-.383.076z" }, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$3,
  _hoisted_3$3,
  _hoisted_4$3
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_5$2);
}
var VolumeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  height: "32",
  viewBox: "0 0 32 32",
  width: "32",
  xmlns: "http://www.w3.org/2000/svg",
  class: "volume-muted-icon",
  role: "img"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("title", null, "Volume Muted", -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", { d: "m30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348z" }, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", { d: "m13 30c-.26 0-.516-.102-.707-.293l-7.707-7.707h-3.586c-.552 0-1-.448-1-1v-10c0-.552.448-1 1-1h3.586l7.707-7.707c.286-.286.716-.372 1.09-.217s.617.519.617.924v26c0 .404-.244.769-.617.924-.124.051-.254.076-.383.076z" }, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5$1);
}
var VolumeMutedIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  class: "download-icon",
  role: "img"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("title", null, "Download", -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", { d: "M28 16h-5l-7 7-7-7h-5l-4 8v2h32v-2l-4-8zM0 28h32v2h-32v-2zM18 10v-8h-4v8h-7l9 9 9-9h-7z" }, null, -1);
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
const _hoisted_1 = { class: "player" };
const _hoisted_2 = { class: "player-controls" };
const _hoisted_3 = ["aria-label"];
const _hoisted_4 = { class: "player-track" };
const _hoisted_5 = { class: "player-track-title" };
const _hoisted_6 = ["href"];
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = {
  key: 3,
  class: "player-track-title-details"
};
const _hoisted_10 = ["href"];
const _hoisted_11 = { class: "player-track-time" };
const _hoisted_12 = { class: "player-track-time-current" };
const _hoisted_13 = /* @__PURE__ */ createElementVNode("span", { class: "player-track-time-separator" }, "/", -1);
const _hoisted_14 = { class: "player-track-time-total" };
const _hoisted_15 = /* @__PURE__ */ createElementVNode("label", {
  for: "playerVolume",
  class: "hide-ally-element"
}, " volume slider ", -1);
const _hoisted_16 = ["aria-label"];
const _hoisted_17 = ["loop", "src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_back15_icon = resolveComponent("back15-icon");
  const _component_play_icon = resolveComponent("play-icon");
  const _component_pause_icon = resolveComponent("pause-icon");
  const _component_ahead15_icon = resolveComponent("ahead15-icon");
  const _component_volume_icon = resolveComponent("volume-icon");
  const _component_volume_muted_icon = resolveComponent("volume-muted-icon");
  const _component_download_icon = resolveComponent("download-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
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
      ], 8, _hoisted_3),
      $props.showSkip && !$props.livestream ? (openBlock(), createElementBlock("a", {
        key: 1,
        class: "player-ahead-15-icon",
        "aria-label": "go ahead 15 seconds",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.goAhead15 && $options.goAhead15(...args))
      }, [
        createVNode(_component_ahead15_icon)
      ])) : createCommentVNode("", true),
      createElementVNode("div", _hoisted_4, [
        createElementVNode("div", _hoisted_5, [
          $options.hasTitle && $options.hasTitleLink ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: $props.titleLink,
            class: "player-track-title-link"
          }, toDisplayString($props.title), 9, _hoisted_6)) : createCommentVNode("", true),
          $options.hasTitle && !$options.hasTitleLink ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString($props.title), 1)) : createCommentVNode("", true),
          $options.hasTitle && $options.hasDetails ? (openBlock(), createElementBlock("span", _hoisted_8, " - ")) : createCommentVNode("", true),
          $options.hasDetails && !$options.hasDetailsLink ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString($props.details), 1)) : createCommentVNode("", true),
          $options.hasDetails && $options.hasDetailsLink ? (openBlock(), createElementBlock("a", {
            key: 4,
            href: $props.detailsLink,
            class: "player-track-title-details-link"
          }, toDisplayString($props.details), 9, _hoisted_10)) : createCommentVNode("", true)
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
          createElementVNode("div", _hoisted_11, [
            createElementVNode("span", _hoisted_12, toDisplayString($options.convertTimeHHMMSS($data.currentSeconds)), 1),
            _hoisted_13,
            createElementVNode("span", _hoisted_14, toDisplayString($options.convertTimeHHMMSS($data.durationSeconds)), 1)
          ])
        ], 64)) : createCommentVNode("", true)
      ]),
      createElementVNode("div", {
        class: "player-volume",
        onMouseover: _cache[7] || (_cache[7] = withModifiers(($event) => $data.showVolume = true, ["prevent"])),
        onMouseleave: _cache[8] || (_cache[8] = withModifiers(($event) => $data.showVolume = false, ["prevent"]))
      }, [
        _hoisted_15,
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
        ], 40, _hoisted_16)
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
    }, null, 8, _hoisted_17)
  ]);
}
var VueSound = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var main = {
  install: (App) => {
    App.component("VueSound", VueSound);
  }
};
export { VueSound, main as default };
