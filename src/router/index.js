/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import ProfileCard from '../views/ProfileCard/ProfileCard.vue'
import FilterBar from '../views/FilterBar/FilterBar.vue'
import ProfileSetup from '../views/ProfileSetup/ProfileSetup.vue'
import LikesView from '../views/Likes/LikesView.vue'
import SwipePage from '../views/SwipePage/SwipePage.vue'

const routes=[
    {
        path:'/filter',
        name:'filterVar',
        component: FilterBar
    },
    {
        path:'/likes',
        name:'likesPage',
        component: LikesView
    },
    {
        path:'/profile',
        name:'ProfileSetup',
        component: ProfileSetup
    },
    {
        path:'/moreInfo',
        name:'profileCard',
        component: ProfileCard
    },
    {
        path:'/',
        name:'swipePage',
        component: SwipePage
    },
]

const router= createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;