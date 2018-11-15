import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registrtion-page.component.html',
  styleUrls: ['./registrtion-page.component.scss']
})
export class RegistrtionPageComponent implements OnInit, AfterViewInit {

  position: string;

  constructor(private fb: FormBuilder) {

  }

  public loginForm: FormGroup;

  ngOnInit() {
    console.log(localStorage.getItem('position'));
    this.position = localStorage.getItem('position');
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });

  }

  ngAfterViewInit() {
    setTimeout(function () {
      document.getElementById('inner').style.opacity = '1';
    }, 100);
  }

  registration() {
    console.log(this.loginForm.value);
  }
}
