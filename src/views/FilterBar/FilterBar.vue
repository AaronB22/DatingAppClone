<script>
    import { useFilterStore } from '@/stores/filter';
    export default{
        data(){
            return{
               maxValue:100,
                minValue:18,
                isMaleClick:true,
                isFemaleClick:true,
                isBothClick:true
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
            },
            applyFilter(){
                const filterStore= useFilterStore()
                filterStore.minAge=this.minValue;
                filterStore.maxAge=this.maxValue;
                filterStore.male= this.isMaleClick;
                filterStore.female= this.isFemaleClick
            },
            handleGender(e){
                console.log(e.target.id)
                switch (e.target.id) {
                    case 'male':
                        
                        this.isMaleClick=e.target.checked
                        console.log(this.isMaleClick)
                        this.checkIfBothClick()
                        break;
                    case 'female':
                        this.isFemaleClick=e.target.checked
                        this.checkIfBothClick()
                        break;
                    case 'all-genders':
                       this.isMaleClick=e.target.checked
                       this.isFemaleClick=e.target.checked
                       this.isBothClick=e.target.checked
                }
            },
            checkIfBothClick(){
                if(this.isFemaleClick && this.isMaleClick){
                    this.isBothClick= true
                }
                else{
                    this.isBothClick= false
                }
            },
            setFilters(){
                const filterStore= useFilterStore()
                this.minValue= filterStore.minAge;
                this.maxValue= filterStore.maxAge
                this.isMaleClick= filterStore.male;
                this.isFemaleClick= filterStore.female;
                if(this.isFemaleClick && this.isMaleClick){
                    this.isBothClick=true
                }
                else{
                    this.isBothClick=false
                }
            }
        },
        mounted(){
            this.setFilters()
        }
    }
</script>
<template>
    <div class="card filterCard">
        <router-link to="/"><fa icon="x"  size="2xl"></fa></router-link>
        <h1>Date Filters</h1>
        <div class="card-body">
            <p>Who you want to date</p>
            <div class="card">
                <div class="card-body">

                    <div>
                        <div v-if="isMaleClick" >Men<input type="checkbox" id='male' @change="handleGender" checked></div>
                        <div v-else>Men<input type="checkbox" id='male' @change="handleGender"></div>

                    </div>
                    <div>
                        <div v-if="isFemaleClick" >Women<input type="checkbox" id='female' @change="handleGender" checked></div>
                        <div v-else>Women<input type="checkbox" id='female' @change="handleGender"></div>

                    </div>
                     <div>
                        <div v-if="isBothClick" >All Genders<input type="checkbox" id='all-genders' @change="handleGender" checked></div>
                        <div v-else>All Genders<input type="checkbox" id='all-genders' @change="handleGender"></div>

                    </div>

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
            <button @click="applyFilter()">Apply</button>
        </div>
    </div>
</template>
<style>
    @import './FilterBar.scss';
</style>