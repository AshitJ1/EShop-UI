import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
 
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'postad',
    loadChildren: () => import('./pages/postad/postad.module').then( m => m.PostadPageModule)
  },
  {
    path: 'mainscr',
    loadChildren: () => import('./pages/mainscr/mainscr.module').then( m => m.MainscrPageModule)
  },
  {
    path: 'itmdetail',
    loadChildren: () => import('./pages/itmdetail/itmdetail.module').then( m => m.ItmdetailPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
