<script>
    import TagItemVue from '../../components/Tags/TagItem.vue';
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
                },
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
        components:{
            TagItemVue,
            
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
            },
            
            
        },
        mounted (){
            this.getUser()
        }
    }
</script>

<template>
    <div class="card profileCard centerMargin">
        
        <div class="card-body">
            <div class="card-title nameHeader">{{person.name}}, {{person.age}}</div>
            <div class="profileImgDiv centerMargin">
                <img :src='person.profileImg' class='profileImg' >
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
            </div>
            <div class="swipeButtons">
                <button class="dislikeBtn swipeBtn" @click="this.getUser"><fa icon="x" size='2xl'/></button>
                <span class="swipBtnSpacer"></span>
                <button class="heartBtn swipeBtn" @click="this.likeUser"><fa icon="fa-heart" class="heartIcon" size='2xl'/> </button>
            </div>
        </div>
    </div>
</template>

<style>
   @import './ProfileCard.scss';
</style>