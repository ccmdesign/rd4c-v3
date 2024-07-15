<template>
  <li class="colored-card" :data-color="content.color">
    <p v-if="content.brow" class="colored-card__subject">{{ content.brow | truncate(30) }}</p>

    <a :href="`${content.url}/articles/${content.brow ? `${content.brow | slugify}-${content.heading | slugify}` : content.heading | slugify}/index.html`"
      class="colored-card__title" :aria-describedby="content.heading | slug">{{ content.heading }}</a>
    <p class="colored-card__text" v-html="content.text | striptags(true)"></p>
    <a :href="`${content.url}/articles/${content.brow ? `${content.brow | slugify}-${content.heading | slugify}` : content.heading | slugify}/index.html`"
      class="colored-card__call colored-button" :data-color="content.color">Read more</a>
  </li>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
    default: () => ({
      brow: '',
      heading: '',
      text: '',
      color: '',
      url: ''
    })
  }
});
</script>

<style lang="scss" scoped>
/****COLORED CARDS*******/
// It might make sense to make this more abstract, or even just adapt the cards we already have in the DS

.colored-card {
  position: relative;
  border-top: 6px solid #000;
  padding: 30px 32px 92px;
  box-shadow: 2px 2px 4px 0px hsla(39, 48, 13, 0.18);

  &[data-color="purple"] {
    border-color: var(--base-purple);

    .colored-card__subject {
      color: var(--base-purple);
    }
  }

  &[data-color="red"] {
    border-color: var(--base-red);

    .colored-card__subject {
      color: var(--base-red);
    }
  }

  &[data-color="yellow"] {
    border-color: var(--base-yellow);

    .colored-card__subject {
      color: var(--text-yellow);
    }
  }

  &[data-color="green"] {
    border-color: var(--base-green);

    .colored-card__subject {
      color: var(--text-green);
    }
  }

  &[data-color="blue"] {
    border-color: var(--base-blue);

    .colored-card__subject {
      color: var(--text-blue);
    }
  }

  &[data-color="orange"] {
    border-color: var(--base-orange);

    .colored-card__subject {
      color: var(--text-orange);
    }
  }
}

.colored-card--large {
  border-top: none;
  border-left: 6px solid #000;
  padding-top: 418px;

  .colored-card__call {
    right: 32px;
    left: auto;
  }
}

.colored-card__image {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  background-size: cover;
  background-position: center;
}

.colored-card__subject {
  font-size: 0.75em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 16px;
}

.colored-card__title {
  font-size: 1.125em;
  font-weight: 400;
  margin-bottom: 16px;
  display: block;
  color: #000;
  text-decoration: none;
}

.colored-card__text {
  color: hsl(var(--secondary-hsl));
  font-size: 0.875em;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.colored-card__call {
  position: absolute;
  bottom: 30px;
  left: 32px;
}

.colored-button {
  height: 40px;
  min-width: 160px;
  text-align: center;
  line-height: 40px;
  text-transform: uppercase;
  padding: 0 24px;
  border: 2px solid #000;
  font-size: 1em;
  font-weight: 700;
  display: inline-block;
  text-decoration: none;
  transition: background-color 0.2s ease-out;
  transition: color 0.2s ease-out;

  &.colored-button--reverse {
    &[data-color="yellow"] {
      background-color: var(--base-yellow);
      color: #FFF;

      &:hover,
      &:active,
      &:focus {
        border-color: var(--base-yellow);
        color: var(--text-yellow);
        background: none;
      }
    }
  }

  &[data-color="orange"] {
    color: var(--text-orange);
    border-color: var(--base-orange);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--base-orange);
      color: #FFF;
    }
  }

  &[data-color="purple"] {
    color: var(--base-purple);
    border-color: var(--base-purple);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--base-purple);
      color: #FFF;
    }
  }

  &[data-color="red"] {
    color: var(--base-red);
    border-color: var(--base-red);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--base-red);
      color: #FFF;
    }
  }

  &[data-color="yellow"] {
    color: var(--text-yellow);
    border-color: var(--base-yellow);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--base-yellow);
      color: #FFF;
    }
  }

  &[data-color="dark-yellow"] {
    color: var(--text-dark-yellow);
    border-color: var(--base-yellow);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--base-yellow);
      color: #FFF;
    }
  }

  &[data-color="green"] {
    color: var(--text-green);
    border-color: var(--base-green);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--base-green);
      color: #FFF;
    }
  }

  &[data-color="blue"] {
    color: var(--text-blue);
    border-color: var(--base-blue);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--base-blue);
      color: #FFF;
    }
  }
}
</style>
