import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-schedule-apointment',
  templateUrl: './schedule-apointment.component.html',
  styleUrls: ['./schedule-apointment.component.scss']
})
export class ScheduleApointmentComponent {

   constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
 
  }
  
}
