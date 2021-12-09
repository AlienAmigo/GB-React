// eslint-disable-next-line no-shadow
export enum ROUTERS {
  BASE = '/',
  PROFILE = '/profile',
  CHARTS = '/charts'
}

export const MenuItems = [
  {
    title: 'Home',
    link: ROUTERS.BASE
  },
  {
    title: 'Profile',
    link: ROUTERS.PROFILE
  },
  {
    title: 'Charts',
    link: ROUTERS.CHARTS
  }
];
