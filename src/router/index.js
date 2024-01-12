import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuMV from '../components/MenuMV.vue'
import MyAccountMV from '../components/MyAccountMV.vue'
import Backpack from '../components/Backpack.vue'
import PlayersRanking from '../components/PlayersRanking.vue'
import BuyAttack from '../components/BuyAttack.vue'
import SellAttack from '../components/SellAttack.vue'
import CreateAttack from '../components/CreateAttack.vue'
import CreateGame from '../components/CreateGame.vue'
import JoinGame from '../components/JoinGame.vue'
import Arena from '../components/Arena.vue'
import PlayersInfoSlide1 from '../components/PlayersInfoSlide1.vue'
import PlayersInfoSlide2 from '../components/PlayersInfoSlide2.vue'


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
        path: '/joinGame',
        name: 'joinGame',
        component: JoinGame,
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
        path: '/playersRanking',
        name: 'playersRanking',
        component: PlayersRanking,
    },
    {
        path: '/buyattack',
        name: 'buyattack',
        component: BuyAttack,
    },
    {
        path: '/sellattack',
        name: 'sellattack',
        component: SellAttack,
    },
    {
        path: '/createattack',
        name: 'createattack',
        component: CreateAttack,
    },
    {
       path: '/PlayersInfoSlide2',
        name: 'PlayersInfoSlide2',
        component: PlayersInfoSlide2,
    },
    {
        path: '/PlayersInfoSlide1',
        name: 'PlayersInfoSlide1',
        component: PlayersInfoSlide1,
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