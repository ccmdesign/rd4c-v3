<script setup>
import { ref } from 'vue'

const showNotice = ref(true)

const displayNotice = () => {
  showNotice.value = !showNotice.value
}

const openEmail = () => {
  window.location.href = 'mailto:datastewards@thegovlab.org?subject=Translation Suggestion'
}
</script>

<template>
  <div v-if="showNotice" class="translation-notice">
      <p>🌐 {{ $t('translationNotice.text') }}</p>
      <div class="notice-actions">
        <button @click="openEmail" class="button" visual="secondary" color="white" size="s">
          {{ $t('translationNotice.btnLabel') }}
        </button>
        <button @click="displayNotice" class="close-btn">
          ✕
        </button>
    </div>
  </div>
  <div v-else class="translation-notice-closed" @click="displayNotice">
    <span>🌐</span>
  </div>
</template>

<style scoped>
.translation-notice {
  position: relative;
  grid-column: span 2;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2xs);
  z-index: 5;
  gap: var(--space-xs);
  p {
    font-size: 0.875em;
    color: var(--white-color);
  }
  @media screen and (max-width: 768px) { 
    padding-top: var(--space-m);
    flex-flow: column nowrap;
  }
}

.translation-notice-closed {
  display: none;
}

.notice-content {
  display: flex;
  flex-direction: column;
}

.notice-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-3xs);
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--white-color);
  @media screen and (max-width: 768px) { 
    position: absolute;
    top: 0;
    right: 0;
  }
}

.close-btn:hover {
  color: hsla(var(--accent-hsl), 1);
}
</style>