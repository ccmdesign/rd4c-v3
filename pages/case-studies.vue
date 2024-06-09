<template>
  <div>
    <h1>Case Studies</h1>
    <div class="aux">
      <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a>
      <p>[Interactive global map that can be clicked to display projects my continent]</p>
      <p>The Responsible Data for Children initiative is a global effort that provides support, guidance, and training about the responsible handling of data for and about refugee children. We work closely with governments, UN offices, businesses, and others to understand the context in which they work and how we can reinforce the responsible practices they already rely on. We also offer suggestions on ways they might address possible gaps and challenges.</p>
      <p>This page highlights some of our most prominent work. Use the map above to filter by continent or look through the full collection of examples below.</p>
    </div>
    <ul>
      <li v-for="i in case_studies_temp">
        <rd-case-study-card :content="i"/> 
      </li>
    </ul>
  </div>
</template>

<script setup>
// Vamos pegar os dados da lista de case studies (Directus)
const case_studies_temp = [
  {
    "name": "Responsible Data for Refugee Children in Uganda: Improving Data Systems for Mental Health and Psychosocial Services Through A Studio Series",
    "url": "https://files.rd4c.org/RD4C_Uganda.pdf",
    "excerpt": "Responsible Data for Children (RD4C) seeks to support government officials and field practitioners to promote better management of refugee children’s data related to the provision of MHPSS services in Uganda. RD4C committed itself to working with UNICEF and UNHCR in Uganda to ideate ways to responsibly harmonize and connect the various MHPSS data sources available—including those derived from cases, surveys, and Inter-Agency Feedback, Referrals, and Resolution Mechanisms and other MHPSS program interventions—so as to improve access and effectiveness of available services. From 19–23 September, 2022, the RD4C initiative supported by UNICEF and UNHCR Uganda hosted three workshops (“studios” in the language of the RD4C initiative) in Kampala and Isingiro District, Uganda to map common challenges regarding the responsible use and reuse of refugee children’s MHPSS data and prototype a pathway forward to address these challenges through the lens of the responsible data for children principles.  In particular, RD4C hosted (a) one workshop with Ugandan government officials, NGOs and service providers, (b) a second workshop with regional field practitioners, and (c) a final workshop guided by the outputs of the prior engagements, with multiple key stakeholders including government officials and partners whose participation was key in ideating workable solutions to address the opportunities and challenges previously identified.",
    "country": "Uganda",
    "principle": [
      "Participatory",
      "Professionally Accountable",
      "People-Centric",
      "Prevention of Harms Across the Data Life Cycle",
      "Proportional",
      "Protective of Children’s Rights",
      "Purpose-Driven"
    ],
    "image": "https://live.staticflickr.com/4063/4403630989_bbb7c35119_h.jpg"
  },
  {
    "name": "Cellule d’Analyse Intégrée: Using Data-Driven Methods to Respond to Complex Disease Outbreaks",
    "url": "https://files.rd4c.org/RD4C_CAI_DRCongo.pdf",
    "excerpt": "Cellule d’Analyse Intégrée (also known as the Integrated Analytics Cell or CAI) is an operational research and analytics cell created by UNICEF to provide local and national level actors (health, civil society), government leaders, United Nations (UN) staff, and associated partners with integrated and actionable evidence to respond to public health emergencies and contexts. It came about to support the response to the tenth Ebola outbreak in the eastern part of the Democratic Republic of the Congo (DRC). Relying on an analytical approach known as “Integrated Outbreak Analytics” (IOA), the CAI has both local teams who collect data in communities through mixed methods and a team of national and international researchers who support study designs, data collection and analysis and who produce insights on this data that can be used for public health decision-making at multiple levels. Based on its role in helping the DRC government bring an end to the tenth Ebola outbreak, the initiative has expanded to support different public health concerns across the country, including cholera, polio, measles, malnutrition and gender-based violence. The CAI has also provided support to different countries including Guinea (Ebola outbreak in 2021); the Republic of Congo (COVID-19) and Ghana (Marburg outbreak 2022). The CAI’s experiences demonstrate the RD4C principles of purpose-driven (the CAI team’s research has led to more tailored policy and communication responses), participatory (the CAI team includes stakeholders with a wide variety of expertise and perspectives), and proportional (the CAI team only collects data when we can be sure it will be used and usable).",
    "country": "Democratic Republic of the Congo",
    "principle": [
      "Purpose-Driven",
      "Participatory",
      "Proportional"
    ],
    "image": "/images/rd4c/drc-desease-outbreaks.jpg"
  },
  {
    "name": "MICS Zimbabwe Domestic Violence Module",
    "url": "https://files.rd4c.org/RD4C_Zimbabwe_MICS_Domestic_Violence.pdf",
    "excerpt": "UNICEF launched the Multiple Indicator Cluster Surveys (MICS) in 1995 to support governments in monitoring the situation of children around the world. Over the past 25 years, this survey has become the largest source of statistically sound and internationally comparable data on women and children worldwide. MICS surveys are conducted by trained fieldworkers who perform face-to-face interviews with household members on a variety of topics. The surveys have been a major data source for assessing progress for international development goals. More than 330 MICS surveys have been carried out in more than 115 countries. Throughout the years, MICS has been updated at the start of each round with new and improved questions and methodologies. Zimbabwe was part of MICS’s rounds in 2009 (MICS3), 2014 (MICS5), and 2019 (MICS6). For the 2019 deployment, Zimbabwe’s National Statistical Agency approached the MICS team to integrate a domestic violence module to counteract the lack of data on the incidence of domestic and gender-based violence. The insights generated from the work subsequently informed national legislation and a variety of national initiatives to combat domestic violence. Deployment of MICS in Zimbabwe captured the RD4C principles of being purpose-driven (targeted at filling a specific data gap and informing ongoing policy discussions), participatory (involved a wide variety of stakeholders in managing each phase of the effort), and preventative of harm across the data lifecycle (relied on techniques through collection, processing, and analysis to guarantee the safety and confidentiality of respondents). It is a useful example for RD4C because it demonstrates how responsible practices can evolve and be supplemented over time. It also demonstrates how principles can be realized in the field in an open, participatory fashion and the challenges that practitioners can face with field work.",
    "country": "Zimbabwe",
    "principle": [
      "Purpose-Driven",
      "Participatory",
      "Prevention of Harms Across the Data Lifecycle"
    ],
    "image": "/images/rd4c/zimbabwe.jpg"
  },
  {
    "name": "Nutrition Online Database",
    "url": "https://files.rd4c.org/RD4C_Afghanistan_Nutrition_Online_Database.pdf",
    "excerpt": "Afghanistan’s Nutrition Online Database is a web-based information system providing access to aggregated nutrition data to inform planning and service delivery at the national, provincial, and zonal level. The Public Nutrition Department (PND) within the Afghanistan Ministry of Public Health (MoPH) leads database management, with UNICEF Afghanistan acting as the lead technical developer and providing ongoing technical support. The system exists because missed use of potentially valuable data is a common challenge across the children’s data ecosystem Afghanistan. The Nutrition Online Database tries to spur the use of existing and newly developed nutrition data streams that otherwise might not inform potentially life saving nutrition planning and service delivery. It is the product of a participatory development process with key stakeholders across sectors and actors within beneficiary communities. PND, UNICEF Afghanistan, and other stakeholders support professionally accountable data use through training efforts and working groups but remain challenged by the fragmentation of nutrition systems, mandates, formats, and indicators. These factors could contribute to challenges in tracking decision-making processes affecting data responsibility across the nutrition data ecosystem.",
    "country": "Afghanistan",
    "principle": [
      "Purpose-Driven",
      "Professionally Accountable",
      "Participatory"
    ],
    "image": "https://dl.airtable.com/.attachments/b66996a7450601d42de849453dba1108/b476e7fd/nutrition-database.jpg"
  },
  {
    "name": "The Aurora Project",
    "url": "https://files.rd4c.org/RD4C_Romania_Aurora_Project.pdf",
    "excerpt": "The Aurora Project is a child protection platform developed by UNICEF Romania in collaboration with NGO and government partners. The system enables social workers and community health care providers to diagnose and monitor vulnerabilities experienced by children and their families. Through the administration of a child protection questionnaire, the system supports the determination of a minimum package of services needed by children and their families. It also enables child protection evaluation and planning work at the national level. The Aurora Project reflects many of the RD4C Principles through its collection of data for clear and well- defined purposes and the various training and guidance materials provided to users. UNICEF Romania and counterparts in the Romanian Government are still working to address challenges related to sensitive group data and the potential for disproportionate data collection and retention.",
    "country": "Romania",
    "principle": [
      "Protective of Children’s Rights",
      "Professionally Accountable",
      "Purpose-Driven"
    ],
    "image": "https://dl.airtable.com/.attachments/5ee879d60b281fcc3709472589e7f531/950fb1d4/aurora-project-cover.jpg"
  },
  {
    "name": "Childline Kenya",
    "url": "https://files.rd4c.org/RD4C_Childline_Kenya.pdf",
    "excerpt": "Childline Kenya is a helpline offering services for children subjected to violence or neglect. Since it began operations in 2006, trained counselors have responded to calls, logged major components for reporting purposes, and redirected callers to relevant services. The organization emphasizes training and the rights of children while ensuring its data collection is proportional and purpose-driven. Given the sensitivity of its work, it faces some difficulties with duplicative and complex data.",
    "country": "Kenya",
    "principle": [
      "Professionally Accountable",
      "Protective of Children’s Rights",
      "Proportional",
      "Purpose-Driven"
    ],
    "image": "https://dl.airtable.com/.attachments/4a3a891930fbbec18e94caa5aa2779e4/ea7315ec/childline-cover.jpg"
  },
  {
    "name": "InForm",
    "url": "https://files.rd4c.org/RD4C_Inform.pdf",
    "excerpt": "UNICEF and its partners collect and use large amounts of data to support their operations, emergency response efforts, and partnerships. In an effort to address significant disparities in how different offices within UNICEF handle this data to support their activities, UNICEF launched a pilot and engaged with partners to develop a platform that would allow for data centralization and standardization. The result was InForm, an Open Data Kit-based data collection and management tool that centralizes dispersed data streams, secures collected data in a common platform, and enables data analysis and visualization. Deployments of InForm in Mozambique to respond to Cyclone Idai and Kenneth demonstrate how InForm captures the RD4C Principles of being purpose-driven (by having a user-centric design approach); participatory (by both relying on and enabling collaborative engagements); proportional (by allowing agencies to centralize data instead of conducting duplicative collections); and prevention of harms across the data life cycle and professionally accountable (by centering data protection). To further advance its responsible data approach, standard operating procedures for handling sensitive data could prove useful. Personnel might also seek to remain cognizant of the time and resource constraints on implementing parties and the need to engage partners early in deployment.",
    "country": "Mozambique",
    "principle": [
      "Participatory",
      "Prevention of Harms Across the Data Life Cycle",
      "Professionally Accountable"
    ],
    "image": "https://odpl.thegovlab.com/ccm-directus/assets/bj1wlosnz6oksc8c"
  }
]

</script>

<style scoped
  lang="scss"></style>
