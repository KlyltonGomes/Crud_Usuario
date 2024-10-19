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
    
    
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})


export class CrudComponent {
displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
dataSource = new MatTableDataSource<User>();



applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
@Input() iconeName?: string;

}

