import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CatchComponent } from './components/catch/catch.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {
        path:"",
        component:LoginComponent
    },

    {
        path:"welcome",
        component:WelcomeComponent
    },

    {
        path:"catch",
        component:CatchComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }