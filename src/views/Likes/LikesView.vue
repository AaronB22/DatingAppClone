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
            }
        },
        mounted(){
            this.getLikes()
        }
    }
</script>

<template>
    <h1>Your Likes</h1>
    <div v-for="like in likes" :key="like.name">
        <LikeCards :likeObj="JSON.stringify(like)"  :key="like.name"/>
    </div>
</template>