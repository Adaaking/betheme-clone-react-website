import {  FaLocationArrow, FaRegClock, } from "react-icons/fa";
import  { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import hot1 from './images/hot_drinks/86699095.jpeg';
import hot2 from './images/hot_drinks/cafe-Recipe.jpg';
import hot3 from './images/hot_drinks/Caramel-Macchiato-Fifteen-Spatulas-7.jpg';
import hot4 from './images/hot_drinks/forHome5.jpg';
import hot7 from './images/hot_drinks/vanilla-coffee-creamer.jpg';
import hot8 from './images/hot_drinks/mocha_coffee_main.jpg';
import hot10 from './images/hot_drinks/l-intro-1637963499.jpg';
import hot12 from './images/hot_drinks/americano12.jpg';
import hot14 from './images/hot_drinks/forhome3.jpeg';



// tea
import black_tea from './images/hot_drinks/black-tea.jpg';
import chamomile from './images/hot_drinks/chamomile.webp';
import Gingertea from './images/hot_drinks/Ginger-Tea2.jpg';
import green_tea from './images/hot_drinks/green-tea4.jpg';
import hibiscus from './images/hot_drinks/hibisus-tea.jpg';
import mint_tea from './images/hot_drinks/mint-tea.jpg';
import Oolong from  './images/hot_drinks/Oolong-tea.jpg';
import Pu_erh from './images/hot_drinks/Pu-erh-Tea.jpg';
import Moringa from './images/hot_drinks/Green-Tea.jpg';

// cakes
import sponge_cake from './images/hot_drinks/Sponge-cake.jpg';
import Pound_cake from './images/hot_drinks/pound-cake.webp';
import genoise from './images/hot_drinks/genoise.jpg';
import genoise2 from './images/hot_drinks/genoise2.webp';
import chiffon_cake from './images/hot_drinks/chiffon2.webp';
import chiffon2 from './images/hot_drinks/chiffon2.webp';
import carrot_cake from './images/hot_drinks/carrot-cake.webp';
import Butter_cake from './images/hot_drinks/Butter-cake.webp';

//events

import blog1 from './images/web_images/home_coffee2_blog1.jpg';
import blog2 from './images/web_images/home_coffee2_blog2.jpg';
import blog3 from './images/web_images/home_coffee2_blog3.jpg';
import blog4 from './images/web_images/home_coffee2_blog4.jpg';



export const navbars = [
    {
        id: 1,
        name: "Home",
        route:'/' 
    },
    {
        id:2,
        name: 'About',
        route: '/about'
    },
    {
        id:3,
        name: 'Menu',
        route: '/menu',
    },
    {
        id:4,
        name: 'events',
        route: '/events',
    },
    {
        id:5,
        name: 'Contact',
        route: '/contact',
    },
]

export const menus = [
    {
        title: "Classic coffee",
        items:[
            {
                id:1,
                name:'Expresso',
                image:hot14,
                price: 10,
                desc: ''
            },
            {
                id:2,
                name:'Macchiato',
                image:hot2,
                price: 30,
                desc: ''
            },
            {
                id:3,
                name:'Mocha-special',
                image:hot10,
                price: 30,
                desc: ''
            },
            {
                id:4,
                name:'flat White',
                image:hot4,
                price: 40,
                desc: ''
            },
            {
                id:5,
                name:'Americano',
                image:hot12,
                price: 50,
                desc: ''
            },
            {
                id:6,
                name:'Caramel Macchiato',
                image:hot3,
                price: 50,
                desc: ''
            },
            {
                id:7,
                name:'Vanilla',
                image:hot7,
                price: 50,
                desc: ''
            },
            {
                id:8,
                name:'Mocha',
                image:hot8,
                price: 50,
                desc: ''
            },
            {
                id:9,
                name:'Milk',
                image:hot1,
                price: 50,
                desc: ''
            },
        ]
    },
    {
        title: "Tea",
        items:[
            {
                id:1,
                name:'black-tea',
                image:black_tea,
                price: 20,
                desc: ''
            },
            {
                id:2,
                name:'Ginger-tea',
                image:Gingertea,
                price: 30,
                desc: ''
            },
            {
                id:3,
                name:'Chamomile-tea',
                image: chamomile,
                price: 40,
                desc: ''
            },
            {
                id:4,
                name:'Green-tea',
                image:green_tea,
                price: 50,
                desc: ''
            },
            {
                id:5,
                name:'hibiscus-tea',
                image:hibiscus,
                price: 50,
                desc: ''
            },
            {
                id:6,
                name:'Mint-tea',
                image:mint_tea,
                price: 50,
                desc: ''
            },
            {
                id:7,
                name:'Oolong-tea',
                image:Oolong,
                price: 50,
                desc: ''
            },
            {
                id:8,
                name:'Pu_erh-tea',
                image:Pu_erh,
                price: 50,
                desc: ''
            },
            {
                id:9,
                name:'Moringa-tea',
                image:Moringa,
                price: 50,
                desc: ''
            },
        ]
    },
    {
        title: "cakes",
        items:[
            {
                id:1,
                name:'Sponge-cake',
                image:sponge_cake,
                price: 20,
                desc: ''
            },
            {
                id:2,
                name:'Genoise-cake',
                image:genoise,
                price: 30,
                desc: ''
            },
            {
                id:3,
                name:'Chiffon-cake',
                image:chiffon2,
                price: 40,
                desc: ''
            },
            {
                id:4,
                name:'Carrot-cake',
                image:carrot_cake,
                price: 50,
                desc: ''
            },
            {
                id:5,
                name:'Pound-cake',
                image:Pound_cake,
                price: 50,
                desc: ''
            },
            {
                id:6,
                name:'Butter-cake',
                image:Butter_cake,
                price: 50,
                desc: ''
            },
        ]
    },
];

export  const footer = [
    {
        icon:<FaLocationArrow/>,
        title:"Address",
        info:"level 13,2 Elizabeth St, Melbourne,Victoria 3000, Australia"
    },
    {
        icon:<MdOutlineEmail />,
        title:"E-mail",
        info:"addisumotora3@gmail.com"
    },
    {
        icon:<FiPhone/>,
        title:"Call me",
        info:"+251 961 43 9185"
    },
    {
        icon:<FaRegClock />,
        title:"Opening hours",
        info:"Monday-Friday:800-24:00 saturday:8:00-23:00"
    },
]

export const events = [
    {
        id:1,
        image:blog1,
        liked:false,
        title: 'Vivamus hendrerit wisi sed non',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nisi deleniti aliquid harum voluptatum maiores architecto at dolorum rerum non, inventore dolores quas maxime, a repellendus ipsum magnam commodi itaque.',
        fav:51,
        link:'#'
    },
    {
        id:2,
        liked:false,
        image:blog2,
        title: 'Dius tempor pede semper erat',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nisi deleniti aliquid harum voluptatum maiores architecto at dolorum rerum non, inventore dolores quas maxime, a repellendus ipsum magnam commodi itaque.',
        fav:35,
        link:'#'
    },
    {
        id:3,
        image:blog3,
        liked:false,
        title: 'Dius tempor pede semper erat',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nisi deleniti aliquid harum voluptatum maiores architecto at dolorum rerum non, inventore dolores quas maxime, a repellendus ipsum magnam commodi itaque.',
        fav:49,
        link:'#'
    },
    {
        id:4,
        image:blog4,
        liked:false,
        title: 'Vivamus hendrerit wisi sed non',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos nisi deleniti aliquid harum voluptatum maiores architecto at dolorum rerum non, inventore dolores quas maxime, a repellendus ipsum magnam commodi itaque.',
        fav:61,
        link:'#'
    },
]