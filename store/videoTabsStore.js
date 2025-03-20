import { defineStore } from 'pinia';

export const useStore = defineStore('videoTabs', {
  state: () => ({
    tab: 0,
  }),
  actions: {
    setActiveTab(value) {
      this.tab = value;
    },
    
  },
});