import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/examples/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/examples/layout/stepper',
      },
      {
        title: 'List',
        link: '/examples/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/examples/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/examples/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/examples/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/examples/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/examples/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/examples/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/examples/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/examples/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/examples/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/examples/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/examples/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/examples/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/examples/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/examples/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/examples/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/examples/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/examples/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/examples/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/examples/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/examples/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/examples/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/examples/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/examples/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/examples/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/examples/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/examples/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/examples/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/examples/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/examples/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/examples/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/examples/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/examples/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/examples/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/examples/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/examples/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/examples/auth/login',
      },
      {
        title: 'Register',
        link: '/examples/auth/register',
      },
      {
        title: 'Request Password',
        link: '/examples/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/examples/auth/reset-password',
      },
    ],
  },
];
