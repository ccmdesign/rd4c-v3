import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    searchValue: '',
    lastSearchResults: [],
    lastTerms: [],
    searchHistory: {},
    attempts: 0
  }),
  actions: {
    setSearchValue(value) {
      this.searchValue = value;
    },
    
    setLastSearchResults(value) {
      this.lastSearchResults = value;
    },

    setLastTerms(value) {
      this.lastTerms.push(value);
    },

    setSearchHistory(value) {
      if(!this.searchHistory.hasOwnProperty(value.key)) {
        this.searchHistory[value.key] = value.content;
      }
    },
    setAttempts(value) {
      this.attempts = value;
    }

  },
});