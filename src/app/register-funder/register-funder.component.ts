import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-funder',
  templateUrl: './register-funder.component.html',
  styleUrls: ['./register-funder.component.css']
})
export class RegisterFunderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  ontractService: any;
  // showMsg: boolean = false;
  // dataget = [];
  // dataUrl = '';
  // errorMessage = '';

  registerfunder= new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    ContactNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),

    EmailAddress: new FormControl('', [Validators.required,Validators.minLength(3),]),

    Username: new FormControl('', [Validators.required, Validators.minLength(3)]),

    Password: new FormControl('', [Validators.required, Validators.minLength(3)]),

    ConfirmPassword: new FormControl('', [Validators.required,Validators.minLength(3),]),

    // file: new FormControl('', [Validators.required]),
    // verifyfile: new FormControl('', [Validators.required]),

    // fileSource: new FormControl('', [Validators.required]),
  });

}
