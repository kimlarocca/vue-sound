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
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'VueSound',
      // the proper extensions will be added
      fileName: 'vue-sound'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
