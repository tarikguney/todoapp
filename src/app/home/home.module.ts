import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialDesignModule } from "../material-design/materialdesign.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ]
})
export class HomeModule { }
