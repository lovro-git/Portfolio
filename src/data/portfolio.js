export const personalInfo = {
  name: 'Lovro Popovic',
  title: 'Software Developer',
  tagline: 'Building clean, performant web applications with modern technologies. Explore my projects and try them out live.',
  email: 'popovic.lovro01@gmail.com',
  location: 'Rijeka, Croatia',
  github: 'https://github.com/lovro-git',
};

export const about = [
  "I'm a software developer with a Bachelor's degree in Computer Science from the University of Rijeka. I specialize in building modern web applications using React and its surrounding ecosystem, from state management and routing to server-side rendering and API integration.",
  'For my bachelor\'s thesis, I explored modern approaches to front-end development, diving deep into component architecture, performance optimization, and developer experience tooling that shapes how we build for the web today.',
  "I'm passionate about writing clean, maintainable code and continuously expanding my skill set. Whether it's learning a new framework, contributing to open source, or tackling complex UI challenges, I thrive on solving problems through software.",
];

export const experience = [
  {
    type: 'work',
    role: 'Software Developer',
    company: 'IT Consulting Services (ITCS)',
    period: '2023 - Nov 2025',
    description:
      'Developed and maintained web applications for diverse clients. Worked across the full stack with React, Node.js, and various database technologies to deliver tailored software solutions.',
  },
  {
    type: 'education',
    role: "Bachelor's Degree in Computer Science",
    company: 'University of Rijeka,Faculty of Informatics and Digital Technologies',
    period: '2020 - 2025',
    description:
      'Studied core computer science fundamentals including algorithms, data structures, software engineering, and web technologies. Completed bachelor\'s thesis on modern front-end development practices.',
  },
];

export const projects = [
  {
    title: 'Kanban Board',
    description:
      'React Kanban board with drag-and-drop, subtasks, image attachments, and localStorage persistence.',
    tech: ['React', 'JavaScript', 'CSS', 'HTML'],
    features: ['Drag & drop', 'Subtasks', 'Image attachments'],
    github: 'https://github.com/lovro-git/KanbanBoard',
    demo: 'https://lovro-git.github.io/KanbanBoard/',
    image: '/images/kanban/board.jpg',
  },
  {
    title: 'Weather Dashboard',
    description:
      'React weather dashboard with forecasts, hourly charts, and air quality data via OpenWeatherMap API.',
    tech: ['React', 'JavaScript', 'CSS', 'OpenWeather API'],
    features: ['Hourly charts', 'Air quality data', '5-day forecast'],
    github: 'https://github.com/lovro-git/weather-dashboard',
    demo: 'https://lovro-git.github.io/weather-dashboard/',
    image: '/images/weather/details.jpg',
  },
  {
    title: 'Calorie Counter',
    description:
      'React Native calorie tracker with meal logging, macro tracking, and food search API integration.',
    tech: ['React Native', 'TypeScript', 'REST API'],
    features: ['Meal logging', 'Macro tracking', 'Food search'],
    github: 'https://github.com/lovro-git/calorie-counter',
    phoneScreenshots: [
      '/images/calorie/dashboard.jpeg',
      '/images/calorie/history.jpeg',
      '/images/calorie/progress.jpeg',
    ],
  },
  {
    title: 'Equipment Rental',
    description:
      'React Native app for university equipment rental. Built as a full-stack thesis project with separate frontend and backend repositories.',
    tech: ['React Native', 'JavaScript', 'Node.js', 'REST API'],
    features: ['Mobile-first', 'Full-stack', 'Thesis project'],
    github: 'https://github.com/lovro-git/EquipmentRental',
  },
  {
    title: 'Time Tracker',
    description:
      'Discord bot for tracking voice channel time with leaderboards, daily reports, and SQLite persistence.',
    tech: ['TypeScript', 'Discord.js', 'SQLite'],
    features: ['Leaderboards', 'Daily reports', 'Voice tracking'],
    github: 'https://github.com/lovro-git/TimeTracker',
  },
];

export const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
  Frontend: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'CSS Modules'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  DevOps: ['Git', 'Docker', 'CI/CD', 'Linux', 'Nginx'],
  Tools: ['VS Code', 'Figma', 'Postman', 'Jira', 'npm'],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
