export const personalInfo = {
  name: 'Lovro Popovic',
  title: 'Software Developer',
  tagline: 'Building clean, performant web and mobile applications with modern technologies. Explore my projects and try them out live.',
  email: 'popovic.lovro01@gmail.com',
  location: 'Rijeka, Croatia',
  github: 'https://github.com/lovro-git',
};

export const about = [
  "I'm a software developer with a Bachelor's in Computer Science from the University of Rijeka. I work across web and mobile — building React apps on the frontend, React Native apps with Expo for iOS and Android, and Node.js services on the backend. At my last job I shipped real-time features like WebSocket chat, GPS vehicle tracking, and notification systems for an enterprise platform used across web and mobile.",
  "During university I spent time on competitive programming through Codeforces, working through problems in graph theory, dynamic programming, and data structures. For my thesis I built a full-stack mobile app for university equipment rental with React Native, Node.js, and PostgreSQL, including AAI@EduHr authentication and role-based access control.",
  "I develop on Arch Linux, enjoy working in the terminal, and care about writing clean, well-structured code. I'm always picking up new tools and techniques — whether that's learning a new state management approach, setting up a CI pipeline, or figuring out how to make an animation feel right.",
];

export const experience = [
  {
    type: 'work',
    role: 'Software Developer / Web Developer',
    company: 'IT Consulting Services (ITCS)',
    period: 'Aug 2024 - Nov 2025',
    description:
      'Built cross-platform mobile apps with React Native and web apps with React for an enterprise resource management platform. Implemented real-time chat with WebSockets, GPS vehicle tracking, reminder systems, and media galleries. Worked in an Agile/Scrum environment with code reviews and daily stand-ups.',
  },
  {
    type: 'education',
    role: "Bachelor's Degree in Computer Science",
    company: 'University of Rijeka,Faculty of Informatics and Digital Technologies',
    period: '2020 - 2025',
    description:
      'Studied algorithms, data structures, database design, and software engineering. Practiced competitive programming on Codeforces. Built a full-stack mobile app for university equipment rental as bachelor\'s thesis using React Native, Node.js, and PostgreSQL.',
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
