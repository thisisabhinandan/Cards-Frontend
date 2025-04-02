import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import {CreateCardComponent} from "./components/create-card/create-card.component";
import {DeleteCardComponent} from "./components/delete-card/delete-card.component";
import {FetchCardComponent} from "./components/fetch-card/fetch-card.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'create', component:CreateCardComponent},
  {path:'delete', component:DeleteCardComponent, canActivate: [AuthGuard]},
  {path:'fetch', component:FetchCardComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/create', pathMatch: 'full' }, // Redirect to create-card
  { path: '**', redirectTo: '/create' } // Redirect unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
