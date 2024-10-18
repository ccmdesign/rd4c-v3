import { ref } from 'vue';

const SECTIONS = [
  "block_hero",
  "intro", 
  "case_studies",
  "get_involved",
  "stay_engaged",
  "principle_led",
  "tools",
  "newsletter",
  "team",
  "platform",
  "testimonials",
  "about_us",
  "approach",
  "footer",
  "signup",
  "lessons",
  "webinars",
  "explainers"
]

export function useTranslator(data, locale, sections=SECTIONS) {
  const translations = {}

  sections.forEach((section) => {
    if (data[section]) {
      translations[!section.startsWith('block') ? `block_${section}` : section] = data[section][locale] ? data[section][locale] : data[section]["en"]
    }
  })

  return translations
}

// export function useTranslator(data, locale) {

//   console.log(45, data)

//   const { 
//     block_hero,
//     intro, 
//     case_studies,
//     get_involved,
//     stay_engaged,
//     principle_led,
//     tools,
//     newsletter,
//     team,
//     platform,
//     // about
//     testimonial,
//   } = data;

//   return {
//     "block_hero": block_hero[locale] ? block_hero[locale] : block_hero["en"],
//     "block_intro": intro[locale] ? intro[locale] : intro["en"],
//     "block_case_studies": case_studies[locale] ? case_studies[locale] : case_studies["en"],
//     "block_get_involved": get_involved[locale] ? get_involved[locale] : get_involved["en"],
//     "block_stay_engaged": stay_engaged[locale] ? stay_engaged[locale] : stay_engaged["en"],
//     "block_principle_led": principle_led[locale] ? principle_led[locale] : principle_led["en"],
//     "block_tools": tools[locale] ? tools[locale] : tools["en"],
//     "block_newsletter": newsletter[locale] ? newsletter[locale] : newsletter["en"],
//     "block_team": team[locale] ? team[locale] : team["en"],
//     "block_platform": platform[locale] ? platform[locale] : platform["en"],
//     // about
//     "block_testimonial": testimonial[locale] ? testimonial[locale] : testimonial["en"],

//   };
// }
