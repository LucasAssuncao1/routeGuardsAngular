import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';
import { canActiveGuard } from './shared/guards/can-active.guard';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'account',
        component: AccountComponent,
        canActivate: [canActiveGuard]
    },
];
