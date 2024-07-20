<template>
  <rd-base-section id="intro" class="home-intro">
    <div class="video-wrapper">
      <div class="frame">
        <iframe src="https://www.youtube.com/embed/e0JxdJu4mK8?si=CY7g9bN1rYff_QDM" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
      <stack-l class="content-wrapper">
        <slot></slot>
      </stack-l>
    </div>
  </rd-base-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-intro {
  // background: var(--rd4c-green-color); 
  overflow: visible;
  z-index: 10;
}

.content-wrapper {
  margin-top: var(--s2);
  

  h2, p {
    color: var(--white-color);
  }
}

.video-wrapper {
  max-width: 1200px;
  width: 100%;  
  margin-inline: auto;
  // margin-top: -200px;
  margin-bottom: var(--s2);
}
</style>
