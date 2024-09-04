import { Component, ViewChild } from '@angular/core';
import { startWith, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  // u can rename class names
title = 'employeecrudapplication';
  company="";

}
