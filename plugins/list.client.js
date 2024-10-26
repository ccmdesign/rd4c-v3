import { defineNuxtPlugin } from '#app'
import List from 'list.js'


const __DEFAULT = [
  'filter-heading',
  'filter-tagline',
  'filter-main_content',
]


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('list', (options) => {
    return new List('list-container', {
      valueNames: [...__DEFAULT, ...options.map((item) => `filter-${item}`)]
    })
  })
})