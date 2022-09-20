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
    loadChildren: () => import('./pages/Splash/loader/loader.module').then(m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Authentication/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/Authentication/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/Authentication/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/Authenticated/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/Authenticated/postad/postad.module').then(m => m.PostadPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/Front/mainscr/mainscr.module').then(m => m.MainscrPageModule)
  },
  {
    path: 'itm',
    loadChildren: () => import('./pages/Front/itmdetail/itmdetail.module').then(m => m.ItmdetailPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
