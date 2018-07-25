import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faProjectDiagram, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faBuilding, faProjectDiagram, faTasks, faUsers);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
