import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-student-detail-dialog',
  templateUrl: './student-detail-dialog.component.html',
  styleUrls: ['./student-detail-dialog.component.scss']
})
export class StudentDetailDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StudentDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public  DialogData) { }

  ngOnInit() {
    console.log('DialogData', this.DialogData);
  }
  close(){
    this.dialogRef.close(true)
  }

}
