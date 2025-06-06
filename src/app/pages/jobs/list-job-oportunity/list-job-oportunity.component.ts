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
    /*{
      id: 1,
      title: 'Frontend Developer',
      location: 'New York, NY',
      department: 'Engineering',
      postedDate: new Date('2025-06-01'),
      description: 'Develop and maintain UI components in Angular.'
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'Remote',
      department: 'Product',
      postedDate: new Date('2025-05-28'),
      description: 'Lead cross-functional teams to deliver features.'
    },
    {
      id: 3,
      title: 'HR Specialist',
      location: 'London, UK',
      department: 'Human Resources',
      postedDate: new Date('2025-05-20'),
      description: 'Manage hiring and onboarding processes.'
    }*/
  ];

  selectedJob: Job | null = null;

  viewDetails(job: Job) {
    this.selectedJob = job;
  }

  closeDetails() {
    this.selectedJob = null;
  }
}
