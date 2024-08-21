<template>
  <div class="rd-divider" :color="color" :content="content">
    <slot>
      <h2>{{ content }}</h2>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  }
});

</script>

<style lang="scss" scoped>
.rd-divider {
  // Component variables
  --_section-bg-hsl: 0, 0%, 0%;
  --_section-color-hsl: 255, 100%, 100%;
}

.rd-divider {
  background-color: hsla(var(--_section-hsl), 1);
  padding-block: var(--space-m-l);
  text-align: center;

  h2 { 
    color: hsla(var(--_section-color-hsl), 1);
  }
}

.rd-divider[color="primary"] {
  --_section-hsl: var(--primary-hsl);
  h3 { --_section-color-hsl: var(--white-hsl); }
}

.rd-divider[color="blue"] {
  --_section-hsl: var(--rd-blue);
  h3 { --_section-color-hsl: var(--white-hsl); }
}

.rd-divider[color="green"] {
  --_section-hsl: var(--rd-green);
  h3 { --_section-color-hsl: var(--white-hsl); }
}

.rd-divider[color="yellow"] {
  --_section-hsl: var(--rd-yellow);
  h3 { --_section-color-hsl: var(--white-hsl); }
}

.rd-divider[color="orange"] {
  --_section-hsl: var(--rd-orange);
  h3 { --_section-color-hsl: var(--white-hsl); }
}

.rd-divider[color="purple"] {
  --_section-hsl: var(--rd-purple);
  h3 { --_section-color-hsl: var(--white-hsl); }
}

.rd-divider[color="red"] {
  --_section-hsl: var(--rd-red);
  h3 { --_section-color-hsl: var(--white-hsl); }
}
.rd-divider[color="teal"] {
  --_section-hsl: var(--rd-teal);
  h3 { --_section-color-hsl: var(--white-hsl); }
}


</style>
