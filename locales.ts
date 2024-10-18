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
  },
  {
    code: 'sl',
    name: 'Slovenian',
  },
  {
    code: 'ar',
    name: 'Arabic',
    dir: "rtl"
  },
  {
    code: 'zh',
    name: 'Chinese',
  },
].map(lang => ({ file: lang.code + '.json', ...lang }))