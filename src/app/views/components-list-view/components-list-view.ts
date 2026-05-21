import { Component } from '@angular/core';
import { Input } from "../../components/shared/input/input";
import { Logo } from "../../components/shared/logo/logo";
import { Textarea } from "../../components/shared/textarea/textarea";
import { ProgressBar } from '../../components/shared/progress-bar/progress-bar';
import { Button } from '../../components/shared/button/button';
import { TabButtonBase } from "../../components/shared/tab-button-base/tab-button-base";
import { Tab } from "../../components/shared/tab/tab";
import { Checkbox } from "../../components/shared/checkbox/checkbox";
import { CategoryFilter } from "../../components/shared/category-filter/category-filter";

@Component({
  selector: 'app-components-list-view',
  imports: [Input, Logo, Textarea, ProgressBar, Button, TabButtonBase, Tab, Checkbox, CategoryFilter],
  templateUrl: './components-list-view.html',
  styleUrl: './components-list-view.css',
})
export class ComponentsListView {}
