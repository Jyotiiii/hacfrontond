import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-request-document',
  templateUrl: './request-document.component.html',
  styleUrls: ['./request-document.component.css']
})
export class RequestDocumentComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
  requestDocument: FormGroup;
  ngOnInit(): void {

    this.requestDocument = this.formBuilder.group({
      Name: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNo: ['', [Validators.required]],
      AccessDuration: ['', Validators.required],
      EnableDocumentDownload: ['', [Validators.required]],
 });
}

}
