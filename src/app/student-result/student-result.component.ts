import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  student:any=[];
  constructor( private api:StudentService) { }

  ngOnInit(): void {
    this.student=this.api.getData();
  }



}
