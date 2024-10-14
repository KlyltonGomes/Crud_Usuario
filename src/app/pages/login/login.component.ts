import { Component} from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { Router, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,ButtonComponent,NgClass,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
textButton: string;
userName: string;

constructor(private rota: Router){}

login(){
  sessionStorage.setItem('user', this.userName);

  this.rota.navigate(['home'])

}
  
}
