import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder ,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private http: HttpClient,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {}
  ontractService: any;
  // showMsg: boolean = false;
  // dataget = [];
  // dataUrl = '';
  // errorMessage = '';

  authentication = new FormGroup({
    receiver: new FormControl('', [Validators.required, Validators.minLength(3)]),

    phoneNo: new FormControl('', [Validators.required, Validators.minLength(3)]),

    // subscriptionKey: new FormControl('', [Validators.required])

    // file: new FormControl('', [Validators.required]),
    // verifyfile: new FormControl('', [Validators.required]),

    // fileSource: new FormControl('', [Validators.required]),
  });
  
  authenticationClick(){

   if(this.authentication.valid){
    alert('authentication')
    this.router.navigate(['/dashboard'])
   }

    
  }
  showdata:any[]=[]
data:any[]=[]
showhide = false
errormsg=false
submit(){

  const formData = new FormData();
   

// formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);



// formData.append('phoneNo',this.authentication.get('Name').value);
// formData.append('phoneNo',this.authentication.get('receiver').value);
// formData.append('phoneNo',this.authentication.get('AccessDuration').value);
// formData.append('phoneNo',this.authentication.get('EnableDocumentDownload').value);

console.log("govind",this.authentication.value)


// const headers = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaWthc2hAZ21haWwuY29tIiwiaXNzIjoic3RhbmRhcmRiYW5rLmNvLnphIiwicGVyc29uYSI6Ik5vbWFuaW5pIiwiZmFicmljVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlibUZ0WlNJNklsWnBhMkZ6YUVCbmJXRnBiQzVqYjIwaUxDSnZjbWRPWVcxbElqb2lUM0puTVNJc0ltbGhkQ0k2TVRZMU9ERXpPRFF5TkgwLmhvVGY0cXFuZGJyVV9hUXBYLU1rMWJIZ244LTF5WkJLX1dJV1NZeElkSTAiLCJpYXQiOjE2NTgxMzg0MjR9.4rFAq2PvfXGLSTFuViRtTdh37DH9bReVEN9DPXWqeRs','Content-Type': 'application/json'} 

const headers = {'Content-Type': 'application/json'} 

// this.errormsg=false
// this.showhide=true
const body=JSON.stringify(this.authentication.value);

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

 }
