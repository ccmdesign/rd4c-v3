<template>
  <header class="top-bar">
    <nuxt-link to="/" class="logo"><img src="/images/logos/rd4c-logo-white.svg" alt="Homepage"></nuxt-link><!-- @ToDo: Translate -->
    <div class="menu-wrapper">
      <rd-menu class="menu"/>
    </div>
    
    
    <dialog id="search-trigger" popover class="search-field-popover">
      <rd-search />
    </dialog>
    
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.menu-wrapper {
  display: flex;
  flex: 0 1 45%;
  align-items: baseline;
  gap: 15px;
 
  @media screen and (max-width: 768px) {
    position: absolute;
    // Hacky thing to remove the menu from normal flow, but still have it accessible, 
    // and not hide the drawer on mobile. The "proper way" would be to display:none, but this hides
    // ythe whole menu. 
  }
}


.top-bar {
  display: flex;
  background: var(--base-color);
  grid-template-columns: 1fr auto;
  padding: var(--s1) var(--s0);
  gap: var(--s1);
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;  
    padding-inline: var(--s1);
  }
}

.top-bar .logo { 
  flex: 0 1 400px; 
  min-width: 200px;
  
  @media screen and (max-width: 768px) {
    margin-inline: auto;
  }

}
.top-bar .menu { 
  flex: 0; 
}

.search-field-popover {
  width: fill-available;
  padding: var(--s0);
  background: hsla(var(--base-hsl), .95);
  border-radius: 0 0 var(--base-border-radius) var(--base-border-radius) ;
  box-shadow: var(--base-shadow);
  color: var(--white-color);
  border: 0;
  align-items: center;
  inset: none;
  margin: 0;
  top: 75px;
}
</style>
