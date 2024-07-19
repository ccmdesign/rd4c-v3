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
        <h2>Welcome to Responsible Data for Children</h2>
        <p>Responsible Data for Children is a collaboration between UNICEF and The Governance Laboratory at New York
          University to promote the well-being and interests of children in our digital age.</p>
        <p>We provide a framework for assessing risks and opportunities for advancing children’s rights across the data
          lifecycle. We are grounded in a set of principles for responsible data handling. Our support and guidance
          comes
          in a few different ways.</p>
      </stack-l>
    </div>
  </rd-base-section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-intro {
  background: var(--rd4c-green-color); 
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
