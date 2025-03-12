<template>
  <section id="team" class="team-section">
    <div class="content">
      <h2>{{ block.title }}</h2>
      <div class="cms-content" v-html="block.description"></div>
      <p><rd-button to="/about#team" visual="secondary" color="primary">{{
          $t('buttons.view-all') }}</rd-button></p>
    </div>
    <div class="team-group">
      <rd-team-card v-for="member of team" :content="member" :key="member.id"  />
    </div>
  </section>
</template>

<script setup>
  defineProps({
    block: {
      type: Object,
      required: false
    }
  })

  const { locale } = useI18n()

  const team = await queryContent(locale.value, 'team').find();
</script>

<style lang="scss" scoped>
.team-section {
  max-width: var(--wrapper);
  margin-inline: auto;
  padding-block: var(--s2);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: "content" "team";  
  gap: var(--s1);  

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: auto;
    grid-template-areas: "content team";  
    gap: var(--s2);  
  }
}

.team-group { grid-area: team; }
.divider { grid-area: divider; }
.content { grid-area: content; }

.team-group {
  padding-inline: var(--space-2xs-xs);
  display: grid;
  gap: var(--space-2xs-xs);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.content {
  margin-inline: var(--s0);
  * + * { margin-block-start: var(--s-1); }

  @media screen and (min-width: 768px) {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    // * { max-width: 30ch; }
  }
}


</style>
