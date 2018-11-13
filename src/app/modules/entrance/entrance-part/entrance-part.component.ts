import {Component, OnInit} from '@angular/core';
import {ENTRACE_PAGE_CONST} from './entrance-part.meta';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-entrance-page',
  templateUrl: './entrance-part.component.html',
  styleUrls: ['./entrance-part.component.scss']
})
export class EntrancePartComponent implements OnInit {
  constants: any = ENTRACE_PAGE_CONST;
  private subscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  choosePosition(position: string) {
    console.log(position);
    localStorage.setItem('position', position);
    this.router.navigate([`/welcome-page/steps/login`]);
  }

}
