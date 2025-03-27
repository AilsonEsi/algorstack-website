import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-software-dev',
  templateUrl: './custom-software-dev.component.html',
  styleUrls: ['./custom-software-dev.component.scss']
})
export class CustomSoftwareDevComponent {

  @ViewChild('#headernav') headernav: any;

  constructor(){}

  ngOnInit(): void {
    this.headernav.style.background = 'linear-gradient(135deg, #1EB2CC, #006EBC)';
  }

  softwareTypes = [
    { title: 'Enterprise Software', description: 'Scalable solutions for large businesses.', icon: 'bi bi-buildings' },
    { title: 'Mobile Apps', description: 'User-friendly mobile applications.', icon: 'bi bi-phone' },
    { title: 'E-commerce Platforms', description: 'Customized online store solutions.', icon: 'bi bi-bag-check' },
    { title: 'AI & Machine Learning', description: 'Intelligent automation and insights.', icon: 'bi bi-cpu' },
    { title: 'Cloud Solutions', description: 'Secure and scalable cloud-based systems.', icon: 'bi bi-cloud-check' },
    { title: 'IoT & Embedded Systems', description: 'Smart devices and connected technology.', icon: 'bi bi-broadcast' },
    { title: 'Blockchain & Security', description: 'Secure transactions and data protection.', icon: 'bi bi-shield-lock' },
    { title: 'Custom Web Apps', description: 'Highly functional and interactive web solutions.', icon: 'bi bi-window' },
    { title: 'Automation & RPA', description: 'Automating business processes for efficiency.', icon: 'bi bi-gear-wide-connected' }
  ];
}
