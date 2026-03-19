import kitchen1 from '@/public/kitchen_1.webp';
import wardrobe1 from '@/public/wardrobe_1.webp';
import door1 from '@/public/door_1.webp';

import houseInteriorDesign from '@/public/house-interior-design.svg';
import InteriorDecoration from '@/public/interior-decoration.svg';
import ExteriorDesign from '@/public/exterior-design.svg';

export const navLinks = [
    {
        linkTitle: 'About',
        linkTo: '/about'
    },
    {
        linkTitle: 'Kitchens',
        linkTo: ''
    },
    {
        linkTitle: 'Wardrobes',
        linkTo: ''
    },
    {
        linkTitle: 'Doors',
        linkTo: ''
    },
    {
        linkTitle: 'Citites',
        linkTo: ''
    },
    {
        linkTitle: 'Blog',
        linkTo: '/blog'
    },
    {
        linkTitle: 'Contact',
        linkTo: ''
    },
]

export const services = [
    {
        name: 'Kitchens',
        description: 'Functional kitchen, wardrobe and storage',
        src: kitchen1
    },
    {
        name: 'Wardrobes',
        description: 'Turnkey interior solutions for your home',
        src: wardrobe1
    },
    {
        name: 'Doors',
        description: 'Tailored interiors that redefine elegance',
        src: door1
    },
]

export const estimates = [
    {
        title: 'House Interior Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        icon: houseInteriorDesign
    },
    {
        title: 'Interior Decoration',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        icon: InteriorDecoration
    },
    {
        title: 'Exterior Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        icon: ExteriorDesign
    },
]