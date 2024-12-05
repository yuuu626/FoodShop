/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light', // 默認使用 light 模式
    themes: {
      light: {
        colors:{
          primary: '#d23f57', // 設置 light 模式下的 primary 顏色
          second: '#FAFAFA',
          third: '#616161'
        }
      }
    }
  },
})
