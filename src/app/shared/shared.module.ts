//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Diseño

@NgModule({
  declarations: [],
  imports: [
    //Modulos
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    //Modulos
    FormsModule,
    ReactiveFormsModule
    //Diseño
  ]
})
export class SharedModule { }
