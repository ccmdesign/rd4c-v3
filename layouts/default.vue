<template>
  <div class="page-wrapper">
    <main>
      <slot />
    </main>
    <footer>
      <rd-footer />
      <div class="by-ccm">
        <span>{{ currentYear }} ® Copyright {{ projectConfig.client }}</span>
        <a href="https://www.ccmdesign.ca" target="_blank">by ccm.design</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PROJECTCONFIG from '~/project_config.json'


const currentYear = ref('')
const projectConfig = PROJECTCONFIG;

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
  position: relative;
}

.by-ccm {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 0.75rem;
  color: hsla(var(--base-hsl), 0.5);
  padding: var(--s0) var(--s1);
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  letter-spacing: .3px;
}

.by-ccm a { color: hsla(var(--base-hsl), 0.5); }

</style>
