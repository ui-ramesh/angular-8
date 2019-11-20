import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import {FormStudnetComponent} from  './form-studnet/form-studnet.component'


const routes: Routes = [
  { path: 'table', component: DashBoardComponent },
  { path: 'image', component: HeroImgComponent },
  {path: 'search', component: SearchStudentComponent},
  {path: 'form', component: FormStudnetComponent },
  
  { path: '', redirectTo: '/table', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
