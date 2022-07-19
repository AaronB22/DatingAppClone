/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import ProfileCard from '../views/ProfileCard/ProfileCard.vue'
import FilterBar from '../views/FilterBar/FilterBar.vue'
import ProfileSetup from '../views/ProfileSetup/ProfileSetup.vue'

const routes=[
    {
        path:'/filter',
        name:'filterVar',
        component: FilterBar
    },
    {
        path:'/profile',
        name:'ProfileSetup',
        component: ProfileSetup
    },
    {
        path:'/',
        name:'profileCard',
        component: ProfileCard
    },
]

const router= createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;