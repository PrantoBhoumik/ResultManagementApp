import { Component, OnInit } from '@angular/core';
import{ FormBuilder,FormGroup, Validators} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { TeacherModel } from './teacher-dashboard.model';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
 formValue!: FormGroup;
 studentData!:any;
 
 showUpdate!:boolean;
 showAdd!:boolean;
 teacherModelObj:TeacherModel=new TeacherModel();
  constructor(private formbuilder:FormBuilder,private api:ApiService,public auth:AuthService) {  }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      name:['',Validators.required],
      rollNumber:['',Validators.required],
      dateOfBirth:['',Validators.required],
      score:['',Validators.required]
      
    })
    this.getAllStudents();
  }
  clickAddStudent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postStudentDetails(){

    this.teacherModelObj.name=this.formValue.value.name;
    this.teacherModelObj.rollNumber=this.formValue.value.rollNumber;
    this.teacherModelObj.dateOfBirth=this.formValue.value.dateOfBirth;
    this.teacherModelObj.score=this.formValue.value.score;

    this.api.postStudent(this.teacherModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Student Added Successfully")
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllStudents();
    }
    )
 }
 getAllStudents(){
  this.api.getStudent().subscribe(res=>{
    this.studentData=res;
  })
 }
 deleteStudent(student:any){
  this.api.deleteStudent(student.id).subscribe(res=>{
    console.log(res);
    alert("Student deleted Successfully")
    this.getAllStudents();
  })
 }
 onEdit(student:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.teacherModelObj.id=student.id;
  this.formValue.controls['name'].setValue(student.name);
  this.formValue.controls['rollNumber'].setValue(student.rollNumber);
  this.formValue.controls['dateOfBirth'].setValue(student.dateOfBirth);
  this.formValue.controls['score'].setValue(student.score);
 }
 updateStudentDetails(){
    this.teacherModelObj.name=this.formValue.value.name;
    this.teacherModelObj.rollNumber=this.formValue.value.rollNumber;
    this.teacherModelObj.dateOfBirth=this.formValue.value.dateOfBirth;
    this.teacherModelObj.score=this.formValue.value.score;
    this.api.updateStudent(this.teacherModelObj,this.teacherModelObj.id).subscribe(res=>
      {
        alert("student updated succesfully");
        let ref =document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllStudents();
      })
 }

}
