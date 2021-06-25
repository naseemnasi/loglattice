import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/',
      
    },
   
  
    {
        label: 'Task Management ',
        icon: 'project-diagram',
        link: '/task-management'
    },
    {
        label: 'Task Feed',
        icon: 'clock',
        link: '/task-feed',
      
    },


    {
        label: 'My Account',
        icon: 'user',
        link: '/my-account',
      
    },
    {
        label: 'Logout',
        icon: 'sign-out-alt',
        link: '/account/login',
      
    },
   
];
