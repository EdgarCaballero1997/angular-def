import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  public user: User;
  
  public name: string;
  public last_name: string;
  public email: string;
  public url: string;

  constructor(){
    this.user = new User(this.name, this.last_name, this.email);
  }

  infoInputs(name: string, last_name: string, email: string, url: string){
    this.user.name = name;
    console.log(this.user.name);
    this.user.last_name = last_name;
    this.user.email = email;
    this.url = url;         // No hay un atributo "URL" en la clase User, no sé qué es exactamente lo que debo hacer, pero hasta que 
                            // pida ayuda a algún profesor voy a almacenar la URL en un atributo de la clase "ProfileComponent".
  }
}
