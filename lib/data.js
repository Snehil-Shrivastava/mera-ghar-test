import kitchen2 from '@/public/kitchen_2.webp';
import wardrobe1 from '@/public/wardrobe_1.webp';
import door1 from '@/public/door_1.webp';

import getInTouch from '@/public/get-in-touch.svg';
import shareNeeds from '@/public/share-needs.svg';
import reviewPlan from '@/public/custom-plan.svg';
import handleRest from '@/public/handle-rest.svg';

export const navLinks = [
    {
        linkTitle: 'About Us',
        linkTo: '/about'
    },
    {
        linkTitle: 'Founders',
        linkTo: ''
    },
    {
        linkTitle: 'Mera Kitchen',
        linkTo: ''
    },
    {
        linkTitle: 'Mera Wardrobe',
        linkTo: ''
    },
    {
        linkTitle: 'Mera Door',
        linkTo: ''
    },
    // {
    //     linkTitle: 'Cities',
    //     linkTo: ''
    // },
    {
        linkTitle: 'Contact Us',
        linkTo: ''
    },
    {
        linkTitle: 'Blogs',
        linkTo: '/blog'
    },
    {
        linkTitle: 'Testimonials',
        linkTo: ''
    },
]

export const services = [
    {
        name: 'Kitchens',
        description: 'Functional kitchen, wardrobe and storage',
        src: kitchen2
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

export const process = [
    {
        title: 'Get in touch',
        description: 'Lorem ipsum dolor sit amet consectetur adip',
        icon: getInTouch
    },
    {
        title: 'Share your needs',
        description: 'Lorem ipsum dolor sit amet consectetur adip',
        icon: shareNeeds
    },
    {
        title: 'Review our custom plan',
        description: 'Lorem ipsum dolor sit amet consectetur adip',
        icon: reviewPlan
    },
    {
        title: 'We handle the rest',
        description: 'Lorem ipsum dolor sit amet consectetur adip',
        icon: handleRest
    },
]