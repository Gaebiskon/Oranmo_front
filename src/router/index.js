import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleCreateView from '../views/ArticleCreateView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleView
    },
    {
      path: '/articles/create',
      name: 'articles-create',
      component: ArticleCreateView
    },
    {
      path: '/articles/login',
      name: 'login',
      component: LoginView
    },

  ]

})

export default router
