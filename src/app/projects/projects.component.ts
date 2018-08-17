import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project/project.model';
import { Company } from '../company/company.model';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';

library.add(faPlus, faChevronRight, faBuilding);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  searchTerm: string;
  projects: Project[];
  companies: Company[];
  count: number;
  loading: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
    this.count = this.projectsService.count;
  }

  onSearchChange(e){
    this.searchTerm = e;
  }

  loadMore(){
    this.loading = true;
    this.projectsService.getAll().subscribe(
      (result) => {
        this.loading = false;
        this.projects = this.projectsService.projects;
        this.count = this.projectsService.count;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    )
  }

}
