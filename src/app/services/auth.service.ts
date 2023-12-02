import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string):void {
    localStorage.setItem('token',token);
  }


  getToken(): string | null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken()!==null;
  }

  logout(){
    localStorage.removeItem('token');
    inject(Router).navigate(['/']);
  }

  login({email, password}:any): Observable<any>{
    if(email === 'admin@hungersaviourportal.com' && password === 'Admin@123'){
      this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      return of({name: 'Admin', email: 'admin@hungersaviourportal.com'});
    }
    return throwError(() => new Error('Invalid Credentials'));
  }
}
