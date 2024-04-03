import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  form = {
    email:'',
    password:''
  }
  constructor(
    private router :Router,
  ) { }

  ngOnInit() {


    // console.log('Hello SignInPage Page');
  }

  onSubmit() {
    localStorage.setItem('email',this.form.email);
    localStorage.setItem(' password',this.form.password);

    console.log('email anda adalah :'+this.form.email);
    console.log('password anda adalah :' + this.form.password);
    this.router.navigate(['/home']);
  }
}
