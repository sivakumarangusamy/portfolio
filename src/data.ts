export const profile = {
  name: 'Sivakumar Angusamy',
  email: 'sivakumarangusamy@gmail.com',
  phone: '+91 7397558227',
  location: 'Tamil Nadu, India',
  github: 'https://github.com/sivakumarangusamy',
  linkedin: 'https://www.linkedin.com/in/sivakumar-angusamy/',
}

export const nav = [
  ['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'],
  ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact'],
] as const

export const experience = [
  {
    period: '2021 – 2023', role: 'Network Engineer & Procurement Support', org: 'Tata Consultancy Services (TCS)',
    summary: 'Contributed to network operations and Cisco-to-Aruba migration activities within an enterprise environment.',
    points: [
      'Network device configuration', 'VLAN configuration', 'Connectivity troubleshooting',
      'Hardware and software troubleshooting', 'Incident and service request resolution', 'System monitoring',
      'Technical documentation', 'Cross-functional coordination',
      'Cisco-to-Aruba migration activities', 'Procurement support for Aruba networking equipment (about six months)',
    ],
  },
  {
    period: '2025', role: 'Flutter Developer', org: 'Wizinoa Technologies',
    summary: 'Worked on Flutter application development.',
    points: ['REST API integration', 'Bug fixing', 'UI/UX improvements', 'Application performance'],
  },
  {
    period: 'Present', role: 'Full-Stack Developer', org: 'Freelance',
    summary: 'Develop web and mobile applications using Flutter, Node.js, Express.js, PostgreSQL and Python.',
    points: ['REST API development', 'Database-driven applications', 'Deployment and maintenance'],
  },
]

export const skills = [
  { title: 'Networking', items: ['Network device configuration', 'VLAN configuration', 'Cisco-to-Aruba migration support', 'Network and connectivity troubleshooting', 'Incident management', 'TCP/IP', 'DNS', 'DHCP', 'HTTP/HTTPS', 'SSH', 'Technical documentation'] },
  { title: 'Development', items: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'JavaScript', 'Python', 'REST APIs'] },
  { title: 'Databases', items: ['PostgreSQL', 'Prisma', 'MongoDB'] },
  { title: 'Systems & tools', items: ['Linux (Kali, Ubuntu)', 'Windows', 'macOS', 'Docker', 'Git', 'GitHub', 'Postman', 'Basic hardware troubleshooting'] },
]

export const otherProjects = [
  {
    name: 'POS System',
    desc: 'A point-of-sale application with a web frontend and backend. The local PostgreSQL database is the source of truth; cloud synchronization is planned.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
  },
  {
    name: 'FaceAI Attendance',
    desc: 'Face registration and verification with attendance integration, including handling of punches that cross midnight.',
    stack: ['Python', 'FastAPI', 'face_recognition', 'OpenCV'],
  },
]

export const certs = [
  'Microsoft Azure Fundamentals',
  'Microsoft Teams Administrator Associate',
  'ICSI Certified Network Security Specialist',
  'TCS On the Spot Award, September 2022',
]
