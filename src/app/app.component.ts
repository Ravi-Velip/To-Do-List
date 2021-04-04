import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //component for html file
  styleUrls: ['./app.component.css',], // component used for css file
})
export class AppComponent {

  // added empty array for a division
  public items = [];

  // pushes text on division
  public newTask;


  // empty input will not create a division
  public addToList() {
    if (this.newTask == '') {
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  //  For Deletion
  public deleteTask(index) {
    this.items.splice(index, 1);
  }
}