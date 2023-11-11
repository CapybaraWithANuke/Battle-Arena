import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuMV from '../components/MenuMV.vue'
import PlayGame from '../components/PlayGame.vue'
import MyAccountMV from '../components/MyAccountMV.vue'
import Backpack from '../components/Backpack.vue'
import PlayersRankingMV from '../components/PlayersRankingMV.vue'


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
        path: '/myAccountMV',
        name: 'myAccountMV',
        component: MyAccountMV,
    },
    {
        path: '/backpack',
        name: 'backpack',
        component: Backpack,
    },
    {
        path: '/PlayersRankingMV',
        name: 'PlayersRankingMV',
        component: PlayersRankingMV,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router