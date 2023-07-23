import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp";
import CryptoTransferForm from "@/views/CryptoTransferForm.vue"
import Chat from "@/views/Chat.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component:()=>import('@/views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/Cryptotransfer',
    name: 'Cryptotransfer',
    component: CryptoTransferForm
  },
  {
    path: '/Market',
    name: 'Market',
    component:()=>import('@/views/Market.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
