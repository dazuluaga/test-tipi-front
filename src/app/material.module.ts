import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations:[

  ],
  exports:[
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  imports: [
    CommonModule
  ],
})
export class MaterialModule { }
