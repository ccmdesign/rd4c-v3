<template>
  <section id="team" class="team-section">
    <div class="content">
      <h2>Maintaining a team of dedicated researchers and advocates</h2>
      <p>Learn about the team supporting the Responsible Data for Children initiative and the different projects they
        work on.</p>
      <p><rd-button to="/about#team" visual="secondary" color="primary">{{
          $t('buttons.view-all') }}</rd-button></p>
    </div>
    <div class="team-group">
      <div class="team-card" v-for="member of team" :content="member" :key="member.id"
        :style="{ '--bg': `url(${member.image})` }">
        <h4>{{ member.name }}</h4>
      </div>
    </div>
  </section>
</template>

<script setup>
  // const props = defineProps({
  //   team: Object,
  //   bg: String
  // });

  const team = await queryContent('team').find();

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
    grid-template-columns: 1fr 2fr ;
    grid-template-rows: auto;
    grid-template-areas: "content team";  
    gap: var(--s2);  
  }
}

.team-group { grid-area: team; }
.divider { grid-area: divider; }
.content { grid-area: content; }

.team-group {
  padding-inline: var(--s0);
  display: grid;
  gap: var(--s-2);
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.content {
  margin-inline: var(--s0);
  * + * { margin-block-start: var(--s-1); }

  @media screen and (min-width: 768px) {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    * { max-width: 30ch; }
  }
}

.team-card {
  aspect-ratio: 1/1;
  max-width: auto;
  background-image: var(--bg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--base-border-radius);
  display: flex;
  position: relative;
}

.team-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(hsla(var(--base-hsl), 0), hsla(var(--base-hsl), .4));
  border-radius: var(--base-border-radius);
  z-index: 0;
}

.team-card h4 {
  margin-top: auto;
  width: 100%;
  padding: var(--s1);
  font-size: 1.25rem;
  text-align: center;
  color: var(--white-color);
  position: relative;
  z-index: 1;
  
}
</style>
