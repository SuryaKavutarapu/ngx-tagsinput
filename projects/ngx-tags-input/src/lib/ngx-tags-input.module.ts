import { NgModule } from '@angular/core';
import { NgxTagsInputComponent } from './ngx-tags-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NgxTagsInputComponent],
  exports: [NgxTagsInputComponent]
})
export class NgxTagsInputModule { }
