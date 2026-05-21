import { Component } from '@angular/core';
import { Tag } from "../../../../components/shared/tag/tag";
import { ProgressBar } from "../../../../components/shared/progress-bar/progress-bar";

@Component({
  selector: 'app-flashcard',
  imports: [Tag, ProgressBar],
  templateUrl: './flashcard.html',
  styleUrl: './flashcard.css',
})
export class Flashcard {}
