<template>
  <div>
    <rd-hero :content="hero_content">

    </rd-hero>

    <rd-split-section id="intro" image="/images/hero/readings.jpg">
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
    </rd-split-section>

    <rd-split-section id="about-us" image="/images/hero/readings.jpg">
      <h2>About Us</h2>
      <p>Responsible Data for Children is an initiative launched by The Governance Lab at New York University and UNICEF
        that seeks to promote responsible handling of data for and about children. </p>
      <p>Through this site, we offer a suite of tools and resources that allow senior officials, project managers,
        children’s advocates, and everyday people with the knowledge they need to ensure children’s rights and interests
        remain a central part of our digital world. </p>
      <p>We also offer information on some of our collaborations around the globe, including our projects with
        governments, UN country offices, civil society groups, and others who play an integral part in promoting the
        potential of the next generation. </p>
    </rd-split-section>

    <rd-split-section id="our-approach" image="/images/hero/readings.jpg">
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
    </rd-split-section>

    <rd-principles-section />

    <rd-team-section />

    <rd-video-section id="testimonials" video="https://www.youtube.com/embed/x4Nu8XhaDcw?si=rpCmMPwDqmXyVJ36">
      <h2>Testimonials</h2>
      <p>We look for opportunities to support youth and their advocates around the globe. In 2024, we spoke to a handful
        of our partners and asked them to describe what the Responsible Data for Children approach meant to them.</p>
    </rd-video-section>

  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const hero_content = {
  brow: "Responsible Data for Children",
  title: "Why it Matters",
  tagline: "Guidance, tools and leadership to support the responsible handling of data for and about children.",
  image: "/images/hero/pencils.png"
}

const team = await queryContent('team').find();
const principles = await queryContent('principles').find();

</script>

<style scoped
  lang="scss">
  .team {
    display: grid;
    grid-template-columns: minmax(250px, 1fr);
  }
</style>
