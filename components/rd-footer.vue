<template>
  <footer class="footer | padding-top:s4" data-color="base">
    <center-l class="footer__columns" size="wide">
      <stack-l class="footer__column" data-size="min">
        <h3 class="footer__heading" data-color="accent" data-cap="cap">Partners</h3>
        <a href="https://www.unicef.org/" target="_blank"><img src="/images/unicef_logo.svg" alt="Unicef"></a>
        <a href="http://www.thegovlab.org" target="_blank"><img src="/images/govlab-logo-white.svg" alt="Govlab"></a>
      </stack-l>
      <stack-l class="footer__column | stack" data-size="wide">
        <h3 class="footer__heading" data-color="accent" data-cap="cap">About the project</h3>
        <div data-column="two-columns">
          <p>The RD4C initiative is a joint endeavor between UNICEF and The GovLab at New York University to highlight
            and support best practice in our work; identify challenges and develop practical tools to assist
            practitioners in evaluating and addressing them; and encourage a broader discussion on actionable
            principles, insights, and approaches for responsible data management.</p>
          <p>The work is intended to address practical considerations across the data lifecycle, including routine data
            collection and one-off data collections; and compliments work on related topics being addressed by the
            development community such as guidance on specific data systems and technologies, technical standardization,
            and digital engagement strategies.</p>
          <p>Additional tools and materials are coming soon and will be posted on this website as they become available.
            Join the conversation to receive regular updates.</p>
        </div>
      </stack-l>
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
import { useNavigation } from '~/pages/composables/useNavigation';
const { menuItems } = useNavigation();

</script>

<style lang="scss" scoped>
.after-footer {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 35.98rem) {
  .after-footer {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}

.after-footer {
  --by-line-bg: hsla(var(--black-hsl), .2);
  padding: var(--s1);
  background-color: var(--by-line-bg);
  font-size: 80%;
}

@media screen and (max-width: 35.98rem) {
  .after-footer {
    padding-bottom: var(--s3);
  }
}

.after-footer a {
  color: hsl(var(--white-hsl), 0.5);
}

@media screen and (max-width: 35.98rem) {
  .after-footer>*+* {
    margin-top: var(--s-1);
  }
}

@media screen and (min-width: 35.98rem) {
  .after-footer>*+* {
    margin-left: var(--s0);
  }
}

.by-line {
  text-decoration: none;
  min-width: 100px;
  text-align: right;
}

@media screen and (min-width: 35.98rem) {
  .by-line {
    margin-left: auto;
  }
}

.footer {
  --measure: 60rem;
  --col-min: 150px;
}

.footer {
  background-color: var(--bg);
  color: var(--color);
}

.footer__columns {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 35.98rem) {
  .footer__columns {
    align-items: center;
  }
}

@media screen and (min-width: 35.98rem) {
  .footer__columns {
    flex-direction: row;
  }
}

@media screen and (max-width: 35.98rem) {
  .footer__column+.footer__column {
    margin-top: var(--s1);
  }
}

@media screen and (min-width: 35.98rem) {
  .footer__column+.footer__column {
    margin-left: var(--s2);
  }
}

.footer__column {
  flex-grow: 2;
  width: fit-content;
}

.footer__column[data-size=min] {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: var(--col-min);
  max-width: var(--col-min);
}

.footer__column[data-size=narrow] {
  flex-grow: 1;
}

.footer__column[data-size=wide] {
  flex-grow: 3;
}

.footer__heading {
  font-size: 120%;
  color: var(--color);
  opacity: var(--opacity, 0.5);
  font-weight: 600;
  letter-spacing: 0.2px;
}

.footer[data-color=base] {
  --bg: var(--base-color);
  --color: var(--white-color);
}

.footer__heading {

  &[data-cap="cap"] { text-transform: uppercase; }


  &[data-color="accent"] {
    color: hsla(var(--accent-hsl), 1);
    opacity: 1;
  }
}

.footer p { font-weight: 300; }
.footer p + p { margin-top: var(--s-1); }

.footer div[data-column="two-columns"] {
  column-count: 2;
  column-gap: var(--s2);
}


// .rd4c-box {
//   display: flex;
//   padding-top: var(--s2);
//   background-color: #fbfbfb;

//   >* {
//     padding: 2px 30px 25px;
//     color: #676A73;
//     text-transform: uppercase;
//     font-size: 110%;
//     transform: translateY(6px);
//     width: auto;
//     margin: 0 auto;
//   }

//   >*:after {
//     content: '';
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     height: 12px;
//     background: linear-gradient(to right, var(--base-red) 0%, var(--base-red) 25%, var(--base-green) 25%, var(--base-green) 50%, var(--base-yellow) 50%, var(--base-yellow) 75%, var(--base-blue) 75%, var(--base-blue) 100%)
//   }
// }
</style>
