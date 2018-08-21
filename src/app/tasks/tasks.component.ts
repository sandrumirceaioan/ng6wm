import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faBuilding } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faChevronRight, faBuilding);

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(e){
    this.searchTerm = e;
  }

}
