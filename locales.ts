export default [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'es',
    name: 'Spanish',
  },
  {
    code: 'fr',
    name: 'French',
  }
].map(lang => ({ file: lang.code + '.json', ...lang }))