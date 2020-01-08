import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentDetailService } from '../service/student-detail.service';

@Component({
  selector: 'app-student-detail-dialog',
  templateUrl: './student-detail-dialog.component.html',
  styleUrls: ['./student-detail-dialog.component.scss']
})
export class StudentDetailDialogComponent implements OnInit {
  panelOpenState: boolean;
  studentDetails: any[];
  error1: boolean;
  errormsg: any;
  loadingSubscription: any;
  constructor(
    private studentDetailSvg: StudentDetailService,
    public dialogRef: MatDialogRef<StudentDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public DialogData) { }

  ngOnInit() {
    console.log('DialogData', this.DialogData);
    this.loadStudentDetailInfo();
    this.panelOpenState = false;
  }
  loadStudentDetailInfo() {
    this.loadingSubscription = this.studentDetailSvg.studentDetail().subscribe(data => {
      this.studentDetails = data;
      console.log(this.studentDetails);
      this.error1 = false;

    },
      error => {
        this.error1 = true;
        console.log(error);
        this.errormsg = error;
      }
    )
  }
  close() {
    this.dialogRef.close(true)
  }

}
