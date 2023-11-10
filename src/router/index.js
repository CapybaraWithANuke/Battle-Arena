import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import MenuMV from '../components/MenuMV.vue'
import MyAccountMV from '../components/MyAccountMV.vue'
import Test from '../components/Test.vue'


const routes = [
    {
        path: '/',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/menuMV',
        name: 'menuMV',
        component: MenuMV,
    },
    {
        path: '/myAccountMV',
        name: 'myAccountMV',
        component: MyAccountMV,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router