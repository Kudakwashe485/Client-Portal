import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginHelpComponent } from './components/login/login-help/login-help.component';
import { LoginComponent } from './components/login/login.component';
import { MakeOrderComponent } from './components/make-order/make-order.component';
import { OrderHelpComponent } from './components/make-order/Order-help/order-help.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PastHelpComponent } from './components/orders/past-help/past-help.component';
import { ProductHelpComponent } from './components/products/product-help/product-help.component';
import { ProductsComponent } from './components/products/products.component';
import { SignHelpComponent } from './components/signup/sign-help/sign-help.component';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from './models/material.modules';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginHelpComponent,
    SignHelpComponent,
    MakeOrderComponent,
    OrdersComponent, 
    ProductsComponent,
    PastHelpComponent,
    OrderHelpComponent,
    ProductHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MaterialModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
