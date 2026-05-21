import { Component } from '@angular/core';
import { Input } from "../../../components/shared/input/input";
import { Textarea } from "../../../components/shared/textarea/textarea";
import { Button } from "../../../components/shared/button/button";

@Component({
  selector: 'app-create-new-card',
  imports: [Input, Textarea, Button],
  templateUrl: './create-new-card.html',
  styleUrl: './create-new-card.css',
})
export class CreateNewCard {}
