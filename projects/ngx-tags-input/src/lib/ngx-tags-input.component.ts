import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngxTagsInput',
  template: `
  <div>
  <div class="ngx-inputcontainer">
  <label class="ngx-tagslabel" for="tagsInput">{{label}} <span class="error" *ngIf="required">*</span></label>
  <input type="text" id="tagsInput" name="tagsInput" 
       class="ngx-tagsinput" autocomplete="off" placeholder="{{placeholder}}" (keydown)="inputTag($event)"
      />
  <small class="error" *ngIf="requiredState">
      {{errorMessage}}
  </small>
</div>
  <div class="ngx-tagscontainer">
  <span class="ngx-tag" *ngFor="let each of tags;">{{each}}
    <svg xmlns="http://www.w3.org/2000/svg"  (click)="removeTag(each)" width="20px" height="20px" viewBox="0 0 20 20"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h20v20H0z" fill="none"/></svg>
  </span>
  </div>
  `,
  styles: [`
    * {
      -webkit-font-smoothing: antialiased;
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif!important;
    }
   .ngx-tagscontainer{
     width: 100%;
     max-width: 100%;
   }
   
   .ngx-tag {
     color: #4a4a4a;
      background-color: #efefef;
     border: 2px solid #efefef;
     padding: 3px 8px;
     font-size: 16px;
     margin-right: 5px;
     border-radius: 2px;
     vertical-align: middle;
   }

   .ngx-tag svg {
     height: 15px;
     cursor: pointer;
     color: #6b6b6b;
   }
   
   .error {
     color: red;
   }
   
   .ngx-inputcontainer{
     margin: 10px 0px;
   }
   
   .ngx-tagslabel{
     margin-bottom: 5px;
     display: inline-block;
   }
   
   .ngx-tagsinput{
     all: unset;
     display: block;
     width: 100%;
     max-width: 100%;
     margin: 0px;
     height: 42px;
     border: 1px solid #cccccc;
     background-color: #ffffff;
     padding: 0px 15px;
     border-radius: 2px;
   }
   
   .ngx-tagsinput::placeholder{
     color: #6b6b6b;
   }`]
})
export class NgxTagsInputComponent implements OnInit {
  tags: any[];
  @Input()
  label: string;
  @Input()
  placeholder: string;
  @Input()
  class: string;
  @Input()
  required: boolean;
  @Input()
  errorMessage: string;
  @Output()
  output: EventEmitter<any[]> = new EventEmitter<any[]>();
  requiredState: boolean;
  constructor() {
    this.tags = [];
    this.errorMessage = 'Tags must not be empty.';
    this.label = 'Enter Tags'
    this.placeholder = 'Enter tags';
    this.requiredState =  this.required;
  }

  ngOnInit() {
  }
  public clearTags() {
    this.tags = [];
  }

  private removeTag(value: string) {
    const index = this.tags.indexOf(value);
    if (index !== -1) {
      this.tags.splice(index, 1);
    }
    this.output.emit(this.tags);
  }

  private inputTag(event: any) {
    if (event.key === 'Enter' || event.key === '13') {
      if (event.target.value !== '') {
        this.tags.push(event.target.value);
        event.target.value = '';
      } else {
        this.requiredState = true;
      }
      if(this.tags.length !== 0){
        this.requiredState = false;
        this.output.emit(this.tags);
      } else {
        this.requiredState = true;
      }
    }
  }

}
