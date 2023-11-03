import { Injectable } from '@angular/core';
import student from '.';
import {HttpClient} from '@angular/common/http';
import{map}from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 studentList:any[]=student;
  constructor(private http: HttpClient) { }
  postStudent(data:any){
    return this.http.post<any>("http://localhost:3000/studentDetails",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getStudent(){
    // return this.http.get<any>("http://localhost:3000/studentDetails")
   // .pipe(map((res:any)=>{
     //return res;
    return 
    }))
  }
  updateStudent(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/studentDetails/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/studentDetails/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
