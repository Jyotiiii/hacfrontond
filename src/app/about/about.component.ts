import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

    
  ngOnInit(): void {}
  ontractService: any;
  // showMsg: boolean = false;
  // dataget = [];
  // dataUrl = '';
  // errorMessage = '';

  about= new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    ContactNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),

    EmailAddress: new FormControl('', [Validators.required,Validators.minLength(3),]),

    Communication: new FormControl('', [Validators.required, Validators.minLength(3)]),

    Password: new FormControl('', [Validators.required, Validators.minLength(3)]),

    ConfirmPassword: new FormControl('', [Validators.required,Validators.minLength(3),]),

    // file: new FormControl('', [Validators.required]),
    // verifyfile: new FormControl('', [Validators.required]),

    // fileSource: new FormControl('', [Validators.required]),
  });

}
