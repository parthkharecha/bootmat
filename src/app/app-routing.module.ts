import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  // { path: 'customer-list', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  // { path: 'orders-list', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
  
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
