<template>
  <rd-base-section class="footer">
    <stack-l>
      <section>
        <ul class="menu">
          <li v-for="item in menuItems" :key="item.name">
            <nuxt-link :to="item.link" :target="item.target">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </section>
      <section>
        <stack-l>
          <h3>A partnership between</h3>
          <div class="logos">
            <img src="/images/logos/unicef.png" alt="">
            <img src="/images/logos/govlab.png" alt="">
          </div>
        </stack-l>
      </section>
      <section class="newsletter-signup">
        <stack-l>
          <h3>Newsletter</h3>
          <p>Subscribe our newsletter to get our latest update & news</p>
          <control-group><input type="email" /><base-button>Submit</base-button></control-group>
        </stack-l>
      </section>
    </stack-l>
  </rd-base-section>
</template>

<script setup>
import { useNavigation } from '~/pages/composables/useNavigation';
const { menuItems } = useNavigation();

</script>

<style lang="scss" scoped>
.footer {
  padding: var(--s0) var(--s0) var(--s4);
  background-color: var(--base-color);

  h3 {
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    color: hsla(var(--white-hsl), .4);
  }

  p,
  button {
    color: white;
  }
}

.logos {
  display: flex;
  align-items: center;

  img {
    width: 150px;
    margin: var(--s-1);
  }
}

.newsletter-signup {
  --space: var(--s1);
  p { text-align: center;}
  input { 
    border: 2px solid var(--white-color); 
    width: 100%;
  }

}



.menu {
  @media screen and (max-width: 768px) { display: none; }
}
</style>
