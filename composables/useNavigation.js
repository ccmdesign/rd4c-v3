import { ref } from 'vue';

export function useNavigation() {
  const menuItems = ref([
    { name: 'menu.home', link: '/', target: '_self' },
    { name: 'menu.principles', link: '/principles', target: '_self' },
    { name: 'menu.publications', 
      link: '/resources', 
      target: '_self',
      subMenu: [
        { name: 'menu.videos', link: '/videos', target: '_self' },
        { name: 'menu.caseStudies', link: '/resources', target: '_self' },
        { name: 'menu.tools', link: '/resources#tools', target: '_self' }
      ] 
    },
    { name: 'menu.updates', link: '/articles', target: '_self' },
    { name: 'menu.about', link: '/about', target: '_self' },
    
    // { name: 'Case Studies', link: '/case-studies', target: '_self' },
    // { name: 'Team', link: '/team', target: '_self' },
    // { name: 'Tools', link: '/tools', target: '_self' }
  ]);

  return {
    menuItems,
  };
}

