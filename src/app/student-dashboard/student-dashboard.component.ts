import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../shared/student.service';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private api:StudentService) { }
  searchForm!:FormGroup;
  ngOnInit(): void {
    this.searchForm=this.formBuilder.group({
      dateOfBirth:['',Validators.required],
      rollNumber:['',Validators.required]
    })
  }
  searchStudent(){
    console.warn(this.searchForm);
    this.http.get<any>("http://localhost:3000/studentDetails").subscribe(res=>{
      const user=res.find((a:any)=>{
        return  a.dateOfBirth===this.searchForm.value.dateOfBirth && a.rollNumber===this.searchForm.value.rollNumber
      });
      console.warn(user);
      if(user){
        alert("Student Found Successfully");
        this.api.setData(user);
        this.router.navigate(['studentResult']);
        this.searchForm.reset();
        
      }else{
        alert("Student not found");
      }
    },err=>{
      alert("something went wrong!!");
    }
    )
  }

}
