import { Component } from '@angular/core';

import { Hero } from '../../features/home/hero/hero';
import { Benefits } from '../../features/home/benefits/benefits';
import { Explore } from '../../features/home/explore/explore';
import { Doubts } from '../../features/home/doubts/doubts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Benefits, Explore, Doubts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}