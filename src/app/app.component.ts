import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {
  ontractService: any;
  // showMsg: boolean = false;
  // dataget=[];
  // dataUrl='';
  // errorMessage = '';

  // userForm = new FormGroup({

  //   createdBy: new FormControl('', [Validators.required, Validators.minLength(3)]),


  //   // cts: new FormControl('', [Validators.required, Validators.minLength(3)]),

  //   uts: new FormControl('', [Validators.required, Validators.minLength(3)]),

  //   file: new FormControl('', [Validators.required]),
  //   verifyfile: new FormControl('', [Validators.required]),

  //   fileSource: new FormControl('', [Validators.required])

  // });

  constructor(private http: HttpClient) { }

  // get f(){

  //   return this.userForm.controls;

  // }

  // onFileChange(event) {

  //   if (event.target.files.length > 0) {

  //     const file = event.target.files[0];

  //     this.userForm.patchValue({

  //       fileSource: file

  //     });

  //   }

  // }
  

  // submit(){

  //   const formData = new FormData();

  //   formData.append('file', this.userForm.get('fileSource').value);
  //   formData.append('file',this.userForm.get('createdBy').value);
  //   // formData.append('file',this.userForm.get('cts').value);
  //   formData.append('file',this.userForm.get('uts').value)
  //   console.log(this.userForm)

  //   this.http.post('http://localhost:1869/api/v1/erc/FileHash', formData)

  //     .subscribe(res => {

  //       console.log(res);

  //       alert('Uploaded Successfully.');

  //     })

  // }

  // Verifysubmit(){

  //   const formData = new FormData();

  //   formData.append('file', this.userForm.get('fileSource').value);
  
  //   console.log(this.userForm)

  //   this.http.post('http://localhost:1869/api/v1/erc/FileVerification', formData)

  //     .subscribe(res => {
  //       console.log("verified",res['result'].fileVerification);
  //       if(res['result'].fileVerification==true){
  //          alert('verified Successfully ');
  //       }else{
  //         alert('verified UnSuccessfully.');
  //       }

  //     })

  // }

}

