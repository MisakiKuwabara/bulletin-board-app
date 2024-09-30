import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RegisterComponent } from "./register/register.component";

const routeConfig: Routes = [
    {
      path: '',
      component: SignInComponent,
      title: 'Sign in',
    },
    {
      path: 'app-register',
      component: RegisterComponent,
      title: 'Resister',
    },
    {
      path: 'app-post',
      component: PostComponent,
      title: 'Post'
    }
  ];
  
  export default routeConfig;