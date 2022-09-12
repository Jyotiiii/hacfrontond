import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';

import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  reqId:any
  constructor(private route:ActivatedRoute ,private router:Router,private http: HttpClient,private formBuilder: FormBuilder) {
    this.route.params.subscribe((params:any)=>{
      this.reqId=params['requestId']
     })
   }
  ConfirmOrder: FormGroup;
  ngOnInit(): void {

    this.ConfirmOrder = this.formBuilder.group({
      orderId: ['', Validators.required],
      status: ['', [Validators.required]],
      fileUrl: ['', Validators.required],
      
 });
}

 

showdata:any[]=[]
data:any[]=[]
showhide = false
errormsg=false
submit(){

  const formData = new FormData();
   

// formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);
this.ConfirmOrder.patchValue({
  orderId: this.reqId,
  status:'confirm'
});


formData.append('fileUrl',this.ConfirmOrder.get('orderId').value);
formData.append('fileUrl',this.ConfirmOrder.get('status').value);
console.log("govind",this.ConfirmOrder)
const tokens = localStorage.getItem('token');
console.log("tokens",tokens)

// const headers = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaWthc2hAZ21haWwuY29tIiwiaXNzIjoic3RhbmRhcmRiYW5rLmNvLnphIiwicGVyc29uYSI6Ik5vbWFuaW5pIiwiZmFicmljVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlibUZ0WlNJNklsWnBhMkZ6YUVCbmJXRnBiQzVqYjIwaUxDSnZjbWRPWVcxbElqb2lUM0puTVNJc0ltbGhkQ0k2TVRZMU9ERXpPRFF5TkgwLmhvVGY0cXFuZGJyVV9hUXBYLU1rMWJIZ244LTF5WkJLX1dJV1NZeElkSTAiLCJpYXQiOjE2NTgxMzg0MjR9.4rFAq2PvfXGLSTFuViRtTdh37DH9bReVEN9DPXWqeRs','Content-Type': 'application/json'} 

const headers = {'token':tokens,'Content-Type': 'application/json'} 


const body=JSON.stringify(this.ConfirmOrder.value);
   this.http.put('http://10.109.88.187:443/api/confirmOrder', body,{headers})

    .subscribe(res => {
          console.log("ressss",res['result'],res);
          // this.showdata  = res['result'].filedata.fileData
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
        // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
      })
}
submit1(){
      // stop here if form is invalid
      if (this.ConfirmOrder.invalid) {
        console.log(this.ConfirmOrder.value)
        //  alert('valid ! '+ res['result'].filedata.fileData);
        this.showhide=false
        this.errormsg=true
        }else{
          // alert('Invalid ! ' +' '+'{ }');
           this.errormsg=false
           this.showhide=true
           this.showdata  = this.ConfirmOrder.value
           console.log(this.showdata);
        }
      }


}
