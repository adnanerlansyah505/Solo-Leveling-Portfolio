export const skills = {
  frameworks: [
    { name: 'Vue.js', level: 95 },
    { name: 'Nuxt.js', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TailwindCSS', level: 95 }
  ],
  databases: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'Mysql', level: 90 },
    // { name: 'Redis', level: 80 },
    // { name: 'Elasticsearch', level: 75 }
  ],
  apiDesign: [
    { name: 'REST APIs', level: 95 },
    // { name: 'GraphQL', level: 85 },
    { name: 'Microservices', level: 60 },
    { name: 'API Security', level: 90 }
  ],
  // devOps: [
  //   { name: 'CI/CD', level: 70 }
  // ],
  architecture: [
    { name: 'System Design', level: 85 },
    { name: 'Database Design', level: 90 },
    { name: 'Scalability', level: 85 },
    { name: 'Security Design', level: 80 }
  ],
  aiIntegration: [
    { name: 'Github Copilot', level: 90 },
    { name: 'Kiro', level: 90 },
    { name: 'ChatGPT', level: 90 },
    { name: 'Gemini', level: 90 },
    { name: 'Microsoft Copilot', level: 90 },
    { name: 'Claude', level: 90 },
  ]
};

export const skillLevels = [
  { name: 'JavaScript Mastery', value: 95, category: 'Languages' },
  { name: 'TypeScript', value: 92, category: 'Languages' },
  { name: 'Vue/Nuxt Expertise', value: 95, category: 'Frameworks' },
  { name: 'Backend Engineering', value: 85, category: 'Backend' },
  // { name: 'Cloud Infrastructure', value: 85, category: 'DevOps' },
  { name: 'Database Engineering', value: 90, category: 'Databases' },
  { name: 'API Security', value: 88, category: 'Security' },
  { name: 'UI/UX Systems', value: 90, category: 'Frontend' },
  // { name: 'AI Integration', value: 75, category: 'AI/ML' }
];

export const radarChartData = {
  labels: ['Frameworks', 'Databases', 'API Design', 'DevOps', 'Architecture',],
  datasets: [
    {
      label: 'Dev Mastery',
      data: [92, 85, 90, 60, 87],
      borderColor: 'rgba(168, 85, 247, 0.8)',
      backgroundColor: 'rgba(168, 85, 247, 0.1)',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: 'rgba(168, 85, 247, 0.8)',
      pointBorderColor: '#a855f7',
      pointHoverRadius: 7
    }
  ]
};
