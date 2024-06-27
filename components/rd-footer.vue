<template>
  <rd-base-section class="footer">
    <h2>Footer</h2>
    <ul class="menu">
      <li v-for="item in menuItems" :key="item.name">
        <nuxt-link :to="item.link" :target="item.target">{{ item.name }}</nuxt-link>
      </li>
    </ul>

    <div>
      <h3>Newsletter</h3>
      <p>Subscribe our newsletter to get our latest update & news</p>
      <input type="text"><base-button>Submit</base-button>
    </div>

    <div>
      <img src="/images/logos/unicef.png" alt="">
      <img src="/images/logos/govlab.png" alt="">
    </div>
  </rd-base-section>
</template>

<script setup>
import { useNavigation } from '~/pages/composables/useNavigation';
const { menuItems } = useNavigation();

</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--base-color);
  * { color: white; }
}
</style>
