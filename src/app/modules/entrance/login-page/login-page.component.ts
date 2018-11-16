import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {

  position: string;

  @ViewChild('checkbox')
  checkbox: ElementRef;

  constructor(private fb: FormBuilder, private router: Router) {

  }

  public loginForm: FormGroup;

  ngOnInit() {
    console.log(localStorage.getItem('position'));
    this.position = localStorage.getItem('position');
    this.loginForm = this.fb.group({
      phone: [localStorage.getItem('phone') || '', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  ngAfterViewInit() {
    setTimeout(function () {
      document.getElementById('inner').style.opacity = '1';
    }, 100);

  }

  login() {
    if (this.checkbox.nativeElement.value === 'on') {
      localStorage.setItem('phone', this.loginForm.value.phone);
    }
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
