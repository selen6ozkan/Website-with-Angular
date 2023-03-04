import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [

  {path:'home',component:MainComponent},
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
