import { NgClass } from '@angular/common';
import {Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-modal-form-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    NgClass,
    FormsModule,
   

  ],
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {

readonly dialog = inject(MatDialog);
nome: any;
email: any;
cargo: any;



openModalDialog() {
  const dialogRef = this.dialog.open(ModalFormUserComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
