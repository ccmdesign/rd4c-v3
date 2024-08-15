<template>
  <section class="rd-split-section" :image="image">
    <div class="panel panel--image">
      <slot name="extra">
        <img :src="image" alt="">
      </slot>
    </div>

    <div class="panel panel--content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: ''
  },
  video: {
    type: String,
    default: ''
  }
});

</script>

<style lang="scss" scoped>
.rd-split-section {
  --_padding-inline: var(--s0);
  --_padding-block: var(--s2);
  --_gap: var(--s1);

  @media screen and (min-width: 768px) {
    --_padding-inline: var(--s3);
    --_padding-block: var(--s3);
    --_gap: var(--s0);
  }
}

.rd-split-section { 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max(auto, 1fr);
  grid-template-areas: "panel1" "panel2";

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "panel1 panel2";
  }
}

.panel {
  max-width: 100svw; // Probably there is a way to remove this. 
  @media screen and (min-width: 768px) {
    max-width: 50svw; // Probably there is a way to remove this. 
  }
}

.panel--image { grid-area: panel1; }
.panel--content { grid-area: panel2; }

@media screen and (min-width: 768px) {
  .rd-split-section:nth-of-type(odd) {
    grid-template-areas: "panel2 panel1";
    .panel--content { text-align: right; }
  }
}

.panel--image {
  aspect-ratio: 1 / 1;
  background-color: lightblue;
  object-position: center;

  img {
    object-fit: cover;
    height: 100%;
    
  }
}

.panel--content {
  display: flex;
  flex-direction: column;
  gap: var(--_gap);
  justify-content: center;
  padding: var(--_padding-block) var(--_padding-inline);
}

// .rd-split-section .content {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: var(--_gap);
//   padding: var(--_padding-block) 0;
//   text-wrap: balance;
// }

// .rd-split-section :deep(h2) {
//   color: var(--primary-color);
// }
// .rd-split-section :deep(h3) {
//   color: var(--primary-color);
// }
// .rd-split-section :deep(h4) {
//   font-weight: 900;
//   color: var(--primary-color);
// }
// .rd-split-section :deep(p) {
//   color: var(--base-color);
// }
</style>
