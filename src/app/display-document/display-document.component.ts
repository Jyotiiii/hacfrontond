import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-display-document',
  templateUrl: './display-document.component.html',
  styleUrls: ['./display-document.component.css']
})
export class DisplayDocumentComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
  DisplayDocument: FormGroup;
  ngOnInit(): void {

    this.DisplayDocument = this.formBuilder.group({
      Name: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNo: ['', [Validators.required]],
      AccessDuration: ['', Validators.required],
      EnableDocumentDownload: ['', [Validators.required]],
 });
}
downloadPdf(base64String, fileName) {
  const source = `data:application/pdf;base64,${base64String}`;
  const link = document.createElement("a");
  link.href = source;
  link.download = `${fileName}.pdf`
  link.click();
}
onClickDownloadPdf(){
  let base64String = "http://localhost:4200/#/viewOrderHistory";
  this.downloadPdf(base64String,"Id-card");
}
onClickDownloadPdfp(){
  let base64String = "http://localhost:4200/#/viewOrderHistory";
  this.downloadPdf(base64String,"proof-od-residence");
}
OKSubmit(){
  // this.showpay=false
  window.location.reload()
}
showhide = false
errormsg=false
onClick(){
  this.errormsg=false
  this.showhide=true

}
onClick1(){
  this.errormsg=true
  this.showhide=false

}

}
