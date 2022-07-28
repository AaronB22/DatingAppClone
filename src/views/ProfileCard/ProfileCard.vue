<script>
    import TagItemVue from '../../components/Tags/TagItem.vue';
    import {useCurrentProfileStore} from '@/stores/currentProfile'
 
    export default{
        data(){
            return{
                person:{
                    name:"",
                    profileImg:"",
                    location:"",
                    gender:"",
                    age:"",
                },
                interests:[]
            }
        },
        components:{
            TagItemVue,
            
        },
        methods:{
            setUser(){
                const currentProfile= useCurrentProfileStore();
                console.log(currentProfile)
                this.person= currentProfile.person
                this.interests= currentProfile.person.interests
            },
            likeUser(){
                if(!localStorage.like){
                    const newLike=JSON.stringify([this.person])
                    localStorage.like=newLike
                }
                if(localStorage.like){
                    const oldLike=JSON.parse(localStorage.like)
                    const newPerson= JSON.stringify(this.person)
                    const fixedPerson= JSON.parse(newPerson)
                    const newArr=[fixedPerson]
                    oldLike.forEach(like => {
                        newArr.push(like)
                    });
                    localStorage.like=JSON.stringify(newArr)
                }
            }
            
            
        },
         mounted(){
            this.setUser()
        }
    }
</script>

<template>
    <div class="card profileCard centerMargin">
        
        <div class="card-body">
            <div class="card-title nameHeader">{{person.name}}, {{person.age}}</div>
            <div class="profileImgDiv centerMargin">
                <img :src='person.profileImg' class='profileImgMoreInfo' >
            </div>
            <div>
                <h3>My Bio</h3>
                <p class="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum, voluptatem nemo veniam fuga, maiores dignissimos provident necessitatibus voluptatibus enim blanditiis dolorum sapiente pariatur amet ab sed inventore doloremque ratione.</p>
            </div>
            <div class="row tagRow">
                <h3>My Basics</h3>
                <div class="col tagCol">
                    <TagItemVue :tagText="person.gender"/>
                </div>
                
            </div>
            <div class="row tagRow">
                <h3>My Interest</h3>
                <div class="col tagCol" v-for="interest in interests" :key="interest.id">
                    <TagItemVue :tagText="interest.text" :key="interest.id"/>
                </div>
            </div>
            <div class="location">
                <h3 >My Location</h3>
                <span class="locationTxt">
                    {{person.location}}

                </span>
              <div class="swipeButtons2">
                  <router-link to="/">
                        <button class="dislikeBtn swipeBtnMI" @click="this.dislikeUser"><fa icon="x" size='2xl'/></button>
                        <button class="heartBtnBolt swipeBtnMI" @click="this.likeUser"><fa icon="fa-heart-circle-bolt" size='2xl'/> </button>
                        <button class="heartBtn swipeBtnMI" @click="this.likeUser"><fa icon="fa-heart" class="heartIcon" size='2xl'/> </button>
                    </router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<style>
   @import './ProfileCard.scss';
</style>