<script>
    export default{
        data(){
            return{
                profileImg:null,
                hasImg:false

            }
        },
        methods:{
            testImg(e){
                console.log(e.target.files[0])
                const reader= new FileReader()
                reader.readAsDataURL(e.target.files[0])
                reader.onload= e=>{
                    this.profileImg= e.target.result;
                }
                this.hasImg=true
            }
        }
    }
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="mainImgDiv center">
                <div v-if="hasImg">
                    <img :src='profileImg' class='mainImg center'/>
                </div>
                <div v-else>
                    <h1>Upload Img</h1>
                    <input type='file' name='file' id='file' @change="testImg"/>
                </div>
        
            </div>
            <div class="card card-body">
                <div>
                    Women <input type="checkbox">
                </div>
                <div>
                    Man <input type="checkbox">
                </div>
                <div>
                    Non-Binary <input type="checkbox">
                </div>
            </div>
            <div>
                <h2>Bio</h2>
                <textarea class="bio"></textarea>
            </div>
            <div>
                <h3>Location</h3>
                <input>
            </div>
        </div>
    </div>
</template>

<style>@import 'ProfileSetup.scss';</style>