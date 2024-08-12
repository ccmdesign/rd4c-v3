<template>
  <div>
    <rd-top-bar />
    <header class="post-hero">
      <rd-content-grid>
        <h4 v-if="data.post.brow">{{ data.post.brow }}</h4>
        <h2>{{ data.post.heading }}</h2>
        <h3 v-if="data.post.tagline">{{ data.post.tagline }}</h3>
        <h5 v-if="data.post.date">{{ formatDate(data.post.date) }}</h5>
        <div class="collaborators" v-if="data.post.collaborators">
          <span v-for="i in data.post.collaborators">{{ i.id }}</span>
        </div>
      </rd-content-grid>
    </header>
    <rd-prose>
      <div v-html="data.post.main_content"></div>
    </rd-prose>
    <pre>{{ data.post }}</pre>
    <!-- <contentDoc :document="data.post.main_content"></contentDoc> -->
  </div>
</template>

<script setup>
    const route = useRoute()

    const postData = await queryContent('articles').where({
        slug: route.params.slug
    }).findOne();

    const data = reactive({
        post: postData,
    });

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Add ordinal suffix to day
    const day = date.getDate();
    let daySuffix;
    if (day > 3 && day < 21) {
        daySuffix = 'th';
    } else {
        switch (day % 10) {
            case 1: daySuffix = 'st'; break;
            case 2: daySuffix = 'nd'; break;
            case 3: daySuffix = 'rd'; break;
            default: daySuffix = 'th'; break;
        }
    }

    return formattedDate.replace(/\d+/, day + daySuffix);
}

// Example usage:
// const formattedDate = formatDate('2024-02-11');
// console.log(formattedDate); // Output: Feb 11th, 2024
</script>

<style lang="scss" scoped>
.post-hero {
  background-color: hsl(var(--rd-purple), 1);
  padding-block: var(--s2);
  display: flex;
  align-items: center;
  height: max(400px, 40svh);
  gap: var(--s0);
}

.post-hero :deep(*) {
  color: var(--white-color);
}

.post-hero h2 {
  font-size: 2.5rem;
  font-weight: 200;
}

.post-hero h3 {
  font-size: 2.5rem;
  font-weight: 200;
}
.post-hero h4 {
  font-size: 1.25rem;
  font-weight: 900;
  text-transform: uppercase;
}
.post-hero h5 {
  font-size: 1.25rem;
  font-weight: 200;
  margin-top: var(--s2);
}
</style>
