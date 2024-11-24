import iconFacebook from '../../assets/svg/icon-facebook.svg';
import iconInstagram from '../../assets/svg/icon-instagram.svg';
import iconTwitter from '../../assets/svg/icon-twitter.svg';
import { Links, Social } from '../interfaces';

export const linksData: Array<Links> = [
  {
    id: 1,
    name: 'FAQs',
    link: '#',
  },
  {
    id: 2,
    name: 'Privacy Policy',
    link: '#',
  },
  {
    id: 3,
    name: 'Install Guide',
    link: '#',
  },
  {
    id: 4,
    name: 'Contact Us',
    link: '#',
  },
  {
    id: 5,
    name: 'Press Kit',
    link: '#',
  },
];

export const socialData: Array<Social> = [
  {
    id: 1,
    name: 'facebook',
    link: 'https://www.facebook.com',
    icon: iconFacebook,
  },
  {
    id: 2,
    name: 'twitter',
    link: 'https://www.twitter.com',
    icon: iconTwitter,
  },
  {
    id: 3,
    name: 'instagram',
    link: 'https://www.instagram.com',
    icon: iconInstagram,
  },
];
