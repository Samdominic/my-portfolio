import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './nav-bar.scss'
})
export class NavBar {


  openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.remove('-translate-x-full');
    }
  }

  closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.add('-translate-x-full');
    }
  }
}
