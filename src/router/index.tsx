// eslint-disable-next-line no-shadow
export enum ROUTERS {
  BASE = '/',
  PROFILE = '/profile',
  CHATS = '/chats'
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
    title: 'Chats',
    link: ROUTERS.CHATS
  }
];
