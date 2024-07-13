import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmationComponent } from '../login/logout-confirmation/logout-confirmation.component';
import { PastHelpComponent } from '../orders/past-help/past-help.component';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  products: Product[] = [];
  editProduct: Product = new Product();
  orderForm: FormGroup;
  submittingOrder = false;
  successMessage = '';
  total = 0;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required, this.noSpacesValidator]],
      lastName: ['', [Validators.required, this.noSpacesValidator]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      product: [null, Validators.required],
      productname: [{ value: '', disabled: true }],  
      quantity: [1, [Validators.required, Validators.min(1)]],
      address: ['', Validators.required],
      companyName: [''],
      apartment: [''],
      total: [{ value: 0, disabled: true }] 
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.apiService.GetProduct(params['id']).subscribe(res => {
        if (res) {
          this.editProduct = res as Product;
          if (this.orderForm && this.orderForm.controls['product'] && this.orderForm.controls['productname']) {
            this.orderForm.controls['product'].setValue(this.editProduct);
            this.orderForm.controls['productname'].setValue(this.editProduct.name);
            this.updateTotal(); 
          }
        } else {
          console.error('Product not found.');
        }
      }, error => {
        console.error('Error fetching product:', error);
      });
    });

    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts().subscribe(result => {
      this.products = result;
    });
  }

  updateTotal() {
    const product = this.orderForm.get('product')?.value;
    const quantity = this.orderForm.get('quantity')?.value;
    if (product && quantity) {
      this.total = product.price * quantity;
      this.orderForm.controls['total'].setValue(this.total); 
    } else {
      this.total = 0;
      this.orderForm.controls['total'].setValue(0); 
    }
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.submittingOrder = true;

      const formData = new FormData();
      formData.append('firstName', this.orderForm.get('firstName')!.value);
      formData.append('lastName', this.orderForm.get('lastName')!.value);
      formData.append('contactNumber', this.orderForm.get('contactNumber')!.value);
      formData.append('email', this.orderForm.get('email')!.value);
      formData.append('address', this.orderForm.get('address')!.value);

      const product = this.orderForm.get('product')!.value;
      formData.append('productname', this.orderForm.get('productname')!.value);

      formData.append('quantity', this.orderForm.get('quantity')!.value.toString());
      formData.append('price', product ? product.price.toString() : '0'); 
      formData.append('total', this.orderForm.get('total')!.value.toString());

      console.log('Form data:', formData); 

      this.apiService.addOrder(formData).subscribe(
        () => {
          this.clearForm();
          this.successMessage = 'Order submitted successfully!';
          this.submittingOrder = false;
          setTimeout(() => {
            this.successMessage = '';
            this.router.navigateByUrl('products');
          }, 5000);
        },
        (error) => {
          console.error('Error submitting order:', error);
          this.submittingOrder = false;
        }
      );
    }
  }

  placeOrder() {
    this.onSubmit();
  }

  clearForm() {
    this.orderForm.reset();
  }

  noSpacesValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim().length === 0) {
      return { 'noSpaces': true };
    }
    return null;
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

  validateSouthAfricanNumber(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    const isAllZeros = /^0+$/.test(value);

    if (isAllZeros) {
      return { 'allZeros': true };
    }
    return null;
  }

  openHelpModal(field: string): void {
    const dialogRef = this.dialog.open(PastHelpComponent, {
      width: '500px',
      data: { field }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

