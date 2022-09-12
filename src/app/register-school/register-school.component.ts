import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
  styleUrls: ['./register-school.component.css']
})
export class RegisterSchoolComponent implements OnInit {
  error_messages = {
    'Fname': [
      { type: 'required', message: 'First Name is required.' },
    ],

    'Lname': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'Username': [
      { type: 'required', message: 'username is required.' },
      { type: 'minlength', message: 'username length.' }
    ],

    'Password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'passwordNotMatch', message: 'password does not match' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'passwordNotMatch', message: 'password does not match.' }
    ],
    'passwordMatch': [
      { type: 'required', message: 'password does not match.' },]
  }

 
  constructor(private formBuilder: FormBuilder) { }

  // ngOnInit(): void {

  // }
    // constructor() { }

    ngOnInit(): void {

      this.registerschool = this.formBuilder.group({
        Fname: ['', Validators.required],
        Lname: ['', Validators.required],
        Username: ['', [Validators.required, Validators.email]],
        Password: ['', [Validators.required, Validators.minLength(6)]],
        confirmpassword: ['', Validators.required],
        Persona: ['', [Validators.required]],
  //  },
    }, {
        validator: this.MustMatch('Password', 'confirmpassword')
    });
    }
    ontractService: any;
    registerschool: FormGroup;
    submitted = false;



    // convenience getter for easy access to form fields
    get f() { return this.registerschool.controls; }

    // showMsg: boolean = false;
    // dataget = [];
    // dataUrl = '';
    // errorMessage = '';
    
  
  //   registerschool= new FormGroup({
  //     Fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
  //     Lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
  //     Username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
  //     Password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //     confirmpassword: new FormControl('', [Validators.required,Validators.minLength(3),]),

      
  //     Persona: new FormControl('', [Validators.required]),
  //  }, { 
  //    validator: this.MustMatch('Password', 'confirmpassword') }
  //   );
    password(formGroup: FormGroup) {
      const { value: password } = formGroup.get('Password');
      const { value: confirmPassword } = formGroup.get('confirmpassword');
      return password === confirmPassword ? null : { passwordNotMatch: true };
    }


    submit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerschool.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerschool.value))
      }
  //  submit() {
  //     const formData = new FormData();
  
  //     // formData.append('file', this.registerschool.get('fileSource').value);
  //     // formData.append('file', this.registerschool.get('arthur').value);
  //     // // formData.append('file',this.userForm.get('cts').value);
  //     // formData.append('file', this.userForm.get('description').value);
  //     console.log("-----data------",this.registerschool);
  //   this.password;
  
  //     // this.http.post('http://localhost:1869/api/v1/erc/FileHash', formData)
  
  //     //   .subscribe((res) => {
  //     //     console.log(res);
  
  //     //     alert('Uploaded Successfully.');
  //     //   });
  //   }
  //   // Verifysubmit() {
    //   const formData = new FormData();
  
    //   formData.append('file', this.userForm.get('fileSource').value);
  
    //   console.log(this.userForm);
  
    //   this.http
    //     .post('http://localhost:1869/api/v1/erc/FileVerification', formData)
  
    //     .subscribe((res) => {
    //       console.log('verified', res['result'].fileVerification);
    //       if (res['result'].fileVerification == true) {
    //         alert('verified Successfully ');
    //       } else {
    //         alert('verified UnSuccessfully.');
    //       }
    //     });
    // }


    MustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
  
          if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
              // return if another validator has already found an error on the matchingControl
              return;
          }
  
          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
}
