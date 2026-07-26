import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-contact-section',
  imports: [NgOptimizedImage],
  templateUrl: './contact-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './contact-section.scss'
})
export class ContactSection {


  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Use mailto to open user's email client
    const mailto = `mailto:romandominic2002@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=From: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }
}
