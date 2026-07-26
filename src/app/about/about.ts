import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    'Firebase',
    'MongoDB',
    'Node.js',
    'Express.js',
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
    'GitLab',
    'JIRA',
    'VS Code',
    'Postman',
    'Cursor',
    'Android Studio',
    'Xcode',
  ]);
}
