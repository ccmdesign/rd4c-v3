<template>
  <div class="rd-case-study-card" :is-active="isActive" @click="isActive = !isActive" >
    <div class="image">
      <img v-if="content.cover_image" :src="content.cover_image" :alt="content.heading">
      <img v-else-if="content.image" :src="content.image" :alt="content.heading">
      <img v-else src="/images/default.jpg" :alt="content.heading" />
    </div>
    <div class="content stack">
      <h4 class="brow" v-if="content.brow">{{ content.brow }}</h4>
      <h4 class="brow" v-else-if="brow">{{ $t('resources.cardBrow') }}</h4>
      <h3 class="heading">{{ isActive.value }}{{ content.heading }}</h3>
      <h5 class="tagline">{{ content.tagline }}</h5>
      <p class="main-text" v-html="content.description"></p>
      <div class="actions">
        <a class="button" :href="content.url" target="_blank" rel="noopener noreferrer" data-color="accent">{{ $t('resources.btnLabel') }}</a>
      </div>
      <cluster-l class="principles-list" v-if="tags">
        <rd-chip v-for="(item, index) in content.principles" :color="index">{{ item }}</rd-chip>
      </cluster-l>
    </div>
  </div>
</template>

<script setup>
const isActive = ref(false);

defineProps({
  content: {
    type: Object,
    required: true
  },
  tags: {
    type: Boolean,
    default: true
  },
  brow: {
    type: Boolean,
    default: true
  }
});

</script>

<style lang="scss" scoped>
// Card Variables
.rd-case-study-card {
  --_principle-hsl: var(--tertiary-hsl);
}


//////////////////////
// Card Structure
/////////////////////

.rd-case-study-card {
  @media screen and (min-width: 768px) {
    display: grid;
    height: auto;
    gap: var(--s1);
    grid-template-columns: 1fr 500px;
    grid-template-areas: "content image";
  }
}

// Left Panel Structure
.content {
  padding: var(--s1);
  @media screen and (min-width: 768px) { 
    padding: var(--s2); 
  }

  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-area: content;
  }
}

// Right Panel Structure
.image {
  max-width: 100%;
  aspect-ratio: 1/1;
  grid-area: image;
}

//////////////////////
// Card Visuals
//////////////////////

.rd-case-study-card {
  background-color: var(--white-color);
  border-radius: var(--base-border-radius);
  border: 2px solid hsla(var(--base-hsl), 0.1);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0);
}

.rd-case-study-card[is-active="true"] {
  border: 2px solid hsla(var(--base-hsl), 0.1);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) { 
    transform: scale(1.025);
  }
}

// Setting vertical spacing
.stack { --space: var(--s0); }
.principles-list { --space: var(--s2); }

img {
  max-width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  object-fit: cover;
  border-radius: var(--base-border-radius);
}

.brow {
  font-size: var(--s0);
  text-transform: uppercase;
  font-weight: 800;
  color: hsla(var(--_principle-hsl), 1);
}

.heading {
  --space: 0;
  line-height: 1.35;
}

.tagline {
  
}


//////////////////////
// Card Transitions //
//////////////////////
.rd-case-study-card {
  transition: all 0.5s;
}

// Principles List Transition
.principles-list {
  max-height: 2rem;
  overflow: clip;
  transition: all 0.5s;
}

[is-active="true"] .principles-list { max-height: 11rem; }

// Image transition
img {
  transform: rotate(-5deg) scale(1);
  transition: all 0.5s;
}

[is-active="true"] img { 
  transform: rotate(0deg) scale(1.05);;
  @media screen and (min-width: 768px) { transform: rotate(0deg) scale(1.1); }
}

// Complex transition for the text truncate effect
.main-text {
  --lh: 1.62;
  --max-lines: 6;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines) * 1em);
  overflow: clip;
  transition: all calc(0.05s * var(--max-lines));

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    transition: all calc(0.5s);
    background: linear-gradient(to bottom, transparent, hsla(var(--white-hsl), 1) 75%);
  }
}

// Text Truncate Effect [isActive] State
[is-active="true"] .main-text {
  --max-lines: 80;

  &::after {
    top: 100%;
    transition-delay: .15s;
  }
}

</style>
