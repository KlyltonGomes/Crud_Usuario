
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CrudComponent } from './pages/crud/crud.component';

export const routes: Routes = [
{ path:'' ,component: LoginComponent},
{ path:'login' ,component: LoginComponent},
{ path:'home' ,component: HomeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para 'home' por padrão
{ path: 'crud' , component: CrudComponent}
];
