import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  blogs : any=[];
  data: any;
  title: string;
  content: string;
  bolgDetails: any;

  ngOnInit() {
    // this.blogs = localStorage.getItem("localStorage");
    // console.log(this.blogs);
    this.getblog();
  }

  getblog() {
    this.http.get("http://localhost:4000/blogdetails").subscribe((data) => {
      console.log("blog details", data);
      this.blogs = data;
      // this.bolgDetails.forEach((det, index) => {
      //   console.log("detail_" + index, det.BlogName , det.BlogContent);
      // });
    });
  }

  removeBlog(blog) {
    console.log('current blog',blog);
    // let index = this.blogs.indexOf(blog);
    // this.blogs.splice(index, 1);
    // localStorage.setItem("localStorage", JSON.stringify(this.blogs));
  }
}
