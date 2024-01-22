import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { OverlayMenuComponent } from '../overlay-menu/overlay-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HomeComponent, OverlayMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
