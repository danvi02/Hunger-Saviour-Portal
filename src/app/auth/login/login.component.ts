import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public loginForm!:FormGroup;
  hide = true;


  constructor(private authService: AuthService, private router: Router){
    console.log('login component called')
    if(authService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('admin@hungersaviourportal.com', [Validators.required]),
      password: new FormControl('Admin@123', [Validators.required])
    });
  }

  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe({
      next: (v) => {console.log(v); this.router.navigate(['/dashboard'])},
      error: (e) => {console.log(e)}
    }
     
    )
  }

}
