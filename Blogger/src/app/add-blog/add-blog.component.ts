import { Component, OnInit } from "@angular/core";
import { JsonPipe } from '@angular/common';

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.component.html",
  styleUrls: ["./add-blog.component.css"]
})
export class AddBlogComponent implements OnInit {
  constructor() {}
  blogs = [];
  ngOnInit() {}

  addBlog(title, content) {
    let blog = { "title": title.value, "content": content.value };
    if(localStorage.getItem("blogs")){
      this.blogs = JSON.parse(localStorage.getItem("blogs"))
    }
    this.blogs.push(blog)
    localStorage.setItem("blogs",JSON.stringify(this.blogs))
    alert("Blog submitted");
  }
}
