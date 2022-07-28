<script>
    import LikeCards from '@/components/LikeCards/LikeCards.vue'
    export default{
        data(){
            return{
                likes:null
            }
        },
        components:{
            LikeCards
        },
        methods:{
            getLikes(){
                if(localStorage.like){
                    console.log(JSON.parse(localStorage.like))
                    this.likes=JSON.parse(localStorage.like)
                }
            },
            returnToMainPage(){
                window.location.assign('/')
            }
        },
        mounted(){
            this.getLikes()
        }
    }
</script>

<template>
    <div class="likeHeader">
        <h1>Your Likes</h1>
        <button @click="this.returnToMainPage()"> Return</button>
    </div>
    <div v-for="like in likes" :key="like.name">
        <LikeCards :likeObj="JSON.stringify(like)"  :key="like.name"/>
    </div>
</template>

<style>
    @import 'LikesView.scss'
</style>