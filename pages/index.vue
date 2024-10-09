<template>
  <div>
    <rd-hero :content="heroData" />

    <rd-video-section video="https://www.youtube.com/embed/e0JxdJu4mK8?si=CY7g9bN1rYff_QDM">
      <h2>{{ block_intro.title }}</h2>
      <span v-html="block_intro.description"></span>
    </rd-video-section>

    <rd-principles-section :block="block_principle_led" id="principles" />

    <!-- @ToDo: @Douglas, adicionei esse divider aqui. 
         Preciso que vc configure essa string no directus
    -->
    <rd-divider color="primary" class="divider" content="What we do" />

    <rd-split-section id="case-studies" image="/images/testing/test-14.jpg">
      <h2>{{ block_case_studies.title }}</h2>
      <div class="cms-content" v-html="block_case_studies.description"></div>
      <p><rd-button to="/resources#case-studies" visual="secondary" color="primary">{{ $t('buttons.learn-more')
          }}</rd-button></p>
    </rd-split-section>

    <!-- <rd-base-section id="updates">
      <h2>Updates</h2>
      <rd-card-group>
        <rd-update-card v-for="i in articles" v-bind:key="i.slug" :content="i" />
      </rd-card-group>
      <p class="text-align:center margin-top:s2"><rd-button to="/updates" visual="secondary" color="primary">{{ $t('buttons.view-all') }}</rd-button></p>
    </rd-base-section>-->

    <rd-split-section id="tools" image="/images/testing/test-19.jpg">
      <h2>{{ block_tools.title }}</h2>
      <div class="cms-content" v-html="block_tools.description"></div>
      <p><rd-button visual="secondary" color="primary" to="/publications">{{ $t('buttons.learn-more')
          }}</rd-button></p>
    </rd-split-section>

    <rd-split-section id="partners" image="/images/testing/test-24.jpg">
      <h2>{{ block_platform.title }}</h2>
      <div class="cms-content" v-html="block_platform.description"></div>
      <p><rd-button to="/about" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button>
      </p>
    </rd-split-section>

    <rd-split-section id="get-involved" image="/images/testing/test-29.jpg">
      <h2 class="text-balance">{{ block_newsletter.title }}</h2>
      <div class="cms-content" v-html="block_newsletter.description"></div>
      <p><rd-button to="/#get-involved" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button>
      </p>
    </rd-split-section>

    <rd-divider v-if="block_team.brow" :content="block_team.brow" color="purple" class="divider" />

    <rd-team-section :block="block_team" />

    <rd-divider v-if="block_get_involved.brow" :content="block_get_involved.brow" color="blue" class="divider" />
    <rd-split-section id="get-involved" image="/images/testing/test-28.jpg">
      <h2>{{ block_get_involved.title }}</h2>
      <div class="cms-content" v-html="block_get_involved.description"></div>
      <p><rd-button href="http://eepurl.com/gKa2S1" visual="secondary" color="primary">{{ $t('buttons.getInvolved')
          }}</rd-button></p>
    </rd-split-section>

    <rd-split-section id="stay-engaged" image="/images/testing/test-25.jpg">
      <h2>{{ block_stay_engaged.title }}</h2>
      <div class="cms-content" v-html="block_stay_engaged.description"></div>
      <p><rd-button href="http://eepurl.com/gKa2S1" color="primary">{{ $t('buttons.stayEngaged') }}</rd-button></p>
    </rd-split-section>
  </div>
  <!-- <a href="https://docs.google.com/document/d/1GWAdhbJy4Y89TYvRL2eycuprJaDbW-yX8EuzjnObt2M/edit">Google Doc</a> -->
</template>

<script setup>
const { locale, t } = useI18n()

const pageContent = await queryContent('pages', 'home').findOne();
const { 
  block_hero, 
  block_intro, 
  block_principle_led, 
  block_case_studies, 
  block_tools,
  block_platform, 
  block_newsletter, 
  block_get_involved,  
  block_team, 
  block_stay_engaged } = await useTranslator(pageContent, locale.value)

const heroData = ref({...block_hero, 
  image: "/images/hero/homepage.jpg",
  action: {
    label: t('buttons.learn-more'),
    url: "/about"
  }});

</script>

<style scoped lang="scss"></style>
