import { Component, ChangeDetectionStrategy } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './projects.scss'
})
export class Projects {

  readonly projects = signal([
    {
      title: 'Assessment Management System',
      description:
        'Built a secure assessment platform with offline exam support, automatic sync, and real-time submission. The system includes authentication, auto-save, timer management, and secure REST API workflows for exam delivery and response collection.',
      technologies: ['Angular', 'Angular Material', 'Node.js', 'MongoDB', 'Firebase'],
    },
    {
      title: 'Pet Care & Health Management',
      description:
        'Developed an intuitive pet care app that manages profiles, medical history, vaccination schedules, feeding reminders, and daily activity tracking. Implemented secure storage of vet records, prescriptions, and health certificates with real-time Firebase sync.',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'Firebase', 'GCP'],
    },
    {
      title: 'Human Health Wellness',
      description:
        'Designed wellness modules for tracking sessions, routines, hydration, nutrition, and activity logging. Added intelligent reminders, AI-driven summary reports, engagement monitoring, and cross-platform performance for web and mobile users.',
      technologies: ['Ionic', 'Angular', 'Capacitor', 'Firebase', 'GCP'],
    }
  ]);

}
