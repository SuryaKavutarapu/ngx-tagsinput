import { Component } from '@angular/core';

@Component({
  selector: 'tags-input-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TagsInputLibrary';

  getTags(ev: any) {
   console.log(ev);
  }
}
