<template>
  <header class="rd-hero" :bg="content.image" :route="$route.name">
    <rd-top-bar />
    <center-l measure="var(--wide)" class="rd-hero__wrapper">
      <slot>
        <stack-l class="rd-hero__headings">
          <h5 class="rd-hero__brow" v-if="content.brow">{{ content.brow }}</h5>
          <h2 class="rd-hero__title">{{ content.title }}</h2>
          <h4 class="rd-hero__tagline">{{ content.tagline }}</h4>
          <div v-if="content.action">
            <nuxt-link class="button" size="l" visual="primary" color="primary" :to="content.action.url">
              {{ content.action.label }}
            </nuxt-link>
          </div>
        </stack-l>
      </slot>
    </center-l>
  </header>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      // brow: '',
      title: 'Title',
      tagline: 'tagline',
      image: '/images/hero/hero.png',
      action: {
        label: 'Action',
        url: '/'
      }
    })
  }
})

</script>

<style lang="scss" scoped>
.rd-hero {
  height: 45.5svh;
  padding: var(--s0) 0;
}

.rd-hero[bg] {
  background-image: url('/images/hero/home.png');      
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}

.rd-hero[route="index"] { padding-bottom: var(--s5); }

.rd-hero__wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.rd-hero__headings {
  --space: var(--s0);
  text-align: center;
  display: flex;
  align-items: center;
  
  > *[class] {
    width: fit-content;
    padding: var(--s-2) var(--s0);
    color: var(--white-color);
    position: relative;
    z-index: 1;
    background-blend-mode: multiply;
    background-color: var(--primary-color);
  }
}

.rd-hero__brow {
  font-weight: 700;
  text-transform: uppercase;
}

.rd-hero__title {
  font-weight: 300;
  font-size: 2.7rem;
  line-height: 1.1;
}
</style>
