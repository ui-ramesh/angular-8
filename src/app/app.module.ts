import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule, MatSelectModule } from '@angular/material';
import { SearchStudentComponent } from './search-student/search-student.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentDetailDialogComponent } from './student-detail-dialog/student-detail-dialog.component';
import { ChildSearchComponent } from './search-student/child-search/child-search.component';
import { FormStudnetComponent } from './form-studnet/form-studnet.component';
;

@NgModule({
  declarations: [
    AppComponent,
    HeroImgComponent,
    DashBoardComponent,
    SearchStudentComponent,
    StudentDetailDialogComponent,
    ChildSearchComponent,
    FormStudnetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule ,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule
    
  
],
  entryComponents:[StudentDetailDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
