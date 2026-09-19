import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-tools-and-technologies',
  imports: [],
  templateUrl: './tools-and-technologies.html',
  styleUrl: './tools-and-technologies.scss',
})
export class ToolsAndTechnologies {
  filters = [
    {
      category: 'all',
      name: 'All',
    },
    {
      category: 'frontend',
      name: 'Frontend',
    },
    {
      category: 'backend',
      name: 'Backend & APIs',
    },
    {
      category: 'database',
      name: 'Database',
    },
    {
      category: 'devops',
      name: 'DevOps & Cloud',
    },
    {
      category: 'tools',
      name: 'Tools',
    },
  ];

  selectedFilter = signal(this.filters[0]);

  readonly skills = signal([
    // Frontend
    {
      name: 'Angular',
      category: 'frontend',
      logo: 'icons/icon_angular_gradient.png',
    },
    {
      name: 'Ionic Framework',
      category: 'frontend',
      logo: 'icons/ionic-icon.png',
    },
    {
      name: 'Capacitor',
      category: 'frontend',
      logo: 'icons/capacitor.png',
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      logo: 'icons/bootstrap.png',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      logo: 'icons/tailwind-css.png',
    },
    {
      name: 'HTML',
      category: 'frontend',
      logo: 'icons/html.png',
    },
    {
      name: 'CSS',
      category: 'frontend',
      logo: 'icons/css.png',
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      logo: 'icons/javascript.png',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      logo: 'icons/typescript.png',
    },

    // Backend & APIs
    {
      name: 'Node.js',
      category: 'backend',
      logo: 'icons/node-js.png',
    },
    {
      name: 'Express.js',
      category: 'backend',
      logo: 'icons/express-js.png',
    },

    // Database
    {
      name: 'MongoDB',
      category: 'database',
      logo: 'icons/mongo-db.png',
    },
    {
      name: 'Firebase',
      category: 'database',
      logo: 'icons/firebase.png',
    },

    // DevOps & Cloud
    {
      name: 'GCP (Google Cloud Platform)',
      category: 'devops',
      logo: 'icons/google-logo.png',
    },

    // Mobile
    {
      name: 'Android Development (Capacitor)',
      category: 'frontend',
      logo: 'icons/android-studio.png',
    },
    {
      name: 'iOS Development (Capacitor)',
      category: 'frontend',
      logo: 'icons/xcode.png',
    },

    //Tools

    {
      name: 'Git',
      category: 'tools',
      logo: 'icons/git.png',
    },
    {
      name: 'GitHub',
      category: 'tools',
      logo: 'icons/github.png',
    },
    {
      name: 'GitLab',
      category: 'tools',
      logo: 'icons/gitlab.png',
    },
    {
      name: 'JIRA',
      category: 'tools',
      logo: 'icons/jira.png',
    },
    {
      name: 'VS Code',
      category: 'tools',
      logo: 'icons/vscode.png',
    },
    {
      name: 'Cursor',
      category: 'tools',
      logo: 'icons/cursor.png',
    },
    {
      name: 'Postman',
      category: 'tools',
      logo: 'icons/postman.png',
    },
    {
      name: 'Android Studio',
      category: 'tools',
      logo: 'icons/android-studio.png',
    },
    {
      name: 'Xcode',
      category: 'tools',
      logo: 'icons/xcode.png',
    },
  ]);

  filteredSkills = computed(() => {
    const selectedFilter = this.selectedFilter();

    if (selectedFilter.category === 'all') return this.skills();

    return this.skills().filter((s) => s.category === selectedFilter.category);
  });
}
