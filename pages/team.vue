<template>
  <div>
    <rd-hero :content="hero_content" />

    <rd-base-section>
      <center-l size="wide">
        <ul class="team">
          <li class="team__member" v-for="i in team_temp">
            <rd-team-card :content="i" />
          </li>
        </ul>
      </center-l>
    </rd-base-section>

  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
// Vamos pegar os dados da lista de team (Directus)
const hero_content = {
  title: 'Team',
  tagline: 'Responsible Data for Children is an initiative launched by The Governance Lab at New York University and UNICEF that seeks to promote responsible handling of data for and about children. Its work could not be possible without dedicated support.',
}


const team_temp = [
  {
    "name": "Stefaan Verhulst",
    "image": "/images/team/stefaan-verhulst.jpg",
    "organization": "The GovLab",
    "description": "Stefaan G. Verhulst is Co-Founder and Chief Research and Development Officer of the Governance Laboratory @NYU (GovLab) where he is responsible for building a research foundation on how to transform governance using advances in science and technology. Verhulst’s latest scholarship centers on how technology can improve people’s lives and the creation of more effective and collaborative forms of governance. Specifically, he is interested in the perils and promise of collaborative technologies and how to harness the unprecedented volume of information to advance the public good."
  },
  {
    "name": "Andrew J. Zahuranec",
    "image": "/images/team/andrew-zahuranec.jpg",
    "organization": "The GovLab",
    "description": "Andrew J. Zahuranec is Research Fellow at The GovLab, where he is responsible for studying how advances in science and technology can improve governance. In previous positions at the NATO Parliamentary Assembly and National Governors Association, he worked on issues as far-ranging as election security, the commercial space industry, and the opioid epidemic. He has a Master of Arts in Security Policy Studies from the George Washington University and a bachelor’s degree in Political Science and Intelligence from Mercyhurst University."
  },
  {
    "name": "Sara Marcucci",
    "image": "/images/team/sara-marcucci.jpg",
    "organization": "The GovLab",
    "description": "Sara Marcucci is a Research Fellow at The GovLab, and her work focuses on data governance, tech policy, and digital rights. Before joining The GovLab, she worked at the Open Data Institute in London, where she advised the UK Government and the EU Commission developing policy options to create an enabling environment for bottom-up data institutions. Previous to that, Sara worked as a research and project manager at Nesta Italia, where she oversaw the Tech for Good department, focusing on projects related to democratic innovation, Internet governance, and citizen participation. She holds a MSc in Data & Society from the London School of Economics and Political Science, where she then worked as a researcher and investigated the intersections between datafied urbanism and data justice."
  },
  {
    "name": "Eugenia Olliaro",
    "image": "/images/team/eugenia-olliaro.jpg",
    "organization": "UNICEF",
    "description": "Eugenia Olliaro is a Programme Specialist at UNICEF headquarters and the global UNICEF lead of the Responsible Data for Children (RD4C) initiative. Through the initiative, Eugenia advocates for a more responsible data handling culture within UNICEF and partners (governments, CSOs, and others), and supports UNICEF offices and programmes to promote the best interest of the child when using data for and about them. Eugenia's law background has brought her to work in different countries with academia, CSOs and a worker's union. She has been working for UNICEF for several years and was posted in Kenya and Tajikistan before moving to headquarters in NY."
  },
  {
    "name": "Krisana Messerli",
    "image": "/images/team/krisana-messerli.jpg",
    "organization": "UNICEF",
    "description": ""
  }
]

</script>

<style scoped lang="scss">
.team {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
}
</style>
