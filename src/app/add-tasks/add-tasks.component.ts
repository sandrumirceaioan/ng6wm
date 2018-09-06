import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project.model';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../shared/services/projects/projects.service';
import { Router } from '@angular/router';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { TasksService } from '../shared/services/tasks/tasks.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../users/user.model';
import { UsersService } from '../shared/services/users/users.service';

library.add(faChevronLeft);

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {
  task = {};
  projects: Project[];
  users: User[];
  myOptions: INgxMyDpOptions;

  constructor(
    private projectsService: ProjectsService,
    private tasksService: TasksService,
    private usersService: UsersService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  

  ngOnInit() {
    // datepicker options
    this.myOptions = {
      dateFormat: 'yyyy-mm-dd',
      sunHighlight: true,
      satHighlight: true
    };

    this.projects = this.projectsService.projects;
    this.users = this.usersService.users;
    this.task['taskProjectId'] = null;
    this.task['taskAssignedTo'] = null;
    this.task['taskDifficulty'] = null;
    this.task['taskDraft'] = false;
  }

  onSubmit(){
    this.task.taskAssignedToId = this.task.taskAssignedTo._id;
    this.task.taskAssignedToName = this.task.taskAssignedTo.username;
    this.tasksService.add(this.task).subscribe(
      (result) => {
        this.toastr.success('task added');
        if (result) this.router.navigate(['/manage/tasks']);
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  back() {
    this.router.navigate(['/manage/tasks']);
  }

}
