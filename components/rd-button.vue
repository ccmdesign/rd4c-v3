<template>
  <base-button class="rd-button" :btntype="btntype">
    <nuxt-link v-if="btntype == 'nuxt-link'" :to="to">
      <slot></slot>
    </nuxt-link>
    <a v-else-if="btntype == 'a'" :href="href" target="_blank">
      <slot></slot>
    </a>

    <slot v-else></slot>
  </base-button>
</template>

<script setup>
const props = defineProps({
  btntype: {
    type: String,
    default: 'button'
  },
  to: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
});

const btntype = computed(() => {
  if (props.to) {
    return 'nuxt-link';
  } else if (props.href) {
    return 'a';
  } else {
    return props.btntype;
  }
});
</script>

<style lang="scss" scoped>
.rd-button {
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>

<!-- ToDo: Need to implement size="small" to button icons -->
<!-- ToDo: Need to ifx color for icons -->

<!-- <template>
  <component 
    class="button" 
    :is="el"
    :mobile="mobile"
    :unstyled="unstyled"
    :hidden="hidden"
    :visual="visual"
    :color="color"
    :size="size"
    :icon-before="iconBefore"
    :icon-after="iconAfter"
    :label="label"
    :value="value"
    :fullWidth="fullWidth"
  >
    <slot>{{label}}</slot>
  </component>
</template>

<script setup>
  import { toRefs } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: 'value'
    },
    hidden: {
      type: Boolean,
      default: false
    },
    unstyled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    visual: {
      type: String,
      default: 'secondary'
    },
    iconBefore: {
      type: String,
      default: null
    },
    iconAfter: {
      type: String,
      default: null
    },
    el: {
      type: String,
      default: 'nuxt-link'
    },
  });

  const { el, value, label, hidden, unstyled, mobile, size, color, visual, iconBefore, iconAfter, fullWidth } = toRefs(props)

</script>

<style>
/* 
  This file contains the structural rules for the button system. 
  Any visual configuration should be made on the button-visuals.css file.
  It is very unlikely that anyone will need to edits file for customization purposes. 
*/

.button {
  /* Structure */
  display: inline-block;
  zoom: 1;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  -webkit-user-drag: none;
  user-select: none;
  box-sizing: border-box;
  font-size: 100%;
  text-decoration: none;
  align-self: self-start;
  justify-self: flex-start;
  
  font-family: var(--button-font-family, sans-serif); /* Fallback to sans-serif */
  font-weight: var(--button-font-weight);
  letter-spacing: var(--button-letter-spacing);
}

.button:focus { outline: 0; }

/* Firefox: Get rid of the inner focus border */
.button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.button[disabled],
.button[disabled]:hover,
.button[disabled]:focus,
.button[disabled]:active {
  filter: alpha(opacity=40);
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
  pointer-events: none;
}

.button[hidden] { display: none; }

.button[unstyled] {
  background-color: transparent;
  border-color: transparent;
}

.button[fullWidth="true"],
.button[data-fullWidth="true"] {
  align-self: stretch;
  justify-self: stretch;
}



/* 
  This file contains the css rules for the button system. 
  Most of the visual configurations can be made through the variables. (Lines 13-21)
  Many of these configurations have fallbacks values. 
*/

.button {
  /* Required Values */
  --button-color-prop:        v-bind(color);
  --button-hsl:               var(--button-color-prop, --base-hsl);
  --button-text-hsl:          var(--button-hsl);
  --button-color:             hsla(var(--button-hsl), 1);
  --button-text-color:        hsla(var(--button-text-hsl), 1);
  --button-padding-block:     var(--base-padding-block);
  --button-padding-inline:    var(--base-padding-inline);

  /* Optional Values */
  --button-border-radius: var(--base-border-radius, 0);    /* Fallback to 0 */
  --button-border-color:  var(--button-color);             /* Fallback to 1px */
  --button-border-width:  var(--base-border-width, 2px);   /* Fallback to 1px */
  --button-border-style:  var(--base-border-style, solid); /* Fallback to solid */
  --button-font-weight:   var(--font-weight, 400);         /* Fallback to 400 */
  --button-font-size:     100%;
  --button-icon-color:    var(--button-text-color);
}

.button[data-color="base"],
.button[color="base"] { 
  --button-hsl: var(--base-hsl); 
  --button-text-color: var(--base-color); 
}

.button[data-color="primary"],
.button[color="primary"] { 
  --button-hsl: var(--primary-hsl); 
  --button-text-color: var(--primary-color); 
}

.button[data-color="secondary"],
.button[color="secondary"] { 
  --button-hsl: var(--secondary-hsl); 
  --button-text-color: var(--secondary-color); 
}

.button[data-color="tertiary"],
.button[color="tertiary"] { 
  --button-hsl: var(--tertiary-hsl); 
  --button-text-color: var(--tertiary-color); 
}

.button[data-color="accent"],
.button[color="accent"] { 
  --button-hsl: var(--accent-hsl);
  --button-text-color: var(--accent-color);
}

.button[data-color="white"], 
.button[color="white"] { 
  --button-hsl: var(--white-hsl);
  --button-text-color: var(--white-color);
}

.button[data-color="success"],
.button[color="success"] { 
  --button-hsl: var(--green-hsl); 
  --button-text-color: var(--green-color);
}

.button[data-color="cancel"],
.button[data-color="fail"],
.button[color="cancel"],
.button[color="fail"] { 
  --button-hsl: var(--red-hsl);
  --button-text-color: var(--red-color);
}

.button[data-color="warning"],
.button[color="warning"] { 
  --button-hsl: var(--yellow-hsl);
  --button-text-color: var(--yellow-color);
}

.button[data-size="s"],
.button[size="s"] {
  --button-padding-block: var(--s-2);
  --button-padding-inline: var(--s0);
  --button-font-size: 75%; 
}

.button[data-size="l"],
.button[size="l"] {
  --button-padding-block: var(--s0);
  --button-padding-inline: var(--s2);
  --button-font-size: 120%;
}

.button[data-size="xl"],
.button[size="xl"] {
  --button-padding-block: var(--s0);
  --button-padding-inline: var(--s2);
  --button-font-size: 150%;
}

.button[data-size="full-width"],
.button[size="full-width"] { width: 100%; }

.button {
  color: var(--button-text-color);
  background-color: transparent; /* This might be an issue */

  padding: var(--button-padding-block) var(--button-padding-inline);
  
  border-radius: var(--button-border-radius, 0);
  border-width: var(--button-border-width, 1px);
  border-style: var(--button-border-style, solid);
  border-color: var(--button-border-color);
  
  font-family: var(--button-font-family);
  font-weight: var(--button-font-weight, 400);
  font-size: var(--button-font-size, 100%);
}

.button:hover { background-image: linear-gradient(hsla(var(--button-hsl), 0.05), hsla(var(--button-hsl), 0.05)); }

.button:active {
  background-image: linear-gradient(hsla(var(--button-hsl), 0.15), hsla(var(--button-hsl), 0.15));
  border-color: hsla(var(--button-color), 1);
}
  
.button:focus { box-shadow: var(--focus-effect); }

.button[data-visual="primary"],
.button[visual="primary"] {
    color: white;
    border-width: var(--button-border-width, 0);
    border-style: var(--button-border-style, solid);
    border-color: hsla(var(--button-hsl), 1);
    background-color: hsla(var(--button-hsl), 1);
}

.button[data-visual="primary"]:hover,
.button[data-visual="primary"]:focus,
.button[visual="primary"]:hover,
.button[visual="primary"]:focus { background-image: linear-gradient(hsla(0,0%,0%, 0.15), hsla(0,0%,0%, 0.25)); }

.button[data-visual="secondary"],
.button[visual="secondary"] {
  background-color: transparent;
  color: var(--button-text-color);
  border-width: var(--button-border-width, 1px);
  border-style: var(--button-border-style, solid);
  border-color: hsla(var(--button-hsl), 1);
}

.button[data-visual="secondary"]:hover,
.button[data-visual="secondary"]:focus,
.button[visual="secondary"]:hover,
.button[visual="secondary"]:focus { background-image: linear-gradient(hsla(var(--button-hsl), 0.1), hsla(var(--button-hsl), 0.1)); }

.button[data-visual="unstyled"],
.button[visual="unstyled"] { 
  color: hsla(var(--button-hsl), 1); 
  border-width: var(--button-border-width, 0);
  border-style: var(--button-border-style, solid);
  border-color: transparent;
}

@media (max-width: 36em) {
  .button[data-mobile="wide"],
  .button[mobile="wide"] { width: 100%; }
}

.button[data-icon-before],
.button[data-icon-after], 
.button[icon-before],
.button[icon-after] {
  display: inline-flex;
  align-items: center;
  
}

.button[data-icon-before]:before,
.button[data-icon-after]:after,  
.button[icon-before]:before { content: attr(icon-before); }
.button[icon-after]:after  { content: attr(icon-after); }

.button[data-icon-before]:before,
.button[data-icon-after]:after,
.button[icon-before]:before,
.button[icon-after]:after {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  font-size: calc(var(--button-font-size) * 1.5);
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: var(--button-icon-color); 

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}

.button[data-icon-before]:before,
.button[icon-before]:before { margin-right: var(--s-1); }

.button[data-icon-after]:after,
.button[icon-after]:after   { margin-left: var(--s-1); }

.button[data-icon-before]:empty:before,
.button[icon-before]:empty:before { margin-right: 0; }

.button[data-icon-after]:empty:after,
.button[icon-after]:empty:after   { margin-left: 0; }

.button[data-icon-before]:empty,
.button[icon-before]:empty,
.button[data-icon-after]:empty,
.button[icon-after]:empty { padding: var(--button-padding-v) var(--button-padding-v); }

.button[data-visual="primary"][data-icon-before]:before,
.button[visual="primary"][icon-before]:before,
.button[data-visual="primary"][data-icon-after]:after,
.button[visual="primary"][icon-after]:after { 
  --button-icon-color: var(--white-color);   
}

</style> -->
