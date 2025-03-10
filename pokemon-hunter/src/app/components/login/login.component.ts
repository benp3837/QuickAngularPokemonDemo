import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //Need to dependency inject Router so we can switch component programmatically
  constructor(private router:Router){

  }


  //These variables get filled by the user input in the pokedex html
  public username:string = "";
  public password:string = "";


  login(){
    console.log("In login")
    console.log(this.router)

    if(this.username === "user" && this.password === "password"){
      this.router.navigate(["/welcome"])
    } else {
      alert("Username or Password are incorrect")
    }
  }


}
