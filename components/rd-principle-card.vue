<template>
  <div class="principle-card" :principle="content.slug" :n="n" :expanded="expanded" @click="expanded = !expanded">
    <div class="number">{{ principle_n }}</div>
    <div class="content | text-wrap:balance">
      <h3>{{content.name}}</h3>
      <h4>{{content.tagline}}</h4>
      <p>{{content.description}}</p>
    </div>
    
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      brow: '',
      heading: '',
      description: '',
      slug: '',
      url: ''
    })
  },
  n: {
    type: Number,
    required: true,
    default: 0
  },
  expanded: {
    type: Boolean,
    default: false
  }
});

const principle_n = computed(() => {
  return props.n.toString().padStart(2, '0');
});

</script>

<style lang="scss" scoped>
.principle-card {
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: "number content";
    
  }
}

// decorations
.principle-card {
  --_principle-padding: var(--space-m-l);

  box-sizing: border-box;
  border-radius: 0 var(--base-border-radius) var(--base-border-radius) 0;
  transition: all .3s;
  box-shadow: 0 0 16px hsla(var(--base-hsl), .1);
  border: 2px solid hsla(var(--_principle-hsl), 1);
  border-left: 8px solid hsla(var(--_principle-hsl), 1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 32px hsla(var(--base-hsl), .25);
    --_principle-padding: var(--space-l-xl);
  }
}

.principle-card .number {
  font-size: clamp(7rem, 13vh, 15rem);
  line-height: 1;
  font-weight: 800;
  color: hsla(var(--white-hsl), .5);
  
  -webkit-text-stroke: 1px hsla(var(--_principle-hsl), 1);
  text-stroke: 1px hsla(var(--_principle-hsl), 1); /* Standard property for other browsers */
  grid-area: number;
  padding: var(--space-s-l);

  @supports not (-webkit-text-stroke: 1px black) {
    .principle-card .number {
      color: hsla(var(--_principle-hsl), 1);
    }
  }
}

.principle-card .content {
  grid-area: content;
  align-self: center;
  display: flex;
  gap: var(--space-3xs-2xs);
  flex-direction: column;
  padding: var(--_principle-padding);
  color: hsla(var(--_principle-hsl), 1);
}

.content > * { color: inherit }

.principle-card h3 {
  font-size: var(--step-3);
  font-weight: 200;
}

.principle-card h4 {
  font-weight: 400;
  font-size: var(--step-0);
}

// Defining Colors
.principle-card {
  --_principle-hsl: var(--rd-purple);
  background-color: hsla(var(--_principle-hsl), .1);
}

.principle-card[data-n="1"] {
  --_principle-hsl: var(--rd-blue);
}

.principle-card[data-n="2"] {
  --_principle-hsl: var(--rd-green);
}

.principle-card[data-n="3"] {
  --_principle-hsl: var(--rd-orange);
}

.principle-card[data-n="4"] {
  --_principle-hsl: var(--rd-purple);
}

.principle-card[data-n="5"] {
  --_principle-hsl: var(--rd-red);
}

.principle-card[data-n="6"] {
  --_principle-hsl: var(--rd-yellow);
}

.principle-card[data-n="7"] {
  --_principle-hsl: var(--rd-teal);
}

.principle-card[data-n="8"] {
  --_principle-hsl: var(--base-hsl);
}

</style>


