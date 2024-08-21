<template>
  <div class="rd-principles-section">
    <rd-divider content="Our Principles" color="purple" /><!-- @ToDo: Translate -->

    <div class="rd-principles-section__panels">
      <div class="cms-content" v-html="block.description"></div>
      <div class="flow">
        <p><rd-button to="/principles" visual="secondary" color="primary">Our Approach and Principles</rd-button></p><!-- @ToDo: Translate -->
        <p><rd-button to="/about" visual="secondary" color="primary">Join the Conversation</rd-button></p><!-- @ToDo: Translate -->
      </div>
      
    </div>

    <div class="rd-principles-section__grid">
      <div v-for="(i, index) in principles" :key="index" class="grid-item" :data-n="index + 1">
        <h4>{{ (index + 1).toString().padStart(2, '0') }}</h4>
        <h3>{{i.name}}</h3>
        <!-- <p>{{ i.description }}</p> -->
      </div>
      <div class="grid-item" data-n="8">
        <h3>Read about our principles at <a href="/principles" class="link">Principles Page</a></h3><!-- @ToDo: Translate -->
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  block: {
    type: Object,
    required: true
  }
});
const { locale } = useI18n()

const pageContent = await queryContent('pages').where({ title: 'Principles' }).findOne();

const principles = await queryContent(locale.value, 'principles').find();
</script>

<style lang="scss" scoped>
.rd-principles-section {
  background-color: var(--white-color);
  color: var(--base-color);
}

.rd-principles-section__panels {
  max-width: var(--wrapper);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: var(--space-m-l);
  padding: var(--space-m-l);

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
  }
}

// .rd-principles-section__panel > * { max-width: 50ch; }

// @media screen and (min-width: 768px) {
//   .rd-principles-section__panel:nth-child(2n + 1) {
//     // align-items: flex-end;
//     // text-align: right;
//   }
// }

.rd-principles-section__grid {
  max-width: var(--wrapper);
  margin: 0 auto;
  padding: var(--space-m-l) var(--space-xs-s);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-3xs-2xs);
}

.grid-item {
  padding: var(--space-m-l);
  aspect-ratio: 2/1;
  @media screen and (min-width: 768px) { aspect-ratio: 1/1; }
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
  font-size: clamp(7rem, calc(18vh + 1rem), 25rem);
  font-weight: 800;
  color: var(--white-color-10);
  position: absolute;
  inset:0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-item h3 {
  font-size: var(--step-0);
  font-weight: bold;
  color: var(--white-color);
  text-align: center;

  &.alt {
    font-weight: 400;
    text-wrap: balance;
  }
}

.grid-item a {
  color: var(--accent-color);
}
</style>
