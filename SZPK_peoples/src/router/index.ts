import { createRouter, createWebHistory } from 'vue-router'
import PeopleList from '@/views/PeopleList.vue';
import ContactView from '@/views/ContactView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/emberek' },
     { path: '/keszitette/:id', component: ContactView },
    { path: '/emberek', component: PeopleList },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router
