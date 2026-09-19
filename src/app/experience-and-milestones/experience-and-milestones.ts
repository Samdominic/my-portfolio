import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience-and-milestones',
  imports: [],
  templateUrl: './experience-and-milestones.html',
  styleUrl: './experience-and-milestones.scss',
})
export class ExperienceAndMilestones {
  protected readonly experiences: Experience[] = [
    {
      company: 'DigiVal IT Solutions',
      role: 'Software Engineer',
      period: 'Dec 2025 - Present',
      current: true,
      description: [
        'Developed scalable web and cross-platform mobile applications using Angular 20, Angular Material, and Capacitor for Android and iOS.',
        'Built reusable standalone Angular components and leveraged Angular Signals, lazy loading, and route optimization to enhance application performance, state management, and code maintainability.',
        'Developed custom Capacitor plugins to integrate native Android and iOS device capabilities with Angular applications, enabling seamless cross-platform functionality and improving code reusability across multiple projects.',
        'Designed and developed secure RESTful APIs using Node.js and Express.js, enabling seamless communication between frontend and backend systems.',
        'Implemented secure authentication and authorization using JWT and integrated third-party APIs based on business requirements.',
        'Managed source code using GitLab, including feature branching, merge requests, conflict resolution, and troubleshooting GitLab CI/CD pipeline issues.',
        'Built responsive, accessible, and cross-browser compatible user interfaces using Angular Material, HTML5, CSS3, and TypeScript, while providing production support, troubleshooting issues, and delivering timely bug fixes.',
      ],
      technologies: ['Angular', 'TypeScript', 'Capacitor', 'Node.js', 'MongoDb'],
    },
    {
      company: 'Adaptive Development Private Limited',
      role: 'Software Engineer',
      period: 'Jan 2025 - Dec 2025',
      description: [
        'Designed and developed web and hybrid mobile applications using Angular and Ionic, delivering consistent cross-platform experiences.',
        'Built and deployed iOS and Android apps using Ionic Capacitor, with experience in App Store submission and release management.',
        'Built and maintained scalable backend systems using Firebase (Firestore, Cloud Functions, Authentication) and Google Cloud Platform (GCP).',
        'Integrated real-time updates, push notifications, and offline support to enhance user interaction and app reliability.',
        'Worked with Jira to manage tasks, track bugs, and collaborate in Agile/Scrum development cycles; participated in sprint planning, daily standups, and retrospectives.',
        'Created reusable UI components with responsive layouts and ensured accessibility standards were met.',
        'Implemented secure authentication flows and integrated third-party APIs as needed for business requirements.',
        'Deployed and managed apps via Firebase Hosting and handled CI/CD pipelines for streamlined releases.',
        'Conducted code reviews and optimized performance for better user experience and scalability.',
      ],
      technologies: ['Angular', 'Ionic', 'Capacitor', 'Firebase', 'GCP'],
    },
    {
      company: 'Adaptive Media',
      role: 'Associate Software Engineer',
      period: 'Oct 2023 - Dec 2024',
      description: [
        'Assisted in developing Angular web applications and hybrid mobile apps using Ionic.',
        'Contributed to frontend features, backend integration, and debugging across platforms.',
        'Supported app deployment processes and gained exposure to Android and iOS build workflows.',
        'Used Firebase for user authentication and database management.',
        'Participated in Agile development practices and collaborated using Jira and GitHub.',
      ],
      technologies: ['Angular', 'Ionic', 'Capacitor', 'Firebase', 'GCP'],
    },
  ];
}
