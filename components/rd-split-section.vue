<template>
  <section class="rd-split-section" :image="image">
    <img v-if="image" :src="image" alt="">
    
    <div class="extra-content" v-else >
      <slot name="extra"></slot>
    </div>

    <div class="content">
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
  --_gap: var(--s-1);
  --_padding-inline: var(--s0);
  --_padding-block: var(--s2);

  @media screen and (min-width: 768px) {
    --_gap: var(--s0);
    --_padding-inline: var(--s3);
    --_padding-block: var(--s3);
  }
}

.rd-split-section { 
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    &:nth-of-type(2n) { 
      flex-direction: row-reverse; 
      .content { text-align: right; }
    }
  }
}

.rd-split-section > * { flex: 1; }

.rd-split-section > img {
  @media screen and (min-width: 768px) { width: 50%; }

  & {
    flex: 1;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1 / 1;
  }
}

.rd-split-section .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--_gap);
  padding: var(--_padding-block) var(--_padding-inline);
  text-wrap: balance;
  @media screen and (min-width: 768px) { font-size: 125%; }
}

.rd-split-section :deep(h2) {
  color: var(--primary-color);
  font-size: 2rem;
}
.rd-split-section :deep(h3) {
  color: var(--primary-color);
  font-size: 1.5rem;
}
.rd-split-section :deep(h4) {
  font-size: 1rem;
  font-weight: 900;
  color: var(--primary-color);
}
.rd-split-section :deep(p) {
  color: var(--base-color);
}
</style>
