<template>
  <div>
    <rd-hero :content="heroData" />

    <rd-video-section :video="block_intro.url">
      <h2>{{ block_intro.title }}</h2>
      <span v-html="block_intro.description"></span>
    </rd-video-section>

    <rd-principles-section :block="block_principle_led" :brow="block_our_principles.brow?block_our_principles.brow:''" id="principles" />

    <!-- @ToDo: @Douglas, adicionei esse divider aqui. 
         Preciso que vc configure essa string no directus
    
    
    
-->

<rd-divider color="primary" class="divider" v-if="block_what_we_do.brow" :content="block_what_we_do.brow" />
    <rd-split-section id="case-studies" image="/images/testing/test-14.jpg" title="Photo by Ismail Salad Osman/Unsplash">
      <h2>{{ block_case_studies.title }}</h2>
      <div class="cms-content" v-html="block_case_studies.description"></div>
      <p><rd-button :to="localePath('/resources#case-studies')" visual="secondary" color="primary">{{ $t('buttons.learn-more')
          }}</rd-button></p>
    </rd-split-section>

    <!-- <rd-base-section id="updates">
      <h2>Updates</h2>
      <rd-card-group>
        <rd-update-card v-for="i in articles" v-bind:key="i.slug" :content="i" />
      </rd-card-group>
      <p class="text-align:center margin-top:s2"><rd-button to="/updates" visual="secondary" color="primary">{{ $t('buttons.view-all') }}</rd-button></p>
    </rd-base-section>-->

    <rd-split-section id="tools" image="/images/testing/test-19.jpg" title="Photo by Marisa Howenstine/Unsplash">
      <h2>{{ block_tools.title }}</h2>
      <div class="cms-content" v-html="block_tools.description"></div>
      <p><rd-button visual="secondary" color="primary" :to="localePath('/resources')" >{{ $t('buttons.learn-more')
          }}</rd-button></p>
    </rd-split-section>

    <rd-split-section id="partners" image="/images/testing/test-24.jpg" title="Photo by Sigmund/Unsplash" >
      <h2>{{ block_platform.title }}</h2>
      <div class="cms-content" v-html="block_platform.description"></div>
      <p><rd-button :to="localePath('/videos')" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button>
      </p>
    </rd-split-section>

    <rd-split-section id="get-involved" image="/images/testing/test-29.jpg" title="Photo by Yannis/Unsplash">
      <h2 class="text-balance">{{ block_newsletter.title }}</h2>
      <div class="cms-content" v-html="block_newsletter.description"></div>
      <p><rd-button href="https://thegovlab.us6.list-manage.com/subscribe?u=1a990feb5c&id=8990a71369" visual="secondary" color="primary">{{ $t('buttons.learn-more') }}</rd-button>
      </p>
    </rd-split-section>

    <rd-divider v-if="block_team.brow" :content="block_team.brow" color="primary" class="divider" />

    <rd-team-section :block="block_team" />

    <rd-divider v-if="block_get_involved.brow" :content="block_get_involved.brow" color="primary" class="divider" />
    <rd-split-section id="get-involved" image="/images/testing/test-28.jpg" title="Photo by Vidar Nordli mathisen/Unsplash">
      <h2>{{ block_get_involved.title }}</h2>
      <div class="cms-content" v-html="block_get_involved.description"></div>
      <p><rd-button href="mailto:datastewards@thegovlab.org" visual="secondary" color="primary">{{ $t('buttons.getInvolved')
          }}</rd-button></p>
    </rd-split-section>

    <rd-split-section id="stay-engaged" image="/images/testing/test-25.jpg" title="Photo by Robert Collins/Unsplash">
      <h2>{{ block_stay_engaged.title }}</h2>
      <div class="cms-content" v-html="block_stay_engaged.description"></div>
      <p><rd-button href="https://thegovlab.us6.list-manage.com/subscribe?u=1a990feb5c&id=8990a71369" color="primary">{{ $t('buttons.stayEngaged') }}</rd-button></p>
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
  block_what_we_do,
  block_our_principles,
  block_stay_engaged } = await useTranslator(pageContent, locale.value)

const heroData = ref({...block_hero, 
  image: "/images/hero/homepage.jpg",
  imageCredit: 'Photo by Ben Wicks/Unsplash',
  action: {
    label: t('buttons.learn-more'),
    url: "/about"
  }});

</script>

<style scoped lang="scss"></style>
