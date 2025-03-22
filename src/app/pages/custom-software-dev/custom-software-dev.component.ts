import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-software-dev',
  templateUrl: './custom-software-dev.component.html',
  styleUrls: ['./custom-software-dev.component.scss']
})
export class CustomSoftwareDevComponent {
  softwareTypes = [
    {
      title: "Enterprise Software",
      description: "Advanced solutions for business automation and efficiency.",
      icon: "assets/icons/enterprise.svg"
    },
    {
      title: "Mobile Applications",
      description: "Custom iOS and Android apps tailored to your needs.",
      icon: "assets/icons/mobile-app.svg"
    },
    {
      title: "E-commerce Platforms",
      description: "Scalable online stores with secure payment integration.",
      icon: "assets/icons/ecommerce.svg"
    },
    {
      title: "CRM Systems",
      description: "Customer relationship management tools for sales & marketing.",
      icon: "assets/icons/crm.svg"
    },
    {
      title: "AI & Machine Learning",
      description: "Innovative AI-driven software for smart automation.",
      icon: "assets/icons/ai.svg"
    },
    {
      title: "IoT Solutions",
      description: "Smart device connectivity and automation solutions.",
      icon: "assets/icons/iot.svg"
    }
  ];
}
