import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  blogs = [];
  data: any;
  title: string;
  content: string;

  ngOnInit() {
    // this.blogs = localStorage.getItem("localStorage");
    // console.log(this.blogs);
    // this.getblog(loginData);
  }

  // getblog(loginData) {
  //   this.http
  //     .get("http://localhost:4000/blogdetails", loginData)
  //     .subscribe(data => {
  //       console.log(data);
  //     });
  // }

  removeBlog(blog){
    let index = this.blogs.indexOf(blog)
    this.blogs.splice(index, 1);
    localStorage.setItem("localStorage", JSON.stringify(this.blogs));
  }

}
