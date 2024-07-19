import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Product Monitoring System',
        description: "I developed a system designed to monitor and alert on product updates across various e-commerce sites. This backend-focused solution was engineered using Python. Key features include automated notification delivery through Discord webhooks and effective management of request handling to ensure reliable performance. This project highlights my skills in backend development, showcasing innovative applications of web scraping techniques and automation to facilitate real-time data monitoring.",
        tools: ['Python', 'Requests',  'Discord Webhooks'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Proxy Management Dashboard',
        description: 'I developed a Proxy Management Dashboard aimed at streamlining both user and admin tasks related to proxy management and oversight. The frontend architecture was realized through React, chosen for its dynamic UI capabilities and flexible state management, while being complemented by Tailwind CSS. The backend infrastructure leverages Node.js and Express, a combination that guarantees robust API functionality alongside secure authentication mechanisms. To accommodate diverse user requirements, the system was designed to support multiple user roles, each with distinct access privileges. A crucial aspect of the platform is the integration of Stripe for payment processing, enabling straightforward and secure transactions. MongoDB was employed for its adept data handling capabilities, ensuring the systems responsiveness and scalability.',
        tools: ['NextJS', 'Tailwind CSS', "TypeScript", "MySQL", "Stripe"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Custom Web Scraping Tools',
        description: 'I developed a suite of custom web scraping tools designed to efficiently extract data from various websites. The project involves creating robust scraping scripts tailored to handle diverse site structures and dynamic content. To ensure seamless data extraction, I implemented advanced techniques to manage request rates, handle JavaScript-rendered content, and maintain anonymity.',
        tools: ['Python', 'BeautifulSoup', 'Selenium', 'Requests', 'Pandas'],
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