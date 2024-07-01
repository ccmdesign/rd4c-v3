<template>
  <div class="rd-principle-card" :principle-n="principleN"> 
    <stack-l>
      <h3>{{ content.name }}</h3>
      <p>{{ content.tagline }}</p>
    </stack-l>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true
  },
  n: {
    type: Number,
    required: true
  }
});

const principleN = computed(() => {
  return props.n + 1;
});


</script>
<style lang="scss" scoped>
.rd-principle-card {
  border-radius: var(--base-border-radius);
  background-image: url('/images/decor/umbrella2.svg');
  background-position: 120px 120px;
  background-size: 80%;
  background-repeat: no-repeat;
  padding: var(--s1);
  position: relative;

  * { color: white !important;}

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
  }
}

.rd-principle-card:before {
  content: attr(principle-n);
  color: white;
  opacity: .2;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 8rem;
  line-height: 1;
  z-index: 10;
  width: 100px;
  height: 100px;
  text-align: center;
  font-weight: 900;

  // width: 100%;
  // height: 100%;
  // background: linear-gradient(180deg, hsla(var(--primary-hsl), 0) 0%, hsla(var(--primary-hsl), .2) 100%);
  // border-radius: var(--base-border-radius);
}



.rd-principle-card[color="base"],
.rd-principle-card:nth-child(1),
.rd-principle-card:nth-child(6) { background-color: var(--base-color); }
.rd-principle-card[color="primary"],
.rd-principle-card:nth-child(2),
.rd-principle-card:nth-child(7) { background-color: var(--primary-color); }
.rd-principle-card[color="secondary"],
.rd-principle-card:nth-child(3),
.rd-principle-card:nth-child(8) { background-color: var(--secondary-color); }
.rd-principle-card[color="tertiary"],
.rd-principle-card:nth-child(4),
.rd-principle-card:nth-child(9) { background-color: var(--tertiary-color); }
.rd-principle-card[color="quaternary"],
.rd-principle-card:nth-child(5),
.rd-principle-card:nth-child(10) { background-color: var(--quaternary-color); }
</style>
