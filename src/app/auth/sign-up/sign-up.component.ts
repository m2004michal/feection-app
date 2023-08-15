import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { SignupRequestPayload } from './signup-request.payload';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
    
  signupRequestPayload: SignupRequestPayload;
  signupForm: FormGroup;

  constructor(private authService: AuthService) {
    this.signupRequestPayload = {
      email: '',
      username: '',
      password: '',
      phoneNumber: ''
    };

  }

  ngOnInit(){
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      phoneNumber: new FormControl('' , Validators.required),
      email: new FormControl('' , [Validators.required, Validators.email]),
      password: new FormControl('' , Validators.required)

    })
  }

  signup(){
    this.signupRequestPayload.email = this.signupForm.get('email')?.value;
    this.signupRequestPayload.username = this.signupForm.get('username')?.value;
    this.signupRequestPayload.password = this.signupForm.get('password')?.value;
    this.signupRequestPayload.phoneNumber = this.signupForm.get('phoneNumber')?.value;
    
    this.authService.signup(this.signupRequestPayload)
      .subscribe(data => {
        console.log(data);
      })
  
  
  }

}
