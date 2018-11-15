import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ImageUploaderOptions} from 'ngx-image-uploader';

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

  constructor(private fb: FormBuilder, private router: Router) {

  }

  public editForm: FormGroup;

  ngOnInit() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngAfterViewInit() {
    const button = document.getElementsByClassName('add-image-btn');
    const textnode = document.createTextNode('Добавить');
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

