import { defineStore } from 'pinia'

export const useNinjaStore = defineStore('ninja', {
    state: () => ({
        objectives:[],
    }),
    getters: {

    },
    actions: {
        addObjective(obj){
            this.objectives.push(obj)
        }
    },
})
