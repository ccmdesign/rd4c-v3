<template>
  <article class="rd-tabs-section" :color="color">
    <rd-divider :color="color">
      <h2 class="tab-triggers">
        <slot name="tabs" />
      </h2>
    </rd-divider>

    <div class="panels">
      <transition name="fade" v-for="(tab, index) in tabElements" :key="index">
        <section v-show="activeTab === index" :class="['panel', `panel-${index + 1}`]">
          <slot :name="'tab-' + (index + 1)"></slot>
        </section>
      </transition>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useStore } from '../store/videoTabsStore';
const route = useRoute();
const router = useRouter();
const routeTab = route.query && route.query.tab ? route.query.tab : '';

const props = defineProps({
  color: {
    type: String,
    default: 'purple'
  },
  tabsIDs: {
    type: Array,
    default: []
  },
});

const store = useStore();
const activeTab = ref(store.tab);
const tabElements = ref([]);

const setActiveLocalTab = (index) => {
  activeTab.value = index;
  tabElements.value.forEach((t, i) => {
    t.setAttribute('is-active', i === activeTab.value);
  });
  router.replace({ path: route.path, query: { tab: props.tabsIDs[index] } });
}

onMounted(() => {
  tabElements.value = Array.from(document.querySelectorAll('.tab-triggers span'));
  tabElements.value.forEach((tab, index) => {
    tab.setAttribute('is-active', index === activeTab.value);
    tab.addEventListener('click', () => {
      setActiveLocalTab(index)
    });
  });
  routeTab?setActiveLocalTab(props.tabsIDs.indexOf(routeTab)):setActiveLocalTab(0);
});

onUnmounted(() => {
  store.setActiveTab(0);
});

</script>

<style lang="scss" scoped>
.rd-tabs-section {

}

h2 {
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: var(--s2);
}

:deep(span) {
  cursor: pointer;
  transition: all .3s;
}

:deep(span[is-active="false"]) {
  opacity: .6;
  transform: scale(.7);
  transform-origin: bottom;
}

:deep(span[is-active="true"]) { opacity: 1; }

.panels {
  position: relative;
  // height: 800px;
}

.panel {
  // position: absolute;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
