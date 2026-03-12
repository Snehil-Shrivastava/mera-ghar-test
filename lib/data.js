import modularInteriors from '@/public/modular-interiors.png';
import fullHomeInteriors from '@/public/full-home-interiors.png';
import luxuryInteriors from '@/public/luxury-interiors.png';
import renovations from '@/public/renovations.png';

import houseInteriorDesign from '@/public/house-interior-design.svg';
import InteriorDecoration from '@/public/interior-decoration.svg';
import ExteriorDesign from '@/public/exterior-design.svg';

export const navLinks = [
    {
        linkTitle: 'About',
        linkTo: '/about'
    },
    {
        linkTitle: 'Services',
        linkTo: ''
    },
    {
        linkTitle: 'Contact',
        linkTo: '?showContactForm=true'
    },
    {
        linkTitle: 'Design Ideas',
        linkTo: ''
    },
]

export const services = [
    {
        name: 'Modular Interiors',
        description: 'Functional kitchen, wardrobe and storage',
        src: modularInteriors
    },
    {
        name: 'Full Home Interiors',
        description: 'Turnkey interior solutions for your home',
        src: fullHomeInteriors
    },
    {
        name: 'Luxury Interiors',
        description: 'Tailored interiors that redefine elegance',
        src: luxuryInteriors
    },
    {
        name: 'Renovations',
        description: 'Expert solutions to upgrade your home',
        src: renovations
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