import {defineStore} from 'pinia';

export const useFilterStore=defineStore('filter',{
    state:()=>({
        minAge:18,
        maxAge:100,
        male: true,
        female: true
        
    })
})