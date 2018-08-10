import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project/project.model';
import { ProjectsService } from '../shared/services/projects/projects.service';

library.add(faPlus, faChevronRight, faBuilding);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  searchTerm: string;
  projects: Project[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
  }

  onSearchChange(e){
    this.searchTerm = e;
  }

}
