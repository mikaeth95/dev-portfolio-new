import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Product Monitoring System',
        description: "I developed a sophisticated system designed to monitor and alert on product updates across various e-commerce sites. This backend-focused solution was engineered using Python, with Selenium for web scraping, demonstrating seamless interaction with dynamic web content. The Key features include automated notification delivery through Discord webhooks, proxy management for anonymous requests, and the strategic use of threading to optimize performance. This project highlight my skills in backend development, showcasing innovative application of web scraping techniques and automation to facilitate real-time data monitoring.",
        tools: ['Python', 'Selenium',  'Discord Webhooks', 'Threading'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Proxy Management Dashboard',
        description: 'I developed a Proxy Management Dashboard aimed at streamlining both user and admin tasks related to proxy management and oversight. The frontend architecture was realized through React, chosen for its dynamic UI capabilities and flexible state management, while being complemented by Tailwind CSS for its contemporary and responsive design ethos. The backend infrastructure leverages Node.js and Express, a combination that guarantees robust API functionality alongside secure authentication mechanisms. To accommodate diverse user requirements, the system was designed to support multiple user roles, each with distinct access privileges. A crucial aspect of the platform is the integration of Stripe for payment processing, enabling straightforward and secure transactions for proxy services. MongoDB was employed for its adept data handling capabilities, ensuring the systems responsiveness and scalability.',
        tools: ['NextJS', 'Tailwind CSS', "NestJS", "TypeScript", "MySQL", "Stripe"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'The Mysterious Project X',
        description: 'Imagine a project so versatile, it adapts to your needs before you even know them. "The Mysterious Project X" is not just a project - it’s a journey into the future of technology. With a blend of Quantum Computing, Blockchain Smoothies, and Cloud-Flavored AI, this project defies the laws of physics to bring your wildest dreams to life.',
        tools: ['Quantum Laughter', 'Blockchain Smoothies', 'Cloud-Flavored AI', 'Teleportation Debugging', 'Meme-Driven Development', 'CoffeeScript 2.0'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },