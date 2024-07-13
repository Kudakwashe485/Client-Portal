import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
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


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'make-order/:id', component:MakeOrderComponent, canActivate:[AuthGuard]},
  {path:'orders', component:OrdersComponent, canActivate:[AuthGuard]},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'past-help', component:PastHelpComponent, canActivate:[AuthGuard]},
  {path:'order-help', component:OrderHelpComponent, canActivate:[AuthGuard]},
  {path:'product-help', component:ProductHelpComponent, canActivate:[AuthGuard]},
  {path:'login-help', component:LoginHelpComponent},
  {path:'sign-help', component:SignHelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
