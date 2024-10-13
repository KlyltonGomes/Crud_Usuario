import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from "../../pages/home/home.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatSidenavModule, HomeComponent,MatButtonModule,MatIcon,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
showFiller: any;

}
