import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from "../../pages/home/home.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { MatTabsModule } from '@angular/material/tabs';
import { NgClass } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatSidenavModule,
    HomeComponent,
    MatButtonModule,
    MatIcon,
    RouterLink,
    RouterOutlet,
    ButtonComponent,
    MatTabsModule,
    NgClass,
    MatProgressSpinner,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
showFiller: any;
@Input() size: string= '100';

userName: string;

constructor(){ }

ngOnInit(){
  this.userName = sessionStorage.getItem('user') || '';
}



}
