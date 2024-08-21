<template>
  <section class="video-section" :video="video">
    <div class="video-container">
      <center-l>
        <div class="video-wrapper"><!--This is here so the .frame work inside a center-l-->
          <div class="frame">
            <iframe :src="video" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </center-l>
      </div>
      <center-l>
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
  --_vertical-padding: var(--space-l-xl);

  // This padding bottom matches the padding top of the .video-container. 
  // Made this way to make the bg gradient consistent
  padding-bottom: var(--_vertical-padding); 
}

.content-wrapper {
  margin-top: var(--space-m-l);
  color: var(--base-color);
  text-align: center;
  font-size: var(--step-0);
  text-wrap: balance;  
}

.video-container {
  padding-top: var(--_vertical-padding);
  background: linear-gradient(180deg, var(--_color-1) 0%, var(--_color-1) 60%, var(--_color-2) 60%, var(--_color-2) 100%); 
}

.video-wrapper {
  width: 100%;  
  margin-inline: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}
</style>
