import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-past-help',
  templateUrl: './past-help.component.html',
  styleUrls: ['./past-help.component.scss']
})
export class PastHelpComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
