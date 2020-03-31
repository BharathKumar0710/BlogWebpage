import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  blogs = [];
  ngOnInit() {
    // this.blogs = localStorage.getItem("localStorage");
    // console.log(this.blogs);
    this.getblog();
  }

  getblog(){
    console.log('bloglist');
  }
  removeBlog(blog){
    let index = this.blogs.indexOf(blog)
    this.blogs.splice(index, 1);
    localStorage.setItem("localStorage", JSON.stringify(this.blogs));
  }

}
