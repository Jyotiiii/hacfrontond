import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
  UploadDocument: FormGroup;
  ngOnInit(): void {

    this.UploadDocument = this.formBuilder.group({
      Name: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNo: ['', [Validators.required]],
      AccessDuration: ['', Validators.required],
      EnableDocumentDownload: ['', [Validators.required]],
 });
}

}
