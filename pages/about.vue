<template>
  <div>
    <rd-hero bg="false" :content="hero_content">


    </rd-hero>

    <rd-base-section id="intro">
      <h2>Data about children is everywhere</h2>
      <p>Today’s digital age is marked by major advances in how we record major events—at birth, at the doctor, at
        school, in the home, and when children ask for help. These advances have been key in ensuring that the rights
        and welfare of children are upheld from the outset of their lives. They ensure access to health care, education,
        legal protection, and other essential services.</p>
      <p>However, this increased visibility, enabled by the constant accumulation of digital information, also
        introduces incredible challenges. The very data that institutions use to help children can also be abused and
        misused, threatening children’s privacy and security or making them vulnerable to harm.</p>
      <p>These facts raise a dilemma: How can we promote the good use of data while minimizing harm? </p>
      <p>What do government agencies, international organizations, civil society organizations, and everyday people need
        to handle data responsibly, effectively, and in ways that are consistent with children’s wants and needs?</p>
    </rd-base-section>

    <rd-base-section id="about-us">
      <h2>About Us</h2>
      <p>Responsible Data for Children is an initiative launched by The Governance Lab at New York University and UNICEF
        that seeks to promote responsible handling of data for and about children. </p>
      <p>Through this site, we offer a suite of tools and resources that allow senior officials, project managers,
        children’s advocates, and everyday people with the knowledge they need to ensure children’s rights and interests
        remain a central part of our digital world. </p>
      <p>We also offer information on some of our collaborations around the globe, including our projects with
        governments, UN country offices, civil society groups, and others who play an integral part in promoting the
        potential of the next generation. </p>
    </rd-base-section>

    <rd-base-section id="our-approach">
      <h2>Our Approach at a Glance</h2>
      <p>Responsible Data for Children seeks to build awareness regarding the need for special attention to data issues
        affecting children—especially in this age of changing technology and data linkage. It is unique in that it
        adopts a principle-led approach to data responsibility. </p>
      <p>Recognizing that each country has its own policies and directives around data, we seek to be a useful
        supplement, providing a framework that can be flexible and fill in the gaps that might be left by the more
        “rigid” requirements.</p>
      <p>This approach allows us to be more approachable, meeting organizations where they are, and aspirational,
        providing a “North Star” that organizations can navigate toward.</p>
      <p>This principle-led approach was developed by UNICEF and The GovLab after extensive research, visits to
        partners, and discussion with our network of experts. We’ve used the principles in projects with UNHCR and
        others.</p>
    </rd-base-section>

    <rd-base-section id="principles">
      <h2>Our Principles</h2>
      <reel-l>
        <rd-principle-card v-for="i in principles" :content="i" />
      </reel-l>

    </rd-base-section>

    <rd-base-section>
      <center-l size="wide">
        <ul class="team">
          <li class="team__member" v-for="i in team_temp">
            <rd-team-card :content="i" />
          </li>
        </ul>
      </center-l>
    </rd-base-section>

    <rd-base-section id="testimonials">
      <h2>Testimonials</h2>
      <p>We look for opportunities to support youth and their advocates around the globe. In 2024, we spoke to a handful
        of our partners and asked them to describe what the Responsible Data for Children approach meant to them.</p>
      <iframe src="https://www.youtube.com/embed/x4Nu8XhaDcw?si=rpCmMPwDqmXyVJ36" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </rd-base-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const hero_content = {
  brow: "Responsible Data for Children",
  title: "Why it Matters",
  tagline: "Guidance, tools and leadership to support the responsible handling of data for and about children.",
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

const principles = await queryContent('principles').find();
</script>

<style scoped
  lang="scss">
  .team {
    display: grid;
    grid-template-columns: minmax(250px, 1fr);
  }
</style>
