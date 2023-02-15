import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/assets/scss/main.scss";`
    }
  }
},
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /^@\/(.+)/,
        replacement: `${resolve(__dirname, 'src')}/$1`
      }
    ]

  },
  plugins: [vue()],
  build: {
    sourcemap: true,
    rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
        external: ['vue', 'vue-router', 'vuex'],
        treeshake: true,
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          exports: 'named',
          globals: {
            vue: 'Vue'
          }
        },

    },
},
})
