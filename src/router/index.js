import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuMV from '../components/MenuMV.vue'
import PlayGame from '../components/PlayGame.vue'
import MyAccountMV from '../components/MyAccountMV.vue'
import Backpack from '../components/Backpack.vue'
import PlayersRankingMV from '../components/PlayersRankingMV.vue'
import CreateGame from '../components/CreateGame.vue'
import JoinGame from '../components/JoinGame.vue'
import Arena from '../components/Arena.vue'
import PlayersRankingMV from '../components/PlayersRankingMV.vue'
import PlayersInfoSlide1MV from '../components/PlayersInfoSlide1MV.vue'
import PlayersInfoSlide2MV from '../components/PlayersInfoSlide2MV.vue'




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

    {
       path: '/PlayersInfoSlide2',
        name: 'PlayersInfoSlide2',
        component: PlayersInfoSlide2MV,
    },
    {
        path: '/PlayersInfoSlide1',
        name: 'PlayersInfoSlide1',
        component: PlayersInfoSlide1MV,
    },
    {
        path: '/arena',
        name: 'Arena',
        component: Arena,
    },
    {
        path: '/createGame',
        name: 'CreateGame',
        component: CreateGame,
    },
    {
        path: '/joinGame',
        name: 'JoinGame',
        component: JoinGame,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router