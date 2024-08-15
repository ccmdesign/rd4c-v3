<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>
<template>
  <div class="prose">
    <template v-if="error.statusCode === 404">
      <h1>{{ $t('errors.404.title') }}</h1>
      <p>{{ $t('errors.404.message') }}</p>
    </template>
    <p>
      <a @click="handleError">Home</a>
    </p>
  </div>
</template>