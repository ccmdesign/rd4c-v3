import { ref } from 'vue';

export function useNavigation() {
  const menuItems = ref([
    { name: 'Home', link: '/', target: '_self' },
    { name: 'About', link: '/about', target: '_self' },
    { name: 'Principles', link: '/principles', target: '_self' },
    { name: 'Publications', link: '/publications', target: '_self' },
    { name: 'Videos', link: '/videos', target: '_self' },
    { name: 'Updates', link: '/articles', target: '_self' }
    
    // { name: 'Case Studies', link: '/case-studies', target: '_self' },
    // { name: 'Team', link: '/team', target: '_self' },
    // { name: 'Tools', link: '/tools', target: '_self' }
  ]);

  return {
    menuItems,
  };
}

