import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDev } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'





/* add icons to the library */
library.add(faLinkedin, faGithub, faEnvelope, faDev)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')