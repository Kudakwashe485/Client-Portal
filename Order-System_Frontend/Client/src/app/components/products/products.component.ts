import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { LogoutConfirmationComponent } from '../login/logout-confirmation/logout-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductHelpComponent } from './product-help/product-help.component';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  orderForm: FormGroup; 

  constructor(
    private apiService: ApiService, 
    private fb: FormBuilder,  
    private auth: AuthService, 
    private userStore: UserStoreService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar ) {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      product: [null, Validators.required], 
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts()
  {
    this.apiService.getProducts().subscribe(result => {
      let productList:any[] = result
      productList.forEach((element) => {
        this.products.push(element)
        
      });
    })
  }


  clearForm(): void {
    this.orderForm.reset(); 
  }

  logout() {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.auth.signOut();
        this.snackBar.open('Logged out successfully', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'], 
        });
      }
    });
  }

  openHelpModal(field: string): void {
    const dialogRef = this.dialog.open(ProductHelpComponent, {
      width: '500px',
      data: { field } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
