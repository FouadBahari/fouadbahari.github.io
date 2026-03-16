import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Code2,
  Smartphone,
  Database,
  GitBranch,
  Wrench,
  Brain,
  Layers,
  Wifi,
} from 'lucide-react';

export const personalInfo = {
  name: 'Fouad Bahari',
  title: 'Mobile App Developer',
  roles: ['Flutter Developer', 'Mobile Engineer', 'Fintech Specialist', 'Freelancer'],
  email: 'fouadbahari18@gmail.com',
  phone: '+213 795 546 939',
  location: 'Ouled Fayet, Algiers, Algeria',
  relocation: 'Open to relocation (Germany / Austria) with visa sponsorship',
  summary: `Flutter Mobile Developer with 3+ years of experience building scalable mobile and desktop applications using Flutter and Dart. Experienced in fintech, POS systems, and real-time applications using WebSockets and CI/CD pipelines. Strong background in clean architecture, performance optimization, and secure mobile development.`,
  aboutText: `I'm an Electrical Engineer turned Mobile Developer, driven by a passion for crafting intuitive mobile experiences. I've worked across fintech, POS, and food delivery domains — shipping production apps used by real businesses and bank customers. I thrive in cross-functional teams and love solving complex technical challenges.`,
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Apps Shipped', value: '10+' },
  ],
  resume: '/assets/fouad_bahari_resume.pdf',
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/FouadBahari', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fouad-bahari', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com/fouad_bahari', icon: Twitter },
  { name: 'Instagram', url: 'https://instagram.com/fouad.bahari', icon: Instagram },
];

export const bentoSkills = [
  {
    category: 'Languages',
    items: ['Dart', 'Kotlin', 'Java', 'JavaScript']
  },
  {
    category: 'Frameworks',
    items: ['Flutter', 'Jetpack Compose']
  },
  {
    category: 'Architecture',
    items: ['Clean Architecture', 'MVI', 'MVVM', 'MVC', 'SOLID']
  },
  {
    category: 'State Management',
    items: ['Bloc', 'Cubit', 'Provider', 'GetX']
  },
  {
    category: 'Testing',
    items: ['flutter_test', 'bloc_test', 'mocktail', 'Integration Testing']
  },
  {
    category: 'Networking',
    items: ['REST APIs', 'Dio', 'HTTP', 'WebSocket', 'Firebase']
  },
  {
    category: 'Databases',
    items: ['Sqflite', 'Hive', 'Drift', 'Floor', 'SharedPreferences']
  },
  {
    category: 'CI/CD & DevOps',
    items: ['Jenkins', 'Fastlane', 'GitHub Actions']
  },
  {
    category: 'Design & PM',
    items: ['Figma', 'Scrum', 'Agile']
  },
  {
    category: 'AI Tools',
    items: ['Claude Code', 'GitHub Copilot', 'Cursor', 'OpenCode']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'GitLab', 'Jira']
  }
];

export const experience = [
  {
    role: 'Mobile App Developer',
    company: 'BEYN',
    location: 'Algiers, Algeria',
    period: 'Apr 2024 — Present',
    type: 'Full-time',
    highlights: [
      'Develop and maintain the Wimpay mobile application, a fintech solution used with multiple Algerian banks for secure digital payments.',
      'Implement real-time communication using WebSockets and push notifications for responsive experiences.',
      'Build automated CI/CD pipelines using Jenkins and Fastlane for continuous delivery.',
      'Integrate the application on Electronic Payment Terminals (TPE) for embedded Android environments.',
      'Design and implement remote bank account opening with KYC and identity verification.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Smartek',
    location: 'Remote',
    period: 'Apr 2024 — Present',
    type: 'Part-time',
    highlights: [
      'Contributed to GStock, a Flutter desktop inventory system for retail stores and supermarkets.',
      'Integrated hardware devices including barcode scanners and receipt printers.',
      'Contributed to Easy Food POS, a desktop point-of-sale system for fast-food restaurants.',
      'Implemented local persistence using Floor (SQLite) and secure license activation.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'Obtulus Dev Team',
    location: 'Freelance',
    period: 'Jun 2022 — Mar 2024',
    type: 'Freelance',
    highlights: [
      'Developed Plaza Food Delivery and Breezy Mood Food Delivery mobile apps.',
      'Built Flutter desktop applications for restaurant POS and inventory management.',
      'Collaborated with agile teams to deliver production-ready features.',
    ],
  },
];

export const projects = [
  {
    title: 'Wimpay',
    description: 'Fintech mobile application enabling digital payments, transfers, and real-time transaction updates for banking partners across Algeria.',
    tech: ['Flutter', 'Dart', 'WebSocket', 'Firebase', 'Jenkins', 'Kotlin'],
    period: 'Apr 2024 — Present',
    color: '#3b82f6',
    url: 'https://play.google.com/store/apps/details?id=com.beyn.bdl.wimpay.customer',
  },
  {
    title: 'Wimpay Cashier',
    description: 'Merchant-facing mobile application for processing payments, managing transactions, and generating QR codes for the Wimpay ecosystem.',
    tech: ['Flutter', 'Dart', 'WebSocket', 'Jenkins', 'REST API'],
    period: 'Apr 2024 — Present',
    color: '#10b981',
    url: 'https://play.google.com/store/apps/details?id=com.beyn.bdl.wimpay.cashier',
  },
  {
    title: 'GStock POS',
    description: 'Desktop inventory management application for retail stores with barcode scanning, receipt printing, stock alerts, and supplier tracking.',
    tech: ['Flutter', 'Dart', 'Floor', 'SQLite', 'Laravel'],
    period: 'Apr 2024 — Present',
    color: '#8b5cf6',
  },
  {
    title: 'Easy Food POS',
    description: 'Restaurant point-of-sale system with order management, kitchen display, inventory tracking, and automated ticket printing.',
    tech: ['Flutter', 'Dart', 'Floor', 'SQLite'],
    period: 'May 2023 — Oct 2023',
    color: '#06b6d4',
    url: 'https://drive.google.com/file/d/1Uhb1n-9yeSMixB2jY5SoTnxUdQWFwWiQ/view?usp=drive_link',
  },
  {
    title: 'Plaza',
    description: 'Food delivery platform with real-time order tracking, payment processing, and restaurant management features.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    period: 'Oct 2022 — Jun 2023',
    color: '#f59e0b',
    url: 'https://play.google.com/store/apps/details?id=com.obtulus.plaza',
  },
  {
    title: 'Breezy Mood',
    description: 'Food delivery mobile application with intuitive UI, real-time tracking, and seamless ordering experience.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    period: 'Jun 2022 — Oct 2022',
    color: '#ec4899',
    url: 'https://play.google.com/store/apps/details?id=com.obtulus.breezymood',
  },
  {
    title: 'Big Two',
    description: 'Food Delivery App for restaurants with real-time tracking and intuitive food ordering.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    period: 'Aug 2022',
    color: '#ef4444',
    url: 'https://play.google.com/store/apps/details?id=com.raniaoustani.bigtwo',
  },
];

export const education = {
  degree: 'MSc in Electrical Engineering',
  school: 'Higher School of Industrial Technologies',
  location: 'Annaba, Algeria',
  year: '2021',
};

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'B2' },
  { name: 'French', level: 'B2' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
