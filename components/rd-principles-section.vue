<template>
  <div class="rd-principles-section">
    <rd-divider content="Our Principles" color="base" /><!-- @ToDo: Translate -->
    <div class="principles-grid">
      <div v-for="(i, index) in principles" :key="index" class="principle" :data-n="index + 1" @click="toggleAttribute">
        <div class="principle__content">
          <h4 class="number">{{ (index + 1).toString().padStart(2, '0') }}</h4>
          <h3>{{i.name}}</h3>
          <!-- <p>{{ i.description }}</p> -->
        </div>
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

function toggleAttribute(event) {
  const element = event.currentTarget;
  const isActive = element.getAttribute('is-active') === 'true';
  element.setAttribute('is-active', !isActive);
}


</script>

<style lang="scss" scoped>
.rd-principles-section {
  background: linear-gradient(to bottom, hsla(var(--base-hsl), 1) 15%, hsla(var(--primary-hsl), 1));
  color: var(--base-color);
}

.principles-grid {
  max-width: 1440px;
  padding-inline: var(--space-xs-s);
  margin-inline: auto;
  padding-block: var(--space-l-xl);
  display: grid;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 1fr);  
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(3, 1fr);  
  }
  
  & {
    gap: var(--space-2xs-xs);
  }

}

.principle {
  --_principle-hsl: var(--rd-purple);
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--base-border-radius);
}  

.principle[is-active="true"] {
  // background-color: red;
  // grid-row: 1 / 3 !important;
  // grid-column: 2 / 7 !important;
  // aspect-ratio: unset;
}

.principle__content {
  z-index: 1;
  position: relative;
  aspect-ratio: 1;
  align-items: center;
  place-content: center;
  text-align: center;
  padding: var(--space-m-l);
  border-radius: var(--base-border-radius);
  
}

.principle::after {
  content: '';
  inset: 14%;
  aspect-ratio: 1;
  background-color: hsla(var(--base-hsl), .1);
  position: absolute;
  rotate: 45deg;

  z-index: 0;
  
}

.principle[is-active="true"][data-n="1"] {
  background-color: red;
}

.principle .number {
  font-size: clamp(5rem, 12vh, 15rem);
  line-height: 1;
  font-weight: 800;
  color: hsla(var(--white-hsl), .2);
  -webkit-text-stroke: 1px hsla(var(--_principle-hsl), .31);
  text-stroke: 1px hsla(var(--_principle-hsl), .3); /* Standard property for other browsers */
  padding: var(--space-s-l);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @supports not (-webkit-text-stroke: 1px black) {
    .principle-card .number {
      color: hsla(var(--_principle-hsl), .2);
    }
  }
}

.principle h3 {
  font-size: clamp(1rem, 2.5vh, 1.5rem);
  font-weight: 400;
  text-align: center;
  z-index: 1;
}


.principle[data-n="1"] {
  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
}
.principle[data-n="2"] {
  @media screen and (max-width: 768px) {
    grid-column: 2 / 4;
    grid-row: 2 / 4;
  }

  @media screen and (min-width: 768px) {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
  }
}
.principle[data-n="3"] {
  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
  }

  @media screen and (min-width: 768px) {
    grid-column: 5 / 7;
    grid-row: 1 / 3;
  }
}
.principle[data-n="4"] {
  @media screen and (max-width: 768px) {
    grid-column: 2 / 4;
    grid-row: 4 / 6;
  }

  @media screen and (min-width: 768px) {
    grid-column: 7 / 9;
    grid-row: 1 / 3;
  }
}
.principle[data-n="5"] {
  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 5 / 7;
  }

  @media screen and (min-width: 768px) {
    grid-column: 2 / 4;
    grid-row: 2 / 5;
  }
}
.principle[data-n="6"] {
  @media screen and (max-width: 768px) {
    grid-column: 2 / 4;
    grid-row: 6 / 8;
  }

  @media screen and (min-width: 768px) {
    grid-column: 4 / 6;
    grid-row: 2 / 5;
  }
}
.principle[data-n="7"] {
  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 7 / 9;
  }

  @media screen and (min-width: 768px) {
    grid-column: 6 / 8;
    grid-row: 2 / 5;
  }
}

.principle::after {
  background-color: hsla(var(--_principle-hsl), 1);
  border-radius: var(--base-border-radius);
  border: 2px solid hsla(var(--_principle-hsl), 1);  
  box-shadow: 0 16px 38px -12px hsla(var(--base-hsl),  0.52), 0 4px 25px 0px hsla(var(--base-hsl), 0.12), 0 8px 10px -5px hsla(var(--base-hsl), 0.2);
}

.principle * { color: hsla(var(--white-hsl), 1);}

.principle[data-n="1"] { --_principle-hsl: var(--rd-blue); }
.principle[data-n="2"] { --_principle-hsl: var(--rd-green); }
.principle[data-n="3"] { --_principle-hsl: var(--rd-orange); }
.principle[data-n="4"] { --_principle-hsl: var(--rd-purple); }
.principle[data-n="5"] { --_principle-hsl: var(--rd-red); }
.principle[data-n="6"] { --_principle-hsl: var(--rd-yellow); }
.principle[data-n="7"] { --_principle-hsl: var(--rd-teal); }
.principle[data-n="8"] { --_principle-hsl: var(--base-hsl); }


</style>
