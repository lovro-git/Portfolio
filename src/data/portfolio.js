export const personalInfo = {
  name: 'Lovro Popovic',
  title: 'Software Developer',
  tagline: 'Building clean, performant web and mobile applications with modern technologies. Explore my projects and try them out live.',
  email: 'popovic.lovro01@gmail.com',
  location: 'Rijeka, Croatia',
  github: 'https://github.com/lovro-git',
};

export const about = [
  "I'm a software developer with a Bachelor's degree in Computer Science from the University of Rijeka. I build web and mobile applications with React and React Native — from responsive interfaces and state management to cross-platform apps and REST API integration.",
  "During university I got into competitive programming on Codeforces, solving problems around graph theory, dynamic programming, and data structures. For my thesis, I explored modern front-end development, diving into component architecture, performance optimization, and developer tooling.",
  "I enjoy working across the full stack and continuously picking up new tools. Whether it's shipping a mobile app, optimizing a web dashboard, or grinding through an algorithmic problem, I like building things that work well.",
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
      'Studied core computer science fundamentals including algorithms, data structures, software engineering, and web technologies. Practiced competitive programming on Codeforces, solving problems in graph theory, dynamic programming, and combinatorics. Completed bachelor\'s thesis on modern front-end development practices.',
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
  Languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'HTML', 'CSS', 'SQL'],
  Frontend: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'CSS Modules'],
  Mobile: ['React Native', 'Expo', 'Cross-platform development'],
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
