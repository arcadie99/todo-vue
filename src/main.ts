// import './assets/main.css'
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'; // Import MDI icons

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons
  },
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')

