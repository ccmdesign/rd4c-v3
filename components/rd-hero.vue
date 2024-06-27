<template>
  <header class="rd-hero" :bg="bg">
    <rd-top-bar />
    <center-l measure="var(--wide)" class="rd-hero__wrapper">
      <slot>
        <stack-l class="rd-hero__headings">
          <h5 class="rd-hero__brow" v-if="content.brow">{{ content.brow }}</h5>
          <h2 class="rd-hero__title">{{ content.title }}</h2>
          <h4 class="rd-hero__tagline">{{ content.tagline }}</h4>
          <div v-if="content.action">
            <rd-button visual="primary" color="primary">{{ content.action.label }}</rd-button>
          </div>
        </stack-l>
      </slot>
    </center-l>
  </header>
</template>

<script setup>
defineProps({
bg: {
  type: Boolean,
  default: false
},
  content: {
    type: Object,
    required: true,
    default: () => ({
      // brow: '',
      title: 'Title',
      tagline: 'tagline',
      image: '/images/image.jpg',
      // action: {
      //   label: 'Action',
      //   link: '/'
      // }
    })
  }
})

</script>

<style lang="scss" scoped>
.rd-hero {
  height: 80svh;
  border-bottom: 8px solid var(--primary-color);
  padding: var(--s0) 0;
  background: linear-gradient(180deg, hsla(var(--primary-hsl), 0) 0%, hsla(var(--primary-hsl), .2) 100%);
}

.rd-hero[bg=true] {
  background-image: url('/images/hero/hero-image--homepage.png'),
      linear-gradient(180deg, hsla(var(--primary-hsl), 0) 0%, hsla(var(--primary-hsl), .2) 100%);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
}

.rd-hero__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.rd-hero__headings {
  margin-top: var(--s1);
  --space: var(--s0);
  // height: 100%;
  
  
}

.rd-hero__brow {
  
  color: var(--base-color);
  font-weight: 700;
  text-transform: uppercase;
}
.rd-hero__title {
  color: var(--base-color);
  font-weight: 300;
  font-size: 2.7rem;
  line-height: 1.1;
}
.rd-hero__tagline {
  color: var(--base-color);
}
</style>
