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

  openNav() {
    this.isNavOpen = true;
  }

  closeNav() {
    this.isNavOpen = false;
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
