<template>
  <div class="footer-wrapper">
    <footer class="footer-section">
      <h3 class="logos-title footer-heading">{{ footerContent.partners_brow }}</h3>
      <div class="logos">
        <a class="logo-1" href="https://www.unicef.org/" target="_blank"><img
            src="/images/logos/unicef-logo-white.svg" alt="Unicef"></a>
        <a class="logo-2" href="http://www.thegovlab.org" target="_blank"><img
            src="/images/logos/govlab-logo-white.svg" alt="Govlab"></a>
      </div>

      <div class="after-footer">
        <a rel=license href=http://creativecommons.org/licenses/by-sa/4.0>
          <img alt='Creative Commons License' style='border-width:0'
            src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /> </a>
        <p>{{ $t('footer.under') }} <a rel=license href="http://creativecommons.org/licenses/by-sa/4.0/">{{
            $t('footer.license') }}</a></p>
        <p><a class="by-line" href="http://ccmdesign.ca" target="_blank"
            title="Website design and development by ccm.design">by
            ccm.design</a></p>
      </div>
    </footer>
  </div>

</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation';
const { menuItems } = useNavigation();

defineProps({
  footerContent: {
    type: Object
  }
})

</script>

<style lang="scss" scoped>
.footer-wrapper {
  --_bg: var(--base-color);
  
  background-color: var(--_bg);
}

.footer-section {
  --_color: var(--white-color);

  color: var(--_color);
  padding-inline: var(--space-s-xl);
  display: grid;
  gap: var(--space-m-l);
  
  // I might be able to make this simpler
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "logos-title logos-title"
    "logos logos"
    "content-title content-title"
    "content content"
    "by-line by-line";

  @media screen and (min-width: 768px) {
    // grid-template-columns: 1fr 2fr;
    // grid-template-rows: auto;
    // grid-template-areas:
    //   "logos-title content-title"
    //   "logos content"
    //   "logos content"
    //   "by-line by-line";
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.logos-title { grid-area: logos-title; }
.content-title { grid-area: content-title; }
.logos { grid-area: logos; }
.content { grid-area: content; }
.after-footer { grid-area: by-line; }

.footer-section {
  padding-top: var(--s2);

  .logos { 
    display: flex;
    gap: var(--s2);
    place-self: center; 
    padding-bottom: var(--s2);
  }
  
  @media screen and (min-width: 768px) {
    .logos {
      flex-direction: row;
    }
  }

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
}

.footer-heading {
  font-size: 120%;
  color: var(--color);
  font-weight: 600;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: hsla(var(--accent-hsl), 1);
  
}

.after-footer {
  // background-color: hsla(var(--black-hsl), .2);
  border-top: 1px solid hsla(var(--white-hsl), .1);
  font-size: 80%;
  padding: 1rem;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 3.5rem;
    p, a { text-align: center; }
    img { display: none;}
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--s-1);

  }

  p:has(.by-line) {
    margin-left: auto;
  }

  a {
    color: var(--tertiary-color);
  }
}

.by-line {
  color: hsl(var(--white-hsl), 0.5);

  a { color: white;}
}

.by-line {
  text-decoration: none;
  text-align: right;
}
</style>
