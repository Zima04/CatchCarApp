import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {

  position: string;

  constructor(private fb: FormBuilder, private router: Router) {

  }

  public loginForm: FormGroup;

  ngOnInit() {
    console.log(localStorage.getItem('position'));
    this.position = localStorage.getItem('position');
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }

  ngAfterViewInit() {
    setTimeout(function () {
      document.getElementById('inner').style.opacity = '1';
    }, 100);

  }

  login() {
    console.log(this.loginForm.value);
    console.log(this.position);
    switch (this.position) {
      case 'водитель':
        this.router.navigate([`cabinet-driver`]);
        break;
      case 'пассажир':
        this.router.navigate([`cabinet-passenger`]);
        break;
    }

  }

  goToRegistrtion() {
    this.router.navigate([`/welcome-page/steps/registration`]);
  }

}
