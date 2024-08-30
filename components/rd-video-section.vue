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

  // This padding bottom matches the padding top of the .video-container. 
  // Made this way to make the bg gradient consistent
  --_vertical-padding: var(--space-l-xl);
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
  // width: 100%;  
  // margin-inline: auto;
  // box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  width: calc(100% - (var(--s0) * 2));
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-inline: var(--s0);
  margin-top: calc(var(--s1) * -1);
  border-radius: var(--base-border-radius);
  overflow: hidden;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.25), 0 4px 25px 0px rgba(0, 0, 0, 0.06), 0 8px 10px -5px rgba(0, 0, 0, 0.1);
}
</style>
