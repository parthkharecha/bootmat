import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { AuthGuard } from '../_helpers';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  // { path: 'customer-list', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  // { path: 'orders-list', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
//   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
