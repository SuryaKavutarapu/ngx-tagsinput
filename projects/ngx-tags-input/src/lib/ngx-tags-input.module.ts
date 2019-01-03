import { NgModule } from '@angular/core';
import { NgxMultiTagsInputComponent } from './ngx-tags-input.component';
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
  declarations: [NgxMultiTagsInputComponent],
  exports: [NgxMultiTagsInputComponent]
})
export class NgxMultiTagsInputModule { }
