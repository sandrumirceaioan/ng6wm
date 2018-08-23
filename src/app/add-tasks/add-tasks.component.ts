import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project.model';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { Router } from '@angular/router';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { TasksService } from '../shared/services/tasks/tasks.service';

library.add(faChevronLeft);

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {
  task = {};
  projects: Project[];
  myOptions: INgxMyDpOptions;

  constructor(
    private projectsService: ProjectsService,
    private tasksService: TasksService,
    private router: Router
  ) { }
  

  ngOnInit() {
    // datepicker options
    this.myOptions = {
      dateFormat: 'yyyy-mm-dd',
      sunHighlight: true,
      satHighlight: true
    };

    this.projects = this.projectsService.projects;
    this.task['taskProject'] = null;
    this.task['taskDifficulty'] = null;
    this.task['taskDraft'] = false;
  }

  onSubmit(){
    console.log(this.task);

  }

  back() {
    this.router.navigate(['/manage/tasks']);
  }

}
