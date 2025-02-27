export function useLocaledUrl(locale, url) {
  
  const localizedUrl = computed(() => {
    if(locale.value === 'en') {
      return url
    }
  
    return `${ locale.value }${ url }`
  })

  return localizedUrl
}