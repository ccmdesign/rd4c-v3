<template>
  <div class="content-grid">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content-grid {
  --padding-inline: 1rem;
  --content-max-width: 900px;
  --breakout-max-width: 1200px;

  --breakout-size: calc((var(--breakout-max-width) - var(--content-max-width)) / 2);

  display: grid;
  grid-template-columns:
    [full-width-start] minmax(var(--padding-inline), 1fr) [breakout-start] minmax(0, var(--breakout-size)) [content-start] min(100% - (var(--padding-inline) * 2),
      var(--content-max-width)) [content-end] minmax(0, var(--breakout-size)) [breakout-end] minmax(var(--padding-inline),
      1fr) [full-width-end];
}

.content-grid :deep(> :not(.breakout, .full-width)),
.full-width :deep(> :not(.breakout, .full-width)) {
  grid-column: content;
}

.content-grid :deep(>.breakout) {
  grid-column: breakout;
}

.content-grid :deep(>.full-width) {
  grid-column: full-width;
  display: grid;
  grid-template-columns: inherit;
}

:deep(img.full-width) {
  width: 100%;
  max-height: 45vh;
  object-fit: cover;
}
</style>
