import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hunger-saviour-ui';

  constructor(){
    console.log('app component called')
    inject(AuthService).logout()
    
  }
  
}
