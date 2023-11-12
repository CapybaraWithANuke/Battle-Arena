import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuMV from '../components/MenuMV.vue'
import PlayGame from '../components/PlayGame.vue'
import MyAccountMV from '../components/MyAccountMV.vue'
import Backpack from '../components/Backpack.vue'
import PlayersRankingMV from '../components/PlayersRankingMV.vue'
import BuyAttack from '../components/BuyAttack.vue'
import SellAttack from '../components/SellAttack.vue'
import CreateAttack from '../components/CreateAttack.vue'
import BuyAttackPopup from '../components/BuyAttackPopup.vue'
import SellAttackPopup from '../components/SellAttackPopup.vue'


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
        path: '/playersRankingMV',
        name: 'playersRankingMV',
        component: PlayersRankingMV,
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
        path: '/buyattackpopup',
        name: 'buyattackpopup',
        component: BuyAttackPopup,
    },
    {
        path: '/sellattackpopup',
        name: 'sellattackpopup',
        component: SellAttackPopup,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router