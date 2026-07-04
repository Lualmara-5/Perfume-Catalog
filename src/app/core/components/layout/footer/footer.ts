import { Component } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(
    private navigationService: NavigationService
  ) {}

  navigateToSection(section: string): void {
    this.navigationService.navigateToSection(section);
  }

}