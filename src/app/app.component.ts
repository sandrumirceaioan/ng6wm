import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

library.add(faBroom);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
