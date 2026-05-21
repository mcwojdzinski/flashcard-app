import { Component, inject } from '@angular/core';
import { TabButtonBase } from "../tab-button-base/tab-button-base";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-tab',
  imports: [TabButtonBase, RouterLink, RouterLinkActive],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class Tab {}
