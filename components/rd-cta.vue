<template>
  <div class="cta" data-visibility="desktop-only">
    <center-l class="cta__wrapper">
      <h4 class="cta__text" data-caps="cap">Join the RD4C Conversation</h4>
      <a href="http://eepurl.com/gKa2S1" target="_blank" class="cta__call | button" data-color="white">Join</a>
    </center-l>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cta {
  background-color: var(--rd4c-green-color);
  padding: var(--s1) 0;
}

.cta__wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: var(--s2);
}

.cta__text {
  color: #FFF;
  font-weight: 700;

  @media (max-width: 36em) {
    display: none;
  }
}
</style>
