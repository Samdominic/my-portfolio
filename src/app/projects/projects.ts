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
    }
  ]);

}
