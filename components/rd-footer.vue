<template>
  <footer class="footer | padding-top:s4" data-color="base">
    <center-l size="wrapper">
      <div class="footer__columns | padding-bottom:s2">
        <stack-l class="footer__column" data-size="min">
          <h3 class="footer__heading" data-color="accent" data-cap="cap">{{ $t('footer.partners') }}</h3>
          <a href="https://www.unicef.org/" target="_blank"><img src="/images/unicef_logo.svg" alt="Unicef"></a>
          <a href="http://www.thegovlab.org" target="_blank"><img src="/images/govlab-logo-white.svg" alt="Govlab"></a>
        </stack-l>
        <stack-l class="footer__column | stack" data-size="wide">
          <h3 class="footer__heading" data-color="accent" data-cap="cap">{{ $t('footer.about') }}</h3>
          <div data-column="two-columns">
            <p>{{ $t('footer.p1') }}</p>
            <p>{{ $t('footer.p2') }}</p>
            <p>{{ $t('footer.p3') }}</p>
          </div>
        </stack-l>
      </div>
    </center-l>

    <div class="after-footer | margin-top:s2">
      <a rel=license href=http://creativecommons.org/licenses/by-sa/4.0><img alt='Creative Commons License'
          style='border-width:0' src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /> </a>
      <p>This work is licensed under a <a rel=license href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
          Commons Attribution-ShareAlike 4.0 International License</a></p>
      <a class="by-line" href="http://ccmdesign.ca" target="_blank"
        title="Website design and development by ccm.design">by ccm.design</a>
    </div>
  </footer>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation';
const { menuItems } = useNavigation();

</script>

<style lang="scss" scoped>
.footer {
  --measure: 60rem;
  --col-min: 150px;
  background-color: var(--bg);
  color: var(--color);
  --bg: var(--base-color);
  --color: var(--white-color);
}

.footer__columns {
  display: flex;
  flex-direction: column;
  // align-items: center;

  @media screen and (min-width: 35.98rem) {
    flex-direction: row;
  }
}

.footer__column {
  flex-grow: 2;
  width: fit-content;

  &[data-size=min] {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: var(--col-min);
    max-width: var(--col-min);
  }

  &[data-size=narrow] {
    flex-grow: 1;
  }

  &[data-size=wide] {
    flex-grow: 3;
  }

  @media screen and (max-width: 35.98rem) {
    & + & {
      margin-top: var(--s1);
    }
  }

  @media screen and (min-width: 35.98rem) {
    & + & {
      margin-left: var(--s2);
    }
  }
}

.footer__heading {
  font-size: 120%;
  color: var(--color);
  opacity: var(--opacity, 0.5);
  font-weight: 600;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  &[data-cap="cap"] {
    text-transform: uppercase;
  }

  &[data-color="accent"] {
    color: hsla(var(--accent-hsl), 1);
    opacity: 1;
  }
}

.footer p + p {
  margin-top: var(--s-1);
}

.footer [data-column="two-columns"] {
  column-count: 2;
  column-gap: var(--s2);
}

.after-footer {
  display: flex;
  align-items: center;
  padding: var(--s1);
  background-color: hsla(var(--black-hsl), .2);
  font-size: 80%;

  @media screen and (max-width: 35.98rem) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-bottom: var(--s3);

    & > * + * {
      margin-top: var(--s-1);
    }
  }

  @media screen and (min-width: 35.98rem) {
    & > * + * {
      margin-left: var(--s0);
    }

    .by-line {
      margin-left: auto;
    }
  }
}

.after-footer a {
  color: hsl(var(--white-hsl), 0.5);
}

.by-line {
  text-decoration: none;
  min-width: 100px;
  text-align: right;
}
</style>
