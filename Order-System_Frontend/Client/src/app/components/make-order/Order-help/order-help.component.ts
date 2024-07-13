import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-help',
  templateUrl: './order-help.component.html',
  styleUrls: ['./order-help.component.scss']
})
export class OrderHelpComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
