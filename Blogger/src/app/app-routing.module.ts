import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddBlogComponent } from "./add-blog/add-blog.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "add-blog",
    component: AddBlogComponent
  },
  {
    path: "",
    component: RegisterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
