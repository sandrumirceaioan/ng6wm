import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project.model';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { Router } from '@angular/router';

library.add(faChevronLeft);

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {
  task = {};
  projects: Project[];
  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
    console.log( this.projects);
    this.task['taskProject'] = null;
  }

  back() {
    this.router.navigate(['/manage/tasks']);
  }

}
