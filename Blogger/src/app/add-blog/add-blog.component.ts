import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.component.html",
  styleUrls: ["./add-blog.component.css"]
})
export class AddBlogComponent implements OnInit {
  constructor() {}
  blog = [];
  ngOnInit() {}

  addBlog(title: { value: any }, content: { value: any }) {
    let blog = { title: title.value, content: content.value };
    
    alert("Blog submitted");
  }
}
