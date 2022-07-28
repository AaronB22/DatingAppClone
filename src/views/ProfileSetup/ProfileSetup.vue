<script>
/* eslint-disable */
    export default{
        data(){
            return{
                hasImg:false,
                isWomen:false,
                isMan:false,
                isNb:false,
                user:{
                    age:null,
                    gender:null,
                    location:null,
                    profileImg:null,
                    name:null
                }
            }
        },
        methods:{
            setImg(e){
                const reader= new FileReader()
                reader.readAsDataURL(e.target.files[0])
                reader.onload= e=>{
                    this.user.profileImg= e.target.result;
                }
                this.hasImg=true
            },
            selectGender(gender){
                switch (gender.target.id){
                    case 'woman':
                        this.isWomen=gender.target.checked
                        if(gender.target.checked){
                            this.isMan=false;
                            this.isNb=false
                        }
                        break;
                    case 'man':
                        this.isMan=gender.target.checked;
                         if(gender.target.checked){
                            this.isWomen=false;
                            this.isNb=false
                        }
                    break;
                    case 'nb':
                        this.isNb= gender.target.checked;
                         if(gender.target.checked){
                            this.isMan=false;
                            this.isWomen=false
                        }
                }
            },
            addBio(e){
                this.user.bio= e.target.value;
            },
            addName(e){
                this.user.name=e.target.value;
            },
            addAge(e){
                this.user.age=e.target.value;
            },
            addLocation(e){
                this.user.location=e.target.value;
            },
            saveChanges(){
                if(this.isMan){
                    this.user.gender='Man'
                }
                if(this.isWomen){
                    this.user.gender='Woman'
                }
                if (this.isNb){
                    this.user.gender='Non-Binary'
                }
                localStorage.user=JSON.stringify(this.user);
                 window.location.assign('/')
            },
            setProfile(){
                if(localStorage.user){
                  this.user= JSON.parse(localStorage.user)
                  this.hasImg=true
                  switch(this.user.gender){
                    case 'Man':
                        this.isMan=true;
                        break;
                    case "Woman":
                        this.isWomen=true;
                        break;
                    case "Non-Binary":
                        this.isNb=true;
                        break;
                  }
                }
            }
        },
        mounted(){
            this.setProfile()
        }
    }
</script>

<template>
    <div class="card setupCard">
        <div class="card-body">
            <div class="mainImgDiv center">
                <div v-if="hasImg">
                    <img :src='user.profileImg' class='mainImg center'/>
                </div>
                <div v-else>
                    <h1>Upload Img</h1>
                    <input type='file' name='file' id='file' @change="setImg"/>
                </div>
        
            </div>
            <h2 class="text-center">Select Gender</h2>
            <div class="card gender-select center">
                <div class="card-body">
                    <div >
                        Women <input v-if="isWomen" type="checkbox" id="woman" checked @change="selectGender"><input v-else type="checkbox" id="woman" @change="selectGender">
                    </div>
                     <div>
                        Man <input v-if="isMan" type="checkbox" id="man" checked @change="selectGender"><input v-else type="checkbox" id="man" @change="selectGender">
                    </div>
                    <div>
                        Non Binary <input v-if="isNb" type="checkbox" id="nb" checked @change="selectGender"><input v-else type="checkbox" id="nb" @change="selectGender">
                    </div>

                </div>
            </div>
            <div class="center">
                <h2 class="text-center">Bio</h2>
                <textarea class="bioSetup" @change="addBio">{{user.bio}}</textarea>
            </div>
              <div>
                <h3>Name</h3>
                <input @change="addName" v-model="user.name">
            </div>
             <div>
                <h3>Age</h3>
                <input @change="addAge" type="number" v-model="user.age" >
            </div>
            <div>
                <h3>Location</h3>
                <input @change="addLocation" v-model="user.location">
            </div>
        </div>
        <button class="saveBtn center" @click="saveChanges">Save Changes</button>
    </div>
</template>

<style>@import 'ProfileSetup.scss';</style>