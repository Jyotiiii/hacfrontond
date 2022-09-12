import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-grand-access',
  templateUrl: './grand-access.component.html',
  styleUrls: ['./grand-access.component.css']
})
export class GrandAccessComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
  grandaccess: FormGroup;
  ngOnInit(): void {

    this.grandaccess = this.formBuilder.group({
      Name: ['', Validators.required],
      receiver: ['', Validators.required],
      phoneNo: ['', [Validators.required]],
      AccessDuration: ['', Validators.required],
      EnableDocumentDownload: ['', [Validators.required]],
 });
}
showdata:any[]=[]
data:any[]=[]
showhide = false
errormsg=false
submit(){

  const formData = new FormData();
   

// formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);



formData.append('phoneNo',this.grandaccess.get('Name').value);
formData.append('phoneNo',this.grandaccess.get('receiver').value);
formData.append('phoneNo',this.grandaccess.get('AccessDuration').value);
formData.append('phoneNo',this.grandaccess.get('EnableDocumentDownload').value);

console.log("govind",this.grandaccess.value)


// const headers = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaWthc2hAZ21haWwuY29tIiwiaXNzIjoic3RhbmRhcmRiYW5rLmNvLnphIiwicGVyc29uYSI6Ik5vbWFuaW5pIiwiZmFicmljVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlibUZ0WlNJNklsWnBhMkZ6YUVCbmJXRnBiQzVqYjIwaUxDSnZjbWRPWVcxbElqb2lUM0puTVNJc0ltbGhkQ0k2TVRZMU9ERXpPRFF5TkgwLmhvVGY0cXFuZGJyVV9hUXBYLU1rMWJIZ244LTF5WkJLX1dJV1NZeElkSTAiLCJpYXQiOjE2NTgxMzg0MjR9.4rFAq2PvfXGLSTFuViRtTdh37DH9bReVEN9DPXWqeRs','Content-Type': 'application/json'} 

const headers = {'Content-Type': 'application/json'} 

// this.errormsg=false
// this.showhide=true
const body=JSON.stringify(this.grandaccess.value);

// const body=
   this.http.post('http://65.0.21.113/api/emailverify', body,{headers})

    .subscribe(res => {
          console.log("ressss",res['result'],res);
          if(res['result']!=null){
            //  alert('valid ! '+ res['result'].filedata.fileData);
            this.errormsg=false
            this.showhide=true
            this.showdata.push(res['result'])

          }else{
            // alert('Invalid ! ' +' '+'{ }');
            this.showhide=false
            this.errormsg=true
           
          }
          // this.showdata  = res['result'].filedata.fileData
          
            //  alert('valid ! '+ res['result'].filedata.fileData);
            
          

         
        // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
      })
}
OKSubmit(){
  // this.showpay=false
  window.location.reload()
}
}
