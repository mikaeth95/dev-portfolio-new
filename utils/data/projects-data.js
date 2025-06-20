import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Product Monitoring System',
        description: "I built a system to monitor product updates on different e-commerce sites in real time. To learn and compare, I wrote some monitors in Python and some in JavaScript so I could see which language worked better for this kind of automation. The system sends alerts through Discord webhooks whenever items come back in stock or when prices change. This project gave me practical experience with backend development, web scraping, automation and real time data monitoring.",
        tools: ['Python', 'JavaScript'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: [
        '/image/product-monitor-1.png',
        '/image/product-monitor-2.png',
        '/image/product-monitor-3.png'
        ]
    },
    {
        id: 2,
        name: 'Checkout Automation Tool',
        description: "A desktop automation tool designed to streamline the checkout process on various e-commerce and collectible sites. Built with Node.js and Electron. The app provides an interface for setting up automated tasks. It can add products to the cart, fill out checkout forms and complete purchases quickly and efficiently. Working on this project improved my skills in desktop application development with JavaScript and creating efficient solutions for real world automation challenges.",
        tools: ['Node.js', 'Electron', 'JavaScript'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: [
        '/image/checkout-tool-1.png',
        '/image/checkout-tool-2.png',
        '/image/checkout-tool-3.png'
        ]
    },
    {
        id: 3,
        name: 'Poker Bankroll Tracker',
        description: "I built a desktop application to help poker players track and manage their bankroll over time. The app is developed in Python, using the customtkinter library for a modern user interface along with Pillow for image handling. Key features include managing poker sessions, tracking profits and losses, viewing analytics and handling bankroll adjustments. This project gave me practical experience with Python GUI development, state management and integrating multiple components into a single desktop tool.",
        tools: ['Python', 'Pillow', 'Tkinter'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: [
        '/image/poker-tracker1.png',
        '/image/poker-tracker2.png',
        '/image/poker-tracker3.png',
        '/image/poker-tracker4.png'
        ]
    },
];