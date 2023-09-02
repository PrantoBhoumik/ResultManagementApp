import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, Validators}from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      fullname:['',Validators.required,],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required,Validators.minLength(5)],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value).subscribe(rea=>{
      alert("Signup successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })

  }

}
