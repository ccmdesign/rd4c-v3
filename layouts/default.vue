<template>
  <Html :dir="htmlAttrs.dir">
    <div class="page-wrapper">
      <main>
        <slot />
      </main>
      <footer>
        <rd-signup-section />
        <rd-footer :footer-content="footerData"/>
        <!-- <div class="by-ccm">
          <span>{{ currentYear }} ® Copyright {{ projectConfig.client }}</span>
          <a href="https://www.ccmdesign.ca" target="_blank">by ccm.design</a>
        </div> -->
      </footer>
    </div>
  </Html>
</template>

<script setup>
import { ref, onMounted, onUpdated, watch } from 'vue'
import PROJECTCONFIG from '~/project_config.json'

const { locale, t } = useI18n()

const pageContent = await queryContent('pages').where({"title": 'Footer'}).findOne();
const { block_footer } = await useTranslator(pageContent, locale.value);
const footerData = ref(block_footer)


const currentYear = ref('')
const projectConfig = PROJECTCONFIG;

watch(locale, async () => {
  const pageContent = await queryContent('pages').where({"title": 'Footer'}).findOne();
  const { block_footer } = await useTranslator(pageContent, locale.value);
  footerData.value = { ...block_footer }
})

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})

const head = useLocaleHead({
  addDirAttribute: true,
})
const htmlAttrs = computed(() => head.value.htmlAttrs)

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
