import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
 readonly skills = signal([
    'Angular',
    'Ionic Framework',
    'Capacitor',
    'Bootstrap',
    'Tailwind CSS',
    'GCP (Google Cloud Platform)',
    'Node.js',
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'Android Development',
    'iOS Development',
  ]);

 readonly tools = signal([
    'Git',
    'GitHub',
    'JIRA',
    'VS Code',
    'Postman',
    'Cursor',
    'Android Studio',
    'Xcode',
  ]);
}
