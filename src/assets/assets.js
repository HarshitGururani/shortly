/* eslint-disable no-unused-vars */

import instagram from './icon-instagram.svg';
import facebook from './icon-facebook.svg';
import pinterest from './icon-pinterest.svg';
import twitter from './icon-twitter.svg';
import customizable from './icon-fully-customizable.svg';
import detailed from './icon-detailed-records.svg';
import hero from './illustration-working.svg';
import recognition from './icon-brand-recognition.svg';
import boostMobile from './bg-boost-desktop.svg';
import boostDesktop from './bg-boost-mobile.svg';
import shortenMobile from './bg-shorten-mobile.svg';
import shortenDesktop from './bg-shorten-desktop.svg';

export const socials = {
  instagram,
  facebook,
  pinterest,
  twitter,
};

export const cards = [
  {
    title: 'Brand Recognition',
    subtext:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
    icon: recognition,
  },
  {
    title: 'Detailed Records',
    subtext:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
    icon: detailed,
  },
  {
    title: 'Fully Customizable ',
    subtext:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement',
    icon: customizable,
  },
];

export const boost = {
  boostDesktop,
  boostMobile,
};
export const shorten = {
  shortenDesktop,
  shortenMobile,
};

export const navItems = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'Features',
    link: '#features',
  },
  {
    name: 'Contact Us',
    link: '#contact',
  },
];

export const features = ['Link Shortening', 'Branded Links', 'Analytics'];
export const resources = ['Blog', 'Developers', 'Support'];
export const company = ['About', 'Our Team', 'Careers', 'Contact'];
export const social = [facebook, instagram, twitter, pinterest];
export default hero;
