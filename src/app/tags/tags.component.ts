import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Output() tagChange = new EventEmitter();
  tags: string[] = [];
  tag: string = '';

  constructor() { }

  ngOnInit() {
  }

  pushTag(tag) {
    if (tag) this.tags.push(tag);
    this.tagChange.emit(this.tags);
    this.tag = '';
  }

  removeTag() {
    if (!this.tag) {
      this.tags.pop();
    }
  }

  

}
