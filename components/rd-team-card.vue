<template>
  <div class="rd-team-card">
    <img :src="content.image" :alt="content.name">
    <h4>{{content.name}}</h4>
    <h5>{{ content.organization }}</h5>
    <div><base-button icon-after="arrow_forward" visual="primary" color="primary">Bio</base-button></div><!-- @ToDo: Translate -->
    <pre>{{ content }}</pre>
  
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      image: 'https://via.placeholder.com/250', // Need a default image
      name: 'John Doe',
      title: 'Example Title',
      organization: 'Example Organization',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies. Nullam nec purus nec libero ultricies ultricies.',
      bioShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  }
})

</script>

<style lang="scss" scoped>
// Need a modal window with the full description
.rd-team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--s1);
  gap: var(--s-1);
}

.rd-team-card img {
  border-radius: 50%;
  height: 250px;
  width: 250px;
  object-fit: cover;
}
</style>
