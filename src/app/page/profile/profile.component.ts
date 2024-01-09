import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  user: User = new User("", "", "", "https://i.pinimg.com/236x/70/71/71/707171e258b8e7a4f875d19aa8ca31ea.jpg", "");

  constructor(){
    
  }

  infoInputs(name: string, last_name: string, email: string, photo: string){
    if(name != "" && last_name != "" && email != "" && photo != "" ){
      this.user.name = name;
      this.user.last_name = last_name;
      this.user.email = email;
      this.user.photo = photo;
      console.log(this.user.name);
    }else{
      alert("Porfavor, introduce todos los campos");
    }
  }

}