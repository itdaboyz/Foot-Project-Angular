import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideComponent } from './side/side.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {path:'side', component: SideComponent},
  {path:'main', component: MainComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }