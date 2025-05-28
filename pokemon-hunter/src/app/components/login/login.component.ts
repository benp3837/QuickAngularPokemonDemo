import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  //Need to dependency inject Router so we can switch component programmatically
  constructor(private router:Router, private http:HttpClient){}

  //These variables get filled by the user input in the pokedex html
  public username:string = "";
  public password:string = "";

  login(){
    console.log("In login")
    console.log(this.router)

    this.loginHttp(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login success:', response);
        this.router.navigate(['/welcome']);
      },
      error: (err) => {
        alert("Username or Password are incorrect")
      }
    })

    if(this.username === "username" && this.password === "password"){
      this.router.navigate(["/welcome"])
    } else {
      alert("Username or Password are incorrect")
    }
  }

  //Can define our Observable-returning method here, since it's not really gonna be reused anywhere
  //But it would still be fine to make a Service for it - good for modularity and standardization! 
  loginHttp(username:string, password:string): Observable<any> {
    return this.http.post("http://localhost:8080/auth", {username, password})  
  }


}
