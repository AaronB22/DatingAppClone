<script>
    export default{
        data(){
            return{
               maxValue:100,
               minValue:18

            }
        },  
        methods:{
            handleRangeChange(){
                if(this.minValue<18){
                    this.minValue=18
                }
                if(this.minValue>this.maxValue){
                    this.minValue= this.maxValue
                }
                if(this.maxValue>100){
                    this.maxValue=100
                }
            }
        }
    }
</script>
<template>
    <div class="card filterCard">
        <div class="card-body">
            <p>Who you want to date</p>
            <div class="card">
                <div class="card-body">
                    <div>Men <input type="checkbox"></div>
                    <div>Women <input type="checkbox"></div>
                    <div>All people <input type="checkbox"></div>
                </div>
            </div>
             <p>Select Age Range</p>
            <div class="card">
                <div class="card-body row">
                    <div class='col ageCol'>
                        <div class="col">
                            <div class="row">
                                <label>Min Age</label>
                            </div>
                            <div class="row">
                                <input min="18" type="number" class="ageInput" v-model="minValue" @change="handleRangeChange()">

                            </div>
                        </div>
                    </div>
                    <div  class='col ageCol'>
                        <div class="col">
                            <div class="row">
                                <label>Max Age</label>
                            </div>
                            <div class="row">
                                <input min="18" type="number" class="ageInput" v-model="maxValue" @change="handleRangeChange()">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    @import './FilterBar.scss';
</style>