import { NavLink } from '@/types/Home/banner';

export const metadataConst = {
  title: 'Dev',
  description: 'Add Description',
};

export const navLinkData: NavLink[] = [
  { name: 'home', id: 1, value: 'home', link: '/', dropdown: false },
  {
    name: 'Service',
    id: 2,
    value: 'app',
    link: '/app',
    dropdown: true,
    options: [
      {
        name: 'App',
        link: '/',
        details: 'Jobs Shared by Devs Who Get You ',
      },
    ],
  },
];

export const brandData = {
  name: `DevCom`,
  slogan: `. . .`,
  address: `Add Address`,
};
