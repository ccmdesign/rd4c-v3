<template>
  <div class="rd-team-card" @click="openDialog" :style="{ '--bg': `url(${content.image})` }">
    <h4>{{content.name}}</h4>
    <!-- <pre>{{ content }}</pre> -->
  </div>
  <div class="bio-wrapper" :class="{'dialog-content-display' : hideContent }">
    <dialog ref="dialog" class="rd-team-card__bio" @click="closeDialog">
        <!-- <rd-button class="close-button"  icon-only icon-before="close" visual="ghost"></rd-button> -->
        <img :src="content.image" :alt="content.name" />
        <div class="bio-content">
          <h3>{{ content.name }}</h3>
          <h4>{{ content.title }}</h4>
          <h5>{{ content.organization }}</h5>
          <div class="bio-content__text" v-html="content.bio"></div>
        </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      image: 'https://via.placeholder.com/250', // Need a default image
      name: 'John Doe',
      title: 'Example Title',
      organization: 'Example Organization',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies.',
      bioShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  }
});

const dialog = ref(null);
const hideContent = ref(true);

const openDialog = () => {
  hideContent.value = false;
  document.body.style.overflow = 'hidden';
  dialog.value.showModal();
};

const closeDialog = () => {
  hideContent.value = true;
  document.body.style.overflow = '';
  dialog.value.close();
};
</script>

<style lang="scss" scoped>

.dialog-content-display {
  display: none;
}

.rd-team-card {
  aspect-ratio: 1/1;
  max-width: auto;
  background-image: var(--bg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--base-border-radius);
  display: flex;
  position: relative;
  cursor: pointer;
}

.rd-team-card::after {
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

.rd-team-card h4 {
  margin-top: auto;
  width: 100%;
  padding: var(--s0);
  font-size: 100%;
  text-align: center;
  color: var(--white-color);
  position: relative;
  z-index: 1;
}
.bio-wrapper {
  position: absolute;
}
.rd-team-card__bio {
  border-radius: var(--base-border-radius);
  border: 0;
  padding: var(--space-m) var(--space-s-m);
  margin-block-start: var(--s3);
  overflow: visible;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.26), 0 4px 25px 0px rgba(0, 0, 0, 0.06), 0 8px 10px -5px rgba(0, 0, 0, 0.1);
}

.rd-team-card__bio {
  z-index: 1000;
  display: grid;
  gap: var(--space-s-l);
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }
}

.bio-content * + * {
  max-height: 70vh;
  overflow-y: auto;
  margin-block-start: var(--s0);

  @media screen and (max-width: 768px) {
    max-height: 30vh;
  }
}

.bio-content__text * + * {
  margin-block-start: var(--s0);
}

.rd-team-card__bio img {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  margin-block-start: calc(var(--s2) * -1);
  border-radius: var(--base-border-radius);
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    margin-inline-start: calc(var(--s0) * -1);
  }
}


.close-button {
  position: absolute;
  top: var(--s0);
  right: var(--s0);
  z-index: 1;
}
</style>
