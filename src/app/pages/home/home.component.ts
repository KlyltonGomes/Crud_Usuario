import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuComponent, RouterOutlet, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
