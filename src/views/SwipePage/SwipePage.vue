<script>
import {useFilterStore} from '@/stores/filter'
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
                    interests:[]
                },
                swipe:'false',
                genderFilter:'both',
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
        methods:{
            filterUser(person){
                const filterStore=useFilterStore()
                if(filterStore.male){
                    this.gender='male'
                }
                if(filterStore.female){
                    this.gender='female'
                }
                if(filterStore.female && filterStore.male){
                    this.gender='both'
                }
                if(person.dob.age >=filterStore.minAge && person.dob.age<=filterStore.maxAge){

                    switch(this.gender){
                        case 'male':
                            if(person.gender==='male'){
                                console.log('male')
                                this.setUser(person)
                            }
                            else{
                                this.getUser()
                            }
                            break;
                        case 'female':
                            if(person.gender==='female'){
                                this.setUser(person)
                            }
                            else{
                                this.getUser()
                            }
                            break;
                        case 'both':
                            this.setUser(person)
                    }
                    
                }
                else{
                    this.getUser()
                }
            },
            setUser(person){
                    if(person.gender==='male'){
                        this.person.gender= "Man"
                    }
                    if(person.gender==='female'){
                        this.person.gender='Woman'
                    }
                    this.person.profileImg=person.picture.large;
                    this.person.location=person.location.city;
                    this.person.name=person.name.first +' '+person.name.last;
                    this.person.age=person.dob.age;
                    this.generateNewInterest()
            },

           async getUser(){
                const res=await fetch('https://randomuser.me/api/');
                const data= await res.json();
                const userData= data.results[0];
                this.filterUser(userData)
            },
            likeUser(){
                if(!localStorage.like){
                    const newLike=JSON.stringify([this.person])
                    localStorage.like=newLike
                    this.swipe='likeSwipe'
                    setTimeout(()=>{
                        this.swipe=false
                        this.getUser()
                     }, '500')
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
                        this.swipe='likeSwipe'
                        setTimeout(()=>{
                            this.swipe=false
                            this.getUser()
                         }, '500')
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
            },
            dislikeUser(){
                this.swipe='disLikeSwipe';
                setTimeout(()=>{
                        this.swipe=false
                         this.getUser()
                     }, '500')
            }
        },
        mounted (){
        this.getUser()
        }
    }

</script>

<template>
    <div class="swipeParent">
        <div class="card card-body swipeCard" :class="swipe">
            <div class="upgrade">
                
            </div>
            <div class="profileImgDiv">
                <div class="darken"></div>
                <img :src='person.profileImg' class='profileImg' >
                <div class="imgHeader">{{person.name}}, {{person.age}}</div>
            </div>
         <div class="swipeButtons">
                    <button class="dislikeBtn swipeBtn" @click="this.dislikeUser"><fa icon="x" size='2xl'/></button>
                     <button class="heartBtnBolt swipeBtn" @click="this.likeUser"><fa icon="fa-heart-circle-bolt" class="heartIcon" size='2xl'/> </button>
                    <button class="heartBtn swipeBtn" @click="this.likeUser"><fa icon="fa-heart" class="heartIcon" size='2xl'/> </button>
                </div>
        </div>

    </div>
</template>

<style>
    @import 'SwipePage.scss';
</style>