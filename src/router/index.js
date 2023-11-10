import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuMV from '../components/MenuMV.vue'
import PlayGame from '../components/PlayGame.vue'
import Test from '../components/Test.vue'


const routes = [
    {
        path: '/',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/menuMV',
        name: 'MenuMV',
        component: MenuMV,
    },
    {
        path: '/playGame',
        name: 'PlayGame',
        component: PlayGame,
    },
    {
        path: '/test',
        name: 'Test',
        component: Test,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router