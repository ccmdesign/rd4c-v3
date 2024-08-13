<template>
  <div class="principle-card" :principle="content.slug" :n="n" :expanded="expanded" @click="expanded = !expanded">
    <div class="content">
      <div class="number">{{ principle_n }}</div>
      <h3>{{content.name}}</h3>
      <!-- <h4>{{content.tagline}}</h4> -->
      <!-- <p>{{content.description}}</p> -->
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
  padding: var(--s1);
  // aspect-ratio: 1/1;
  place-content: center;
  gap: var(--s0);
  border-radius: var(--base-border-radius);
  
  // clip-path: path("M9,297.7l98.9-98.9,98.9-98.9c4.8-4.8,12.5-4.8,17.2,0l98.9,98.9,98.9,98.9c4.8,4.8,4.8,12.5,0,17.2l-98.9,98.9-98.9,98.9c-4.8,4.8-12.5,4.8-17.2,0l-98.9-98.9L9,314.9c-4.8-4.8-4.8-12.5,0-17.2Z");
}

.principle-card[expanded="true"] {
  // transform: scale(1.05);
  transition: transform 0.3s;
  aspect-ratio: 3/2;
  grid-column: span 3;
  grid-row: span 2;
}

.principle-card .content { text-align: center; }

.principle-card {
  --_principle-hsl: var(--rd-purple);
  background-color: hsla(var(--_principle-color), 1);
  position: relative;
}

.principle-card[data-n="1"] {
  --_principle-color: var(--rd-blue);
}

.principle-card[data-n="2"] {
  --_principle-color: var(--rd-green);
}

.principle-card[data-n="3"] {
  --_principle-color: var(--rd-orange);
}

.principle-card[data-n="4"] {
  --_principle-color: var(--rd-purple);
}

.principle-card[data-n="5"] {
  --_principle-color: var(--rd-red);
}

.principle-card[data-n="6"] {
  --_principle-color: var(--rd-yellow);
}

.principle-card[data-n="7"] {
  --_principle-color: var(--rd-teal);
}

.principle-card[data-n="8"] {
  --_principle-color: var(--base-hsl);
}

.principle-card .number {
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

.principle-card h3 {
  font-size: clamp(1rem, 2vh, 1.75rem);
  font-weight: bold;
  color: var(--white-color);
  // text-align: center;
}

.principle-card h4 {
  color: var(--white-color);
  font-weight: 300;
}

.principle-card a {
  color: var(--accent-color);
}
</style>


