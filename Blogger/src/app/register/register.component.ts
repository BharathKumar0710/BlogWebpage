import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name = new FormControl("");
  mail = new FormControl("");
  pass = new FormControl("");
  
  constructor(private http: HttpClient){}

  click() {
    let clicked = {
      myName: this.name.value,
      myMail: this.mail.value,
      pass: this.pass.value
    };
  }

  reset() {
    // this.http.post('http://localhost:4000/remove', { responseType: 'text' }).subscribe((res) => {
    //   console.log(res);
    this.http.get("https://jsonplaceholder.typicode.com/todos/1", {}).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
