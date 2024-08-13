<template>
  <div class="principle-card" :principle="content.slug" :n="n" :expanded="expanded" @click="expanded = !expanded">
    <div class="number">{{ principle_n }}</div>
    <div class="content">
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
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  grid-template-areas: "number content";
  gap: var(--s2);
}

// decorations
.principle-card {
  box-sizing: border-box;
  border-radius: 0 var(--base-border-radius) var(--base-border-radius) 0;
  border-left: 4px solid hsla(var(--_principle-hsl), 1);
}

.principle-card .number {
  font-size: clamp(7rem, 13vh, 15rem);
  font-weight: 800;
  color: white;
  text-shadow: 0 0 2px hsla(var(--_principle-hsl), 1);
  grid-area: number;
  padding: 0 var(--s2);
}

.principle-card .content {
  grid-area: content;
  align-self: center;
  display: flex;
  gap: var(--s-1);
  flex-direction: column;
  padding: var(--s2) var(--s4) var(--s2) 0;
}

.principle-card h3 {
  font-size: clamp(1rem, 4vh, 2.75rem);
  font-weight: 200;
  color: hsla(var(--_principle-hsl), 1);
}

.principle-card h4 {
  color: hsla(var(--_principle-hsl), 1);
  font-weight: 600;
}

.principle-card a {
  color: var(--accent-color);
}


// Defining Colors
.principle-card {
  --_principle-hsl: var(--rd-purple);
  background-color: hsla(var(--_principle-hsl), .2);
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


