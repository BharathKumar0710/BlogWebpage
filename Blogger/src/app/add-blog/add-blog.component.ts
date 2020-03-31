import { Component, OnInit } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-blog",
  templateUrl: "./add-blog.component.html",
  styleUrls: ["./add-blog.component.css"]
})
export class AddBlogComponent implements OnInit {
  data: any;
  blogs = [];
  RemoveBlog: boolean = false;
  BlogTitle = new FormControl("");
  BlogContent = new FormControl("");

  constructor(private http: HttpClient) {
    this.http
      .get("http://localhost:4000/sample", { responseType: "text" })
      .subscribe(data => {
        console.log(data);
      });
  }

  // click() {
  //   let clicked = {
  //     title: this.BlogTitle.value,
  //     content: this.BlogContent.value
  //   };
  //   localStorage.setItem("localStorage", JSON.stringify(clicked));
  //   this.data = JSON.parse(localStorage.getItem("localStorage"));
  //   this.save(clicked);
  // }
  // save(clicked) {
  //   this.http.post("http://localhost:4000/submit", clicked).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // click() {
  //   let clicked = {
  //     myTitle: this.BlogTitle.value,
  //     myContent: this.BlogContent.value,
  //   };
  //   // localStorage.setItem("localStorage", JSON.stringify(clicked));
  //   // this.data = JSON.parse(localStorage.getItem("localStorage"));
  //   // this.hide = true;
  //   // this.save(clicked);
  // }

  // remove() {
  //   this.hide = false;
  //   // this.http.post('http://localhost:4000/remove', { responseType: 'text' }).subscribe((res) => {
  //   //   console.log(res);
  //   this.http.get('http://localhost:4000/remove',{}).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  ngOnInit() {}

  // addBlog(title, content) {
  //   let blog = { "title": title.value, "content": content.value };
  //   if (localStorage.getItem("blogs")) {
  //     this.blogs = JSON.parse(localStorage.getItem("blogs"));
  //   }
  //   this.blogs.push(blog);
  //   localStorage.setItem("blogs", JSON.stringify(this.blogs));
  //   title.value = "";
  //   content.value = "";
  //   alert("Blog submitted");
  // }
}
