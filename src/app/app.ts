import { Component, signal } from '@angular/core';
import { NavBar } from './nav-bar/nav-bar';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { ContactSection } from './contact-section/contact-section';
import { HeroSection } from './hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [NavBar, Projects, About, ContactSection, HeroSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
