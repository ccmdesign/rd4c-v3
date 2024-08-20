<template>
  <!-- @ToDo: Translate the whole section -->
  <section class="rd-signup-section">
    <div class="header" side="left">
      <h2>Be the first to know</h2>
    </div>
    <div class="content" side="left">
      <p>The Responsible Data for Children initiative regularly releases videos explaining its work and the work of its
        partners. Here’s a few of our video series that you might be interested in. If you would like to stay up to date
        with our latest releases, please subscribe to our YouTube channel or fill out the form here.</p>
    </div>
    <!-- <div class="header" side="right"></div> -->
    <div class="content" side="right">
      <ccm-form class="form">
        <base-input placeholder="Name"/>
        <base-input placeholder="Email"/>
        <rd-button size="l" color="white">Signup</rd-button>
      </ccm-form>
    </div>
    
  </section>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>
.rd-signup-section {
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: var(--s2);
  padding-block: var(--s3);
  background-color: hsla(var(--rd-purple), 1);
  padding-inline: var(--s0);

  @media screen and (min-width: 768px) {
    grid-template-columns: minmax(1rem, 1fr) [content-start] 600px [center] 600px [content-end] minmax(1rem, 1fr);
    grid-template-rows: [header] auto [content-start] auto [content-end];
  }
}

[side="left"] {
  @media screen and (min-width: 768px) { 
    grid-column: content-start / center; 
    text-align: right !important;
    padding-right: var(--s2);
  }
}

[side="right"] {
  @media screen and (min-width: 768px) { 
    grid-column: center / content-end;
    padding-left: var(--s2);
  }
  
}


.header {
  @media screen and (min-width: 768px) { grid-row: header / content-start; }
}

.content {
  @media screen and (min-width: 768px) { grid-row: content-start / content-end; }
  color: var(--white-color);
}


.content {
  display: grid;
  gap: var(--s0);
}

:deep(input) {
  background-color: transparent;
  border-color: var(--white-color) !important;
  color: var(--white-color);

  &::placeholder {
    color: var(--white-color);
  }
}

h2 {
  color: var(--white-color);
}

// .master-grid {
//   --padding-inline: 1rem;
//   --content-max-width: 900px;
//   --wide-max-width: 1200px;
//   --wide-size: calc((var(--wide-max-width) - var(--content-max-width)) / 2);

//   display: grid;
//   grid-template-columns:
//     [full-width-start] minmax(var(--padding-inline), 1fr)
//     [content-start] min(50% - var(--padding-inline), calc(var(--content-max-width) /2))
//     [center] 
//     min(50% - var(--padding-inline), calc(var(--content-max-width) / 2)) [content-end] 
//     [full-width-end];
// }

// .master-grid > :not(.wide, .full-width),
// .full-width > :not(.wide, .full-width) {
//   grid-column: content;
// }

// .master-grid > .wide {
//   grid-column: wide;
// }

// .content[side="left"] {
//   grid-column: content-start / center;
// }

// .content[side="right"] {
//   grid-column: center / content-end;
// }
// .master-grid > .full-width {
//   grid-column: full-width;
//   display: grid;
//   grid-template-columns: inherit;
// }
</style>
