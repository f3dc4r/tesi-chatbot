import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from './_utility/Constants';
import { DashboardComponent } from './_layout/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, loadChildren: () => import('./_layout/dashboard.module').then(mod => mod.DashboardModule) },
  { path: Constants.Routing.NOT_FOUND.path, loadChildren: () => import('./not-found/not-found.module').then(mod => mod.NotFoundModule) },
  { path: '**', redirectTo: '/not_found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
