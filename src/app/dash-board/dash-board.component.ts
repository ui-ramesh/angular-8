import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { tableColumn } from './tableColum';
import { StudentService } from '../service/student.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { StudentDetailDialogComponent } from '../student-detail-dialog/student-detail-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})

export class DashBoardComponent implements OnInit, AfterViewInit, OnDestroy {

  dataSource = new MatTableDataSource;
  tableCol: tableColumn = new tableColumn();
  columns = this.tableCol.columns;
  // arrat destructuring
  displayedColumns = [...this.columns.map(x => x.columnDef)];
  

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  active: string;
  loadingSubscription: Subscription
  constructor(
    private studentSvc: StudentService,
    private dialog: MatDialog,
  ) { }
 private errormsg: string;
 private error1 :boolean= false;
  ngOnInit() {
    this.loadStudentInfo();
    console.log('displayedColumns', [...this.columns.map(x => x.columnDef)]);
    this.error1= false;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadStudentInfo() {
    this.dataSource.data = [];
    this.loadingSubscription = this.studentSvc.studentInfo().subscribe(data => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
      this.error1= false;
  
    },
    error =>{
      this.error1= true;
      console.log(error);
     this.errormsg = error;
    }
    )}
  studentDetail(row) {
    console.log('row', row);
    this.dialog.open(StudentDetailDialogComponent, {
      width: '100vw',
     height: '100vw',
     maxWidth: '100vw',
     maxHeight: '100vh',
      data: row
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  ngOnDestroy() {
    console.log('the mat table  component is destroyed')
    this.loadingSubscription.unsubscribe();
  }

}
