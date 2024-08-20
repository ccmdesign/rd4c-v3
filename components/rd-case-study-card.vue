<template>
  <div class="rd-case-study-card" :is-active="isActive" @click="isActive = !isActive">
    <div class="content stack">
      <h4 v-if="content.brow">{{ content.brow }}</h4>
      <!-- <h4 v-else>{{ content.publication_type }}</h4> -->
      <h3>{{ isActive.value }}{{ content.heading }}</h3>
      <h5>{{ content.tagline }}</h5>
      <p v-if="isActive == false" v-html="cropContent(content.description)"></p>
      <p v-else v-html="content.description"></p>
      <p>
        <a class="button" :href="content.url" target="_blank" rel="noopener noreferrer" data-color="accent">Open
          Document</a>
      </p>
      <div>
        <cluster-l>
          <span v-for="i in principles">{{ i }}</span>
        </cluster-l>
      </div>
    </div>
    <img :src="`https://cms.thegovlab.com/assets/${content.image.id}`" alt="">
    <!-- <pre>{{ content }}</pre> -->
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
});

const isActive = ref(false);

function cropContent(content) {
  if (typeof content !== 'string') {
    return content;
  }
  return content.length > 600 ? content.substring(0, 600) + '...' : content;
}


</script>

<style lang="scss" scoped>
.rd-case-study-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--s1);
  transition: all 0.5s;
  height: calc(auto);
}
.rd-case-study-card {
  background-color: var(--white-color);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  border-radius: var(--base-border-radius);
}

.content {
  padding: var(--s2);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 var(--base-border-radius) var(--base-border-radius) 0;
}
</style>
