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
    <div class="notice-content">
      <p>🌐 Automated Translations for this language.</p>
      <p>Please, reach out if you'd like to suggest a change.</p>
      <div class="notice-actions">
        <button @click="openEmail" class="button" visual="primary" color="primary" size="s">
          Suggest improvements
        </button>
        <button @click="displayNotice" class="close-btn">
          ✕
        </button>
      </div>
    </div>
  </div>
  <div v-else class="translation-notice-closed" @click="displayNotice">
    <span>🌐</span>
  </div>
</template>

<style scoped>
.translation-notice {
  position: fixed;
  top: auto;
  right: 20px;
  background: linear-gradient(180deg, var(--primary-color) 0%, var(--primary-color) 50%, var(--white-color) 80%, var(--white-color) 100%); 
  border: 1px solid hsla(var(--accent-hsl), 1);
  border-radius: 8px;
  padding: 10px;
  z-index: 5;
  & :nth-child(1) {
    color: var(--white-color);
    text-align: center;
  }
}

.translation-notice-closed {
  position: fixed;
  top: auto;
  right: 1px;
  background: var(--primary-color); 
  border: 1px solid hsla(var(--accent-hsl), 1);
  border-radius: 8px;
  padding: 10px;
  z-index: 5;
  cursor: pointer;
}

.notice-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.notice-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--primary-color);
}

.close-btn:hover {
  color: hsla(var(--accent-hsl), 1);
}
</style>