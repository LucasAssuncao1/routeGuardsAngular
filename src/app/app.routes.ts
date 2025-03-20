import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';
import { canActiveGuard } from './shared/guards/can-active.guard';
import { canDeactiveGuard } from './shared/guards/can-deactive.guard';
import { canLoadGuard } from './shared/guards/can-load.guard';
import { canActiveChildGuard } from './shared/guards/can-active-child.guard';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'account',
        component: AccountComponent,
        canActivate: [canActiveGuard],
        canDeactivate: [canDeactiveGuard]
    },
    {
      path:'core',
      loadChildren: () => import('./core/core.module').then( (m) => m.CoreModule),
      canMatch: [canLoadGuard],
      canActivateChild: [canActiveChildGuard]
  },
];
