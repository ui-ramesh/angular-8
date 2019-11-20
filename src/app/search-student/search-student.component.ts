import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {
  parentMessage = "message  from parent to chilld"
  message :string;
  constructor() { }
  receiveMessage($event) {
    this.message = $event
  }
ngOnInit() { 
  
}

}
