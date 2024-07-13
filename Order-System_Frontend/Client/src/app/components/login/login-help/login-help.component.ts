import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-help',
  templateUrl: './login-help.component.html',
  styleUrls: ['./login-help.component.scss']
})
export class LoginHelpComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
