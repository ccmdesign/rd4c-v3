<template>
  <section class="video-section" :video="video">
    <center-l>
        <div class="video-wrapper">
          <div class="frame">
            <iframe :src="video" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <stack-l class="content-wrapper">
          <slot></slot>
        </stack-l>
    </center-l>
  </section>
</template>

<script setup>
defineProps({
  video: {
    type: String,
    default: ''
  }
});

</script>

<style lang="scss" scoped>
.video-section {
  --_color-1: var(--tertiary-color);
  --_color-2: var(--white-color);
  background: linear-gradient(180deg, var(--_color-1) 0%, var(--_color-1) 35%, var(--_color-2) 35%, var(--_color-2) 100%); 
  padding: var(--s4) 0;
}

.content-wrapper {
  margin-top: var(--s2);
  color: var(--base-color);
  text-align: center;
  font-size: 1.25rem;
  text-wrap: balance;
}

.video-wrapper {
  width: 100%;  
  margin-inline: auto;
  margin-bottom: var(--s2);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  background-color: var(--base-color);
}
</style>
