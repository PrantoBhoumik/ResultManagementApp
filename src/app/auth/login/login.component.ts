import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
   }) 
  }
  login(){
     // this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
     // const user=res.find((a:any)=>{
     //    return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
     // })
     // });
     if(this.loginForm.value.email == 'demo@gmail.com' && this.loginForm.value.password =='demo@123')
     {  
       const user= 
       { 
         id :1,
         email:'demo@gmail.com',
         password:'demo@123'
        }
      }
    
     if(user:any){
        alert("Login sucess");

        localStorage.setItem('token','fhsuighaeigii.khdfgaigai');
        this.loginForm.value.email=='teacher@gmail.com' ? localStorage.setItem('userType','teacher'):localStorage.setItem('userType','admin')

        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong!!");
    }
    )
  }
}
