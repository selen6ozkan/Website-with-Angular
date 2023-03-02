import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'notification',component:ErrorComponent},
  {path:'message',component:ErrorComponent},
  {path:'user',component:ErrorComponent},
  {path:'compass',component:ErrorComponent},
  {path:'profile',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
