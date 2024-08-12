<template>
  <div class="footer-wrapper">
    <footer class="footer-section">
      <h3 class="logos-title footer-heading">{{ $t('footer.partners') }}</h3>
      <div class="logos">
        <a class="logo-1" href="https://www.unicef.org/" target="_blank"><img
            src="/images/logos/unicef-logo-white.svg" alt="Unicef"></a>
        <a class="logo-2" href="http://www.thegovlab.org" target="_blank"><img
            src="/images/logos/govlab-logo-white.svg" alt="Govlab"></a>
      </div>

      <h3 class="content-title footer-heading">{{ $t('footer.about') }}</h3>
      <div class="content" data-column="two-columns">
        <p>{{ $t('footer.p1') }}</p>
        <p>{{ $t('footer.p2') }}</p>
        <p>{{ $t('footer.p3') }}</p>
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

</script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: var(--bg);
  --bg: var(--base-color);
}

.footer-section {
  max-width: 1680px;
  margin-inline: auto;
  color: var(--color);
  
  --color: var(--white-color);
  padding-inline: var(--s0);
  display: grid;
  gap: var(--s0);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "logos-title logos-title"
    "logos logos"
    "content-title content-title"
    "content content"
    "by-line by-line";

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: var(--s1);
    grid-template-rows: auto;
    grid-template-areas:
      "logos-title content-title"
      "logos content"
      "logos content"
      "by-line by-line";
  }
}

.logos-title { grid-area: logos-title; }
.content-title { grid-area: content-title; }
.logos { grid-area: logos; }
.content { grid-area: content; }
.after-footer { grid-area: by-line; }

.content {
  @media screen and (min-width: 1000px) { 
    columns: 2; 
    column-gap: var(--s2);
  }
  *+* { margin-top: var(--s-1); }
}

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
      flex-direction: column;
      place-self: start;
      max-width: 200px;
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
}

.by-line {
  color: hsl(var(--white-hsl), 0.5);
}

.by-line {
  text-decoration: none;
  text-align: right;
}
</style>
