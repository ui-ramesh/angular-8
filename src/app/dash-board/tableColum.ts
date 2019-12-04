import { CdkColumnDef } from '@angular/cdk/table';
import { Student } from '../model/student';

export class tableColumn {

columns  = [
    {
        columnDef: 'studnetName',
        header: 'Student Name',
        cell: (row: Student) => (row.studnetName? row.studnetName :'')
    },
    {
        columnDef: 'studnetId',
        header: 'Student Id',
        cell: (row: Student) => (row.studnetId? row.studnetId :'')
    },
    {
        columnDef: 'status',
        header: 'Status',
        cell: (row: Student) => (row.status? row.status :'')
    },
    {
        columnDef: 'creditThisTerm',
        header: 'Total Credit Completed',
        cell: (row: Student) => (row.creditThisTerm? row.creditThisTerm :'')
    },
    {
        columnDef: 'gradutationYear',
        header: 'Gradaute Date',
        cell: (row: Student) => (row.gradutationYear? row.gradutationYear :'')
    } 
    
 ]
}