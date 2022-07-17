import { createRouter, createWebHashHistory } from "vue-router";
import ProfileCard from '../components/ProfileCard/ProfileCard.vue'
import FilterBar from '../components/FilterBar/FilterBar.vue'

const routes=[
    {
        path:'/filter',
        name:'filterVar',
        component: FilterBar
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