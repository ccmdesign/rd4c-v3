<template>
  <header class="rd-hero" :bg="content.image" :route="$route.name" :color="color">
    
    <RdTranslationNotice v-if="!doNotDisplay.includes(locale)" />
    <div class="rd-hero__image">
      <img class="rd-hero__bg" :src="content.image" :alt="content.title" :title="content.imageCredit" />
      <img class="rd-logo-icon" src="/images/logos/rd4c-logo-icon.png" alt="">
    </div>
    
    <div class="rd-hero__content">
      <slot>
        <stack-l class="rd-hero__headings">
          <h5 class="rd-hero__brow" v-if="content.brow">{{ content.brow }}</h5>
          <h2 class="rd-hero__title">{{ content.title }}</h2>
          <h4 class="rd-hero__tagline">{{ content.tagline }}</h4>
          <div v-if="content.action">
            <nuxt-link class="button" size="l" visual="primary" color="primary" :to="actionUrl">
              {{ content.action.label }}
            </nuxt-link>
          </div>
        </stack-l>
      </slot>
    </div>
  </header>
</template>

<script setup>
import { useLocaledUrl } from '../composables/useLocaledUrl';
import RdTranslationNotice from './rd-translation-notice.vue';

const { locale } = useI18n()
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      // brow: '',
      title: 'Title',
      tagline: 'tagline',
      image: '/images/hero/homepage.jpg',
      action: {
        label: 'Action',
        url: '/'
      }
    })
  },
  color: {
    type: String,
    required: false,
    default: ''
  }
})

const actionUrl = props.content.action ? useLocaledUrl(locale, props.content.action.url) : '/';

// THe client is reviewing the content and does not want to display the notice for the languages that they already reviewed
const doNotDisplay = ['en', 'zh']


</script>

<style lang="scss" scoped>
.rd-hero {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 1fr;
  background-color: hsla(var(--rd-purple));

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "top top"
                         "image content";
  }
}

.rd-hero__image {
  max-height: 60vh;
}

@media screen and (max-width: 768px) {
  .rd-hero__image   { grid-row: 2; }
  .rd-hero__content { grid-row: 3; }
}

@media screen and (min-width: 768px) {
  .rd-hero__top-bar { grid-area: top; }
  .rd-hero__image   {  grid-area: image; }
  .rd-hero__content {  grid-area: content; }
}

.rd-hero {
  min-height: 60svh; 
  // max-height: 60svh;
  @media screen and (max-width: 768px) { 
    text-align: center;
  }
  @media screen and (min-width: 768px) { 
    min-height: 60svh; 
    text-align: left;
  }

  &__content { 
    align-self: center;
    padding: var(--space-l-xl) var(--space-m-xl);
  }

  &__headings {
    background-color: hsla(var(--rd-purple));
    
    * { color: white; }
    
    h2 {
      text-transform: uppercase;
      font-weight: 600;
    }

    h4 {
      font-weight: 200;
      text-wrap: balance;
    }
  }

  &__image {
    position: relative;
  }

  &__bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }
}

.rd-logo-icon {
  position: absolute;
  z-index: 1;

  @media screen and (max-width: 768px) { 
    width: 60px;
    bottom: -36px;
    left: calc(50vw - 30px);
  }
  @media screen and (min-width: 768px) { 
    width: 100px;
    left: calc(100% - 50px);
    top: calc(38% - 50px);
    
  }
}

















// .rd-hero {
//   height: 45.5svh;
//   padding: 0;
// }

// .rd-hero[bg] {
//   background-image: url('/images/hero/home.png');      
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: bottom center;
// }

// .rd-hero[route="index"] { padding-bottom: var(--s5); }

// .rd-hero__wrapper {
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
// }

// .rd-hero__headings {
//   --space: var(--step-0);
//   text-align: center;
//   display: flex;
//   align-items: center;
  
//   > *[class] {
//     width: fit-content;
//     padding: var(--s-2) var(--step-0);
//     color: var(--white-color);
//     position: relative;
//     z-index: 1;
//     background-blend-mode: multiply;
//     background-color: var(--primary-color);
//   }
// }

// .rd-hero__brow {
//   font-weight: 700;
//   text-transform: uppercase;
// }

// .rd-hero__title {
//   font-weight: 300;
//   font-size: 2.7rem;
//   line-height: 1.1;
// }
</style>
