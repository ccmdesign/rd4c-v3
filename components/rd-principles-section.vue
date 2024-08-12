<template>
  <div class="rd-principles-section">
    <h2>Using a principle-led approach to help children</h2>
    <div class="rd-principles-section__panels">
      <div class="rd-principles-section__panel">
        <p>Supported by principles developed through extensive research and country office engagement, we support
          institutions as they pursue data-driven projects that promote children’s welfare.</p>
        <p><rd-button to="/principles" visual="secondary" color="primary">Explore our Approach and
            Principles</rd-button></p>
      </div>
      <div class="rd-principles-section__panel">
        <p>Principles guide responsible data handling toward saving children’s lives, defending their rights, and
          helping
          them fulfill their potential from early childhood through adolescence.</p>
        <p><rd-button to="/about" visual="secondary" color="primary">Join the Conversation</rd-button></p>
      </div>
    </div>

    <h3>Our Principles</h3>
    <div class="rd-principles-section__grid">
      <div v-for="(i, index) in principles" :key="index" class="grid-item" :data-n="index + 1">
        <h4>{{ (index + 1).toString().padStart(2, '0') }}</h4>
        <h3>{{i.name}}</h3>
        <!-- <p>{{ i.description }}</p> -->
      </div>
      <div class="grid-item" data-n="8">
        <h3>Read about our principles at <a href="/principles"
            class="link">Principles Page</a></h3>
      </div>
    </div>

  </div>
</template>

<script setup>
const principles = await queryContent('principles').find();
</script>

<style lang="scss" scoped>
.rd-principles-section {
  background-color: var(--white-color);
  color: var(--base-color);
  text-align: center;
  padding-bottom: var(--s2);
}

.rd-principles-section__panels {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
}

.rd-principles-section__panel {
  display: flex;
  flex-direction: column;
  gap: var(--s0);
  aspect-ratio: 2/1;
  font-size: 1.25rem;
  text-align: left;
  padding: var(--s0);
  max-width: 100svw;
  text-wrap: balance;
  @media screen and (min-width: 768px) { padding: var(--s2); }
  
}

@media screen and (min-width: 768px) {
  .rd-principles-section__panel:nth-child(2n + 1) {
    text-align: right;
  }
}

.rd-principles-section__grid {
  padding: var(--s-2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--s-2);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.grid-item {
  padding: var(--s1);
  aspect-ratio: 1/1;
  align-items: center;
  place-content: center;
  border-radius: var(--base-border-radius);
}

.grid-item {
  --_principle-hsl: var(--rd-purple);
  background-color: hsla(var(--_principle-color), 1);
  position: relative;

}

.grid-item[data-n="1"] { --_principle-color: var(--rd-blue); }
.grid-item[data-n="2"] { --_principle-color: var(--rd-green); }
.grid-item[data-n="3"] { --_principle-color: var(--rd-orange); }
.grid-item[data-n="4"] { --_principle-color: var(--rd-purple); }
.grid-item[data-n="5"] { --_principle-color: var(--rd-red); }
.grid-item[data-n="6"] { --_principle-color: var(--rd-yellow); }
.grid-item[data-n="7"] { --_principle-color: var(--rd-teal); }
.grid-item[data-n="8"] { --_principle-color: var(--base-hsl); }

.grid-item h4 {
  font-size: clamp(7rem, 13vh, 15rem);
  // @media screen and (min-width: 768px) {font-size: 15rem;}
  font-weight: 800;
  color: var(--white-color-10);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-item h3 {
  font-size: clamp(1rem, 2vh, 1.75rem);
  font-weight: bold;
  color: var(--white-color);
  text-align: center;

  &.alt {
    font-size: 1.5rem;
    font-weight: 400;
    text-wrap: balance;
  }
}

.grid-item a {
  color: var(--accent-color);
}
</style>
