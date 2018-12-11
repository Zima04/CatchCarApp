import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ImageUploaderOptions} from 'ngx-image-uploader';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, AfterViewInit {

  options: ImageUploaderOptions = {
    thumbnailHeight: 100,
    thumbnailWidth: 100,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  constructor(private fb: FormBuilder, private router: Router,private httpService: HttpService) {

  }

  public editForm: FormGroup;

  ngOnInit() {
    this.httpService.getSelectDriverInfo(1).subscribe(res => {
      this.editForm.get('name').setValue(res[0].user.ruName);
      this.editForm.get('phone').setValue(res[0].user.phone);
    });
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngAfterViewInit() {
    const button = document.getElementsByClassName('add-image-btn');
    const textnode = document.createTextNode('+');
    setTimeout(function () {
      document.getElementById('inner').style.opacity = '1';
      while (button[0].childNodes[0].firstChild) {
        button[0].childNodes[0].removeChild(button[0].childNodes[0].firstChild);
      }
      button[0].childNodes[0].appendChild(textnode);
    }), 100;
  }

  onUpload(file) {
    console.log(file.response);
  }

}

