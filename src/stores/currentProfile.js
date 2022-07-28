import {defineStore} from 'pinia';


export const useCurrentProfileStore=defineStore('currentProfile',{
    state:()=>({
        person:{}
        
    })
})