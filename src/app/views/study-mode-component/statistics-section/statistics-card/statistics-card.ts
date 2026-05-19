import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';


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
  selector: 'app-statistics-card',
  imports: [NgClass],
  templateUrl: './statistics-card.html',
  styleUrl: './statistics-card.css',
})

export class StatisticsCard {
  cardTitle = input<string>();
  cardCount = input<number>();
  cardBackground = input<Background>(Background.blue);
  icon = input<Icon>();

  bgClassMap: Record<Background, string> = {
    [Background.blue]: 'bg-blue-400',
    [Background.teal]: 'bg-teal-400',
    [Background.pink]: 'bg-pink-500',
    [Background.lightPink]: 'bg-pink-400'
  };

  iconClassMap: Record<Icon, string> = {
    [Icon.total]: '/icon-stats-total.svg',
    [Icon.mastered]: '/icon-stats-mastered.svg',
    [Icon.inProgress]: '/icon-stats-in-progress.svg',
    [Icon.notStarted]: '/icon-stats-not-started.svg',
  }

  get backgroundClass(): string {
    return this.bgClassMap[this.cardBackground()!];
  }

  get iconClass() : string {
    return this.iconClassMap[this.icon()!];
  }
}
