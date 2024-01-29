import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overlay-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay-menu.component.html',
  styleUrl: './overlay-menu.component.scss'
})
export class OverlayMenuComponent {
  isNavOpen = false;
  rotationClass = '';

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    this.rotationClass = this.isNavOpen ? 'open' : 'second-rotation';
  }

  closeNav() {
    this.isNavOpen = false;
    this.rotationClass = '';
  }
}
