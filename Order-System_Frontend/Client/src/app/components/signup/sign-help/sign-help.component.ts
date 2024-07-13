import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-help',
  templateUrl: './sign-help.component.html',
  styleUrls: ['./sign-help.component.scss']
})
export class SignHelpComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
