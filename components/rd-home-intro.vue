<template>
  <section id="intro" class="home-intro">
    <center-l>
        <div class="video-wrapper">
          <div class="frame">
            <iframe src="https://www.youtube.com/embed/e0JxdJu4mK8?si=CY7g9bN1rYff_QDM" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
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
    </center-l>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-intro {
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
