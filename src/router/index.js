import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuMV from '../components/MenuMV.vue'
import PlayGame from '../components/PlayGame.vue'
import MyAccountMV from '../components/MyAccountMV.vue'
import CreateGame from '../components/CreateGame.vue'
import JoinGame from '../components/JoinGame.vue'



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