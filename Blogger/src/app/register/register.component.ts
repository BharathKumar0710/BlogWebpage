import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  data: any;
  myName: string;
  myMail: string;
  passw: string;

  constructor(private http: HttpClient) {}

  submitLogin() {
  
    let formData = {
      name: this.myName,
      mail : this.myMail,
      password: this.passw
    }

    console.log("logindart", formData);
     localStorage.setItem("localStorage", JSON.stringify(formData));
     this.data = JSON.parse(localStorage.getItem("localStorage"));
     this.save(this.data);
  }

  save(loginData) {
    this.http
      .post("http://localhost:4000/submit", loginData)
      .subscribe(data => {
        console.log(data);
      });
  }

  reset() {
    // this.http.post('http://localhost:4000/remove', { responseType: 'text' }).subscribe((res) => {
    //   console.log(res);
    this.http.get("http://localhost:4000/reset", {}).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
