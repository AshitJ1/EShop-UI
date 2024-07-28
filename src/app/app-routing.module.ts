import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../app/pages/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full',
  },

  {
    path: 'loader',
    loadChildren: () =>
      import('./pages/Splash/loader/loader.module').then(
        (m) => m.LoaderPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/Authentication/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/Authentication/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import(
        './pages/Authentication/forgot-password/forgot-password.module'
      ).then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/Authenticated/home/home.module').then(
        (m) => m.HomePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./pages/Authenticated/postad/postad.module').then(
        (m) => m.PostadPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/Shared/mainscr/mainscr.module').then(
        (m) => m.MainscrPageModule
      ),
  },
  {
    path: 'itm',
    loadChildren: () =>
      import('./pages/Shared/itmdetail/itmdetail.module').then(
        (m) => m.ItmdetailPageModule
      ),
  },
  {
    path: 'err',
    loadChildren: () =>
      import('./pages/Shared/err/err.module').then((m) => m.ErrPageModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/Shared/settings/settings.module').then(
        (m) => m.SettingsPageModule
      ),
  },

  {
    path: '**',
    redirectTo: 'err',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
