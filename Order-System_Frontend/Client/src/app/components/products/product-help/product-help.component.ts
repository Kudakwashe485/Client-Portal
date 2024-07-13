import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-help',
  templateUrl: './product-help.component.html',
  styleUrls: ['./product-help.component.scss']
})
export class ProductHelpComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
