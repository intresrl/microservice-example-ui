import { Component, OnInit } from '@angular/core';
import { I3way } from '../../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  get today(): Date {
    return new Date();
  }

  constructor(public i3way: I3way) {
  }

  ngOnInit() {
  }

}
