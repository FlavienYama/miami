import { createRouter, createWebHistory } from 'vue-router'
import HomeMiami from '../views/HomeMiami.vue'
import JuinMiami from '../views/JuinMiami.vue'
import JuilletMiami from '../views/JuilletMiami.vue'
import AoutMiami from '../views/AoutMiami.vue'
import JeudisLMB from '../views/JeudisLMB.vue'
import AsAp from '../views/AsAp.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    // eslint-disable-next-line
    component: HomeMiami
  },
  {
    path: '/juin',
    name: 'juin',
    // eslint-disable-next-line
    component: JuinMiami
  },
  {
    path: '/juillet',
    name: 'juillet',
    // eslint-disable-next-line
    component: JuilletMiami
  },
  {
    path: '/aout',
    name: 'aout',
    // eslint-disable-next-line
    component: AoutMiami
  },
  {
    path: '/jeudis',
    name: 'jeudis',
    // eslint-disable-next-line
    component: JeudisLMB
  },
  {
    path: '/soon',
    name: 'soon',
    // eslint-disable-next-line
    component: AsAp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
