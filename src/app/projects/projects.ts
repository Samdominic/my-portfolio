import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  readonly projects = signal([
    {
      title: 'Pet Care Management App',
      description: 'A mobile application to help pet owners manage their pets\' health and wellness.',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'Firebase', 'GCP'],
    },
    {
      title: 'Human Health Wellness App',
      description: 'A mobile application to promote healthy living and wellness among users.',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'GCP', 'Firebase'],
    },
    {
    title: 'Assessment Management System',
    description:
      'A web-based application designed to manage and streamline the assessment process for educational institutions. The system enables administrators and faculty members to create assessments, manage question banks, schedule exams, evaluate results, and generate performance reports efficiently.',
    technologies: [
      'Angular',
      'Angular Material',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    title: 'Exam Writing System',
    description:
      'A cross-platform examination application developed for iOS, Android, iPad, and tablets, enabling students to securely write and submit exams online. The system supports question navigation, auto-save functionality, timer management, offline synchronization, and real-time exam monitoring.',
    technologies: [
      'Angular',
      'Ionic',
      'Capacitor',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  ]);

}
