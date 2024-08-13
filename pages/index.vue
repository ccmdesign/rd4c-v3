<template>
  <div>
    <rd-hero :content="hero_content" />
    
    <rd-video-section video="https://www.youtube.com/embed/e0JxdJu4mK8?si=CY7g9bN1rYff_QDM">
      <h2>Welcome to Responsible Data for Children</h2>
      <p>Responsible Data for Children is a collaboration between UNICEF and The Governance Laboratory at New York
        University to promote the well-being and interests of children in our digital age.</p>
      <p>We provide a framework for assessing risks and opportunities for advancing children’s rights across the data
        lifecycle. We are grounded in a set of principles for responsible data handling. Our support and guidance
        comes in a few different ways.</p>
    </rd-video-section>

    <rd-principles-section :content="principles" id="principles" />
      
    <rd-split-section id="case-studies" image="/images/hero/readings.jpg">
      <h2>Offering instructive case studies</h2>
      <p>Visit our case study page to see examples from around the world on how institutions are promoting responsible
        data approaches</p>
      <p><rd-button to="/publications#case-studies" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button></p>
    </rd-split-section>

    <!-- <rd-base-section id="updates">
      <h2>Updates</h2>
      <rd-card-group>
        <rd-update-card v-for="i in articles" v-bind:key="i.slug" :content="i" />
      </rd-card-group>
      <p class="text-align:center margin-top:s2"><rd-button to="/updates" visual="secondary" color="primary">{{ $t('buttons.view-all') }}</rd-button></p>
    </rd-base-section>-->

    <rd-split-section id="tools" image="/images/hero/case_studies.png">
      <h2>Socializing our tools and resources</h2>
      <p>Check out our tools, a light-weight and user-friendly way for organizations and practitioners to operationalize
        the RD4C Principles.</p>
      <p><rd-button to="/publications#resources" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button></p>
    </rd-split-section>

    <rd-split-section id="partners" image="/images/hero/pencils.png">
      <h2>Offering partners a platform to promote their work directly</h2>
      <p>Watch some of the videos developed by us and our partners that speak to the value of the Responsible Data for
        Children principles and examples around the globe.</p>
      <p><rd-button to="/about#partners" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button></p>
    </rd-split-section>

    <rd-split-section id="get-involved" image="/images/hero/readings.jpg">
      <h2>Helping children’s advocates to get involved and stay engaged</h2>
      <p>Want to know more about our work and seek support? Interested in providing your own lessons on responsible data
        practices for children?</p>
      <p>Keep up to date with us by joining our newsletter. We also welcome ideas for publications, case studies, tools,
        and events so that we can be a hub for researchers and practitioners around the world.</p>
      <p><rd-button to="/#get-involved" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button></p>
    </rd-split-section>

    <rd-team-section :team="team"/>

    <rd-split-section id="get-involved" image="/images/hero/readings.jpg">
      <h2>Get Involved & Stay Engaged</h2>

      <h3>Get Involved</h3>
      <p>The Responsible Data for Children initiative seeks collaboration with all international organizations, NGOs,
        private sector companies, and others who have a role to play in promoting the responsible use of data for and
        about children. We encourage institutions to reach out to us if they are interested in having support for
        embedding the Responsible Data for Children principles into their work.</p>
      <p>If you become a member of our alliance, you will be able to:</p>

      <ul>
        <li>Find and connect with different collaboration partners;</li>
        <li>Share your work with stakeholders through our blog site and other platforms;</li>
        <li>Learn and benefit from others’ experiences and practices;</li>
        <li>Request services and expertise around specific challenges throughout the data lifecycle;</li>
        <li>Get the latest news on Responsible Data for Children’s work and events; and</li>
        <li>Receive the opportunity to shape the international agenda around responsible data handling.</li>
      </ul>
      <p>Reach out to us at rd4c@thegovlab.org. Please put “Join Our Alliance” in the subject line of the email.</p>

    </rd-split-section>

    <rd-split-section id="stay-engaged" image="/images/hero/case_studies.png">
      <h3>Stay Engaged</h3>
      <p>The Responsible Data for Children initiative maintains a newsletter where it provides quarterly updates on its
        work around the globe. If you’d like to receive these updates and join the conversation, please subscribe now.
      </p>
      <p><rd-button to="/join" visual="secondary" color="primary">Join the conversation</rd-button></p>
    </rd-split-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
import locales from '@/locales'
const { locale, t } = useI18n()
const hero_content = {
  brow: t('pages.home.brow'),  
  title: t('pages.home.title'),
  tagline: t('pages.home.tagline'),
  image: "/images/hero/homepage.jpg",
  action: {
    label: t('buttons.learn-more'),
    url: "/about"
  }
}

const articles = await queryContent('articles').sort({ createdAt: -1 }).limit(4).find();
const team = await queryContent('team').limit(4).find();

const data = reactive({
  articles: [],
});

// EXEMPLO DE TRATAMENTO DE DADOS APENAS EXEMPLO:
articles.forEach(post => {
  const article = {
    title: post.title,
    description: post.description,
    slug: post.slug,
    url: `/articles/${post.slug}`
  }
  data.articles.push(article);
});




</script>

<style scoped lang="scss"></style>
