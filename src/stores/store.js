import { defineStore } from 'pinia'

export const useSharedValueStore = defineStore('sharedValueStore', {
  state: () => ({
    selectedOption: ''
  }),
  actions: {
    setOption(value) {
      this.selectedOption = value
    }
  }, 
  getters: {
    getMessage: (state) => {
      return `${state.selectedOption} is the selected option`
    }
  }
})
