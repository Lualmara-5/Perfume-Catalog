import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(
    private navigationService: NavigationService
  ) {}

  navigateToSection(section: string): void {
    this.navigationService.navigateToSection(section);
  }
}