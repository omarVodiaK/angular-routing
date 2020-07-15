import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {FooterOnlyLayoutComponent} from './footer-only-layout/footer-only-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import("../dashboard/dashboard.module").then(m => m.DashboardModule)},
      { path: 'users', loadChildren: () => import("../users/users.module").then(m => m.UsersModule) },
      { path: 'account-settings', children: [
       
        { 
          path: '', loadChildren: () => import("../account-settings/account-settings.module").then(m => m.AccountSettingsModule) 
        },
        { 
          path: 'registration', loadChildren: () => import("../registration/registration.module").then(m => m.RegistrationModule)
         }
        ]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
