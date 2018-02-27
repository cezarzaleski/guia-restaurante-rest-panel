import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { EvaluationComponent } from './dashboard/evaluation.component';

import { DishesComponent } from './dishes.component';
import { PasswordComponent } from './password.component';
import { EditComponent } from './edit.component';
import { ProfileComponent } from './profile.component';
import { EditDisheComponent } from './dishes/edit-dishe.component';
import { NewDisheComponent } from './dishes/new-dishe.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'evaluation/:id', component: EvaluationComponent }
        ]
    },
    { path: 'dishes', component: DishesComponent,
        children: [
            { path: 'new', component: NewDisheComponent },
            { path: 'edit/:id', component: EditDisheComponent },
        ]
    },
    { path: 'dishes', component: DishesComponent },
    { path: 'password', component: PasswordComponent },
    { path: 'edit', component: EditComponent },
    { path: 'profile', component: ProfileComponent },
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        DishesComponent,
        PasswordComponent,
        EditComponent,
        ProfileComponent,
        EditDisheComponent,
        NewDisheComponent,

    ]
})
export class RestaurantsModule {}