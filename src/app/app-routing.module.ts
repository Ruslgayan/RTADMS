import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {HomeComponent} from './modules/home/home.component';
import {UserComponent} from './modules/user/user.component';
import {DocumentComponent} from './modules/document/document.component';
import {ClientComponent} from './modules/client/client.component';
import {AuthGuard} from './authentication/service/guards/auth.guard';
import {LoginComponent} from './authentication/component/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path: '',
      component: HomeComponent,
        pathMatch: 'full'
    },
      {
        path: 'user',
        component: UserComponent,
        pathMatch: 'full'
      },
      {
        path: 'document',
        component: DocumentComponent,
        pathMatch: 'full'
      },
      {
        path: 'client',
        component: ClientComponent,
        pathMatch: 'full'
      }]
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '**',
    redirectTo: '/',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
