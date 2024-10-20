import { Component, Input } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgClass } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../user';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    
    MenuComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
    ButtonComponent,
    MatTabsModule,
    MatTableModule,
    NgClass,
    MatProgressBarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ModalFormUserComponent,

    
    
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})


export class CrudComponent {

constructor(private _matDialog: MatDialog){}



openModalDialog(){
  this. _matDialog.open(ModalFormUserComponent,{ width:'400px', height:'475px'});
}
// Colunas exibidas na tabela
displayedColumns: string[] = ['id', 'name', 'cargo', 'email','action'];
// Criando uma fonte de dados com alguns dados de exemplo
dataSource = new MatTableDataSource<User>([
  {
    id: 1, name: 'joao', email: 'joao@gmail.com', cargo: 'Desenvolvedor',
    select: ''
  }
]);



applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
@Input() iconeName?: string;

}


