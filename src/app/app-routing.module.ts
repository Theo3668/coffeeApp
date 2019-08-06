import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'payment', loadChildren: './page/payment/payment.module#PaymentPageModule' }
  // { path: 'desc2', loadChildren: './page/desc2/desc2.module#Desc2PageModule' },
  // { path: 'desc3', loadChildren: './page/desc3/desc3.module#Desc3PageModule' },
  // { path: 'desc4', loadChildren: './page/desc4/desc4.module#Desc4PageModule' },
  // { path: 'desc5', loadChildren: './page/desc5/desc5.module#Desc5PageModule' },
  // { path: 'desc6', loadChildren: './page/desc6/desc6.module#Desc6PageModule' },
  // { path: 'desc7', loadChildren: './page/desc7/desc7.module#Desc7PageModule' },
  // { path: 'desc1', loadChildren: './page/desc1/desc1.module#Desc1PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
