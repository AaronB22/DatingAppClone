<script>
import TagItemVue from '../Tags/TagItem.vue';
    let id=0
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
                interesList:[
                    'Hiking',
                    'Skiing',
                    'Motorcycling',
                    'Coding',
                    'Beach',
                    'Moutains'
                ],
                interests:[]
            }
        },
        components:{
            TagItemVue
        },
        methods:{
           async getUser(){
                const res=await fetch('https://randomuser.me/api/');
                const data= await res.json();
                const userData= data.results[0];
                console.log(userData)
                this.person.profileImg=userData.picture.large;
                this.person.location=userData.location.city;
                this.person.name=userData.name.first +' '+userData.name.last;
                this.person.gender=userData.gender;
                this.person.age=userData.dob.age;
                this.generateNewInterest()
            },
            likeUser(){
                if(!localStorage.like){
                    const newLike=JSON.stringify([this.person])
                    localStorage.like=newLike
                    this.getUser()
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
                    this.getUser()
                }
            },
            generateNewInterest(){
                this.interests=[];
                while(this.interests.length<5){
                    const rng=Math.floor(Math.random()*this.interesList.length)
                    let isDub=false;
                    this.interests.forEach(inters=>{
                        if(this.interesList[rng]===inters.text)isDub=true
                    })
                    if(!isDub){
                        const newInter={id:id++, text:this.interesList[rng]}
                        this.interests.push(newInter)
                    }
                }
            }
            
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
        <Button class="heartBtn swipeBtn" @click="this.likeUser"><fa icon="heart"/> </Button>
    </div>
    <div class="card profileCard centerMargin">
        <div class="card-body">
            <div class="card-title">{{person.name}}, {{person.age}}</div>
            <div class="profileImgDiv centerMargin">
                <img :src='person.profileImg' class='profileImg' >
            </div>
            <div>
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