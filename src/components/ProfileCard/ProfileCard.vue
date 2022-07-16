<script>
import TagItemVue from '../Tags/TagItem.vue';

    export default{
        data(){
            return{
                profileImg:"",
                location:''
            }
        },
        components:{
            TagItemVue,
            
        },
        methods:{
           async getUser(){
                const res=await fetch('https://randomuser.me/api/');
                const data= await res.json();
                const userData= data.results[0];
                console.log(userData)
                this.location=userData.location.city
                this.profileImg= userData.picture.large
            },
            
        },
        watch:{

        },
        mounted (){
            this.getUser()
        }
    }
</script>

<template>
    <div class="swipeButtons">
        <button class="dislikeBtn swipeBtn" @click="this.getUser"><fa icon="x"/></button>
        <span class="swipBtnSpacer"></span>
        <Button class="heartBtn swipeBtn" @click="this.getUser"><fa icon="heart"/> </Button>
    </div>
    <div class="card profileCard centerMargin">
        <div class="card-body">
            <div class="profileImgDiv centerMargin">
                <img :src='profileImg' class='profileImg' >
            </div>
            <div>
                <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum, voluptatem nemo veniam fuga, maiores dignissimos provident necessitatibus voluptatibus enim blanditiis dolorum sapiente pariatur amet ab sed inventore doloremque ratione.</p>
                <h3>My Interest</h3>
            </div>
            <div class="row tagRow">
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
                <div class="col tagCol"><TagItemVue/></div>
            </div>
            <div class="location">
                <h3>My Location</h3>
                {{location}}
            </div>
            <div class="bottomSpacer"></div>
        </div>
    </div>
</template>

<style>
   @import './ProfileCard.scss';
</style>