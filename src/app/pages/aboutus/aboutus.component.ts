import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {

  @ViewChild('#headernav') headernav: any;

  constructor() { }

  ngOnInit(): void {
    this.headernav.style.background = 'linear-gradient(135deg, #1EB2CC, #006EBC)';
  }

}
