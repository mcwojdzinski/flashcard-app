import { Component } from '@angular/core';
import { StatisticsCard } from "./statistics-card/statistics-card";

enum Background {
  blue = 'blue',
  teal = 'teal',
  pink = 'pink',
  lightPink = 'lightPink'
}

enum Icon {
  total = 'total',
  mastered = 'mastered',
  inProgress = 'inProgress',
  notStarted = 'notStarted'
}

@Component({
  selector: 'app-statistics-section',
  imports: [StatisticsCard],
  templateUrl: './statistics-section.html',
  styleUrl: './statistics-section.css',
})
export class StatisticsSection {
  Background = Background;
  Icon = Icon;
}
