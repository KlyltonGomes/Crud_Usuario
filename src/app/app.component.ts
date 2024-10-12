import { Component } from '@angular/core';
import { LoginComponent } from "./pages/login/login.component";
import { ButtonComponent } from "./components/button/button.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, ButtonComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud_usuario';
}
