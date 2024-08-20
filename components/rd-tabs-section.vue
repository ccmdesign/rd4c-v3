<template>
  <article class="rd-tabs-section" :color="color">
    <rd-divider :color="color">
      <h2>
        <span v-for="(tab, index) in tabs" :key="index" @click="activeTab = tab" :isActive="activeTab === tab">{{ tab }}</span>
      </h2>
    </rd-divider>

    <div class="panels">
      <transition name="fade" v-for="(tab, index) in tabs" :key="index">
        <section v-show="activeTab === tab" :class="['panel', `panel-${index + 1}`]">
          <slot :name="'tab-' + (index + 1)"></slot>
        </section>
      </transition>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  color: {
    type: String,
    default: 'purple'
  }
});

const activeTab = ref(props.tabs[0]);
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

span {
  cursor: pointer;
  transition: all .3s;
}

span[isActive="false"] {
  opacity: .6;
  transform: scale(.7);
  transform-origin: bottom;
}

span[isActive="true"] { opacity: 1; }

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
