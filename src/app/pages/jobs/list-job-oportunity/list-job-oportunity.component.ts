import { Component, ViewChild } from '@angular/core';

interface Job {
  id: number;
  title: string;
  location: string;
  department: string;
  postedDate: Date;
  description: string;
}

@Component({
  selector: 'app-list-job-oportunity',
  templateUrl: './list-job-oportunity.component.html',
  styleUrls: ['./list-job-oportunity.component.scss']
})
export class ListJobOportunityComponent {

  @ViewChild('#headernav') headernav: any;

  constructor(){}

  ngOnInit(): void {
    this.headernav.style.background = 'linear-gradient(135deg, #1EB2CC, #006EBC)';
  }
  
  jobs: Job[] = [
    
  ];

  selectedJob: Job | null = null;

  viewDetails(job: Job) {
    this.selectedJob = job;
  }

  closeDetails() {
    this.selectedJob = null;
  }
}
