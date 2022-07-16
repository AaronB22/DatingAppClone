<script>
import TagItemVue from '../Tags/TagItem.vue';

    export default{
        data(){
            return{
                person:{
                    name:"",
                    profileImg:"",
                    location:"",
                    gender:"",
                    age:"",
                }
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
                this.person.profileImg=userData.picture.large;
                this.person.location=userData.location.city;
                this.person.name=userData.name.first +' '+userData.name.last
            },
            
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
            <div class="card-title">{{person.name}}</div>
            <div class="profileImgDiv centerMargin">
                <img :src='person.profileImg' class='profileImg' >
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
                {{person.location}}
            </div>
            <div class="bottomSpacer"></div>
        </div>
    </div>
</template>

<style>
   @import './ProfileCard.scss';
</style>