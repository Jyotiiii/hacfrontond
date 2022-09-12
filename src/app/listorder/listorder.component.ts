import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

// import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-listorder',
  templateUrl: './listorder.component.html',
  styleUrls: ['./listorder.component.css']
})
export class ListorderComponent implements OnInit {
  listorder: FormGroup;
  ngOnInit(): void {
    this.submit(),
    this.listorder = this.formBuilder.group({
      approve: ['', Validators.required],
      reject: ['', Validators.required]
 });
}
  
  p: number = 1;

  // ApproveRejectList=[{
  //   id:1,
  //   Date:'2022-7-5',
  //   Gross_Amount:'133290',
  //   Discount:'0.055',
  //   Discounted_Amount:'3020',
  //   VAT:'1.16',
  //   Amount_Payable:'700'
  // },
  // {
  //   id:2,
  //   Date:'2022-7-6',
  //   Gross_Amount:'300',
  //   Discount:'60%',
  //   Discounted_Amount:'900',
  //   VAT:'990',
  //   Amount_Payable:'210'
  // },
  // {
  //   id:3,
  //   Date:'2022-7-7',
  //   Gross_Amount:'300',
  //   Discount:'50%',
  //   Discounted_Amount:'300',
  //   VAT:'600',
  //   Amount_Payable:'700'
  // },
  // {
  //   id:4,
  //   Date:'2022-7-8',
  //   Gross_Amount:'300',
  //   Discount:'90%',
  //   Discounted_Amount:'300',
  //   VAT:'600',
  //   Amount_Payable:'700'
  // },
  // {
  //   id:5,
  //   Date:'2022-7-9',
  //   Gross_Amount:'300',
  //   Discount:'60%',
  //   Discounted_Amount:'990',
  //   VAT:'800',
  //   Amount_Payable:'770'
  // },]
  
  
  constructor(private http: HttpClient,private formBuilder: FormBuilder) { }
  // paginateOption:{itemsPerPage:number,currentPage:number}={ itemsPerPage:10,currentPage:1};
  // constructor(private formBuilder: FormBuilder) { }
  // Approvallist: FormGroup;

  
ApproveRejectList:any[]=[]
data:any[]=[]
showreject = false
showapprove=false
errormsg=false
submit(){

  const formData = new FormData();
   

// formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);

// formData.append('supplierName',this.CalculateOrderPayment.get('numberOfOrder').value);

// formData.append('supplierName',this.CalculateOrderPayment.get('supplierType').value);


// formData.append('file', this.verifyForm.get('fileSource').value);

// console.log("govind",this.CalculateOrderPayment)
console.log("jyotiiii")
const tokens = localStorage.getItem('token');
console.log("tokens",tokens)

// const headers = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaWthc2hAZ21haWwuY29tIiwiaXNzIjoic3RhbmRhcmRiYW5rLmNvLnphIiwicGVyc29uYSI6Ik5vbWFuaW5pIiwiZmFicmljVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlibUZ0WlNJNklsWnBhMkZ6YUVCbmJXRnBiQzVqYjIwaUxDSnZjbWRPWVcxbElqb2lUM0puTVNJc0ltbGhkQ0k2TVRZMU9ERXpPRFF5TkgwLmhvVGY0cXFuZGJyVV9hUXBYLU1rMWJIZ244LTF5WkJLX1dJV1NZeElkSTAiLCJpYXQiOjE2NTgxMzg0MjR9.4rFAq2PvfXGLSTFuViRtTdh37DH9bReVEN9DPXWqeRs','Content-Type': 'application/json'} 

const headers = {'token':tokens,'Content-Type': 'application/json'} 


// const body=JSON.stringify(this.CalculateOrderPayment.value);

   this.http.get('http://10.109.88.187:443/api/findAll',{headers})

    .subscribe(res => {
          console.log("ressss",res['result'],res);
          res['result'].forEach((element:any) => {
            console.log("element",element)
            // if(element.status=='Approved'){
            //   //  console.log("showhide", this.showdata)
            //    this.showdata=true;
               
            //    console.log("showhide", this.showdata)
            // }
            if(element.status=='calculateOrderPayment'||element.status=='Reject')
            this.ApproveRejectList.push(element)
        
          });
        

         
        // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
      })
}
Approve(i:any){
  const formData = new FormData();
  console.log("govind",this.listorder.value,this.listorder)
  console.log("jyotiiii")
  const tokens = localStorage.getItem('token');
  console.log("tokens",tokens)
  
  // const headers = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaWthc2hAZ21haWwuY29tIiwiaXNzIjoic3RhbmRhcmRiYW5rLmNvLnphIiwicGVyc29uYSI6Ik5vbWFuaW5pIiwiZmFicmljVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlibUZ0WlNJNklsWnBhMkZ6YUVCbmJXRnBiQzVqYjIwaUxDSnZjbWRPWVcxbElqb2lUM0puTVNJc0ltbGhkQ0k2TVRZMU9ERXpPRFF5TkgwLmhvVGY0cXFuZGJyVV9hUXBYLU1rMWJIZ244LTF5WkJLX1dJV1NZeElkSTAiLCJpYXQiOjE2NTgxMzg0MjR9.4rFAq2PvfXGLSTFuViRtTdh37DH9bReVEN9DPXWqeRs','Content-Type': 'application/json'} 
  
  const headers = {'token':tokens,'Content-Type': 'application/json'} 
  let body=
  {
    "orderId": this.ApproveRejectList[i].requestId,
    "status": "Approved",
    "comments": "comments"
  }
  
  console.log("body",body)
  // const body=JSON.stringify(this.listorder.value);
  
     this.http.put('http://10.109.88.187:443/api/approvedPayment',body ,{headers})
     .subscribe(res => {
            console.log("ressss",res['result']);
            if(res['result']!=null){
              //  alert('valid ! '+ res['result'].filedata.fileData);
              this.errormsg=false
              this.showapprove=true
  
            }else{
              // alert('Invalid ! ' +' '+'{ }');
              this.showapprove=false
              this.errormsg=true
             
            }
          
  
           
          // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
        })

}
Reject(i:any){
  const formData = new FormData();
  console.log("govind",this.listorder.value,this.listorder)
  console.log("jyotiiii")
  const tokens = localStorage.getItem('token');
  console.log("tokens",tokens)
  
  // const headers = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJWaWthc2hAZ21haWwuY29tIiwiaXNzIjoic3RhbmRhcmRiYW5rLmNvLnphIiwicGVyc29uYSI6Ik5vbWFuaW5pIiwiZmFicmljVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlibUZ0WlNJNklsWnBhMkZ6YUVCbmJXRnBiQzVqYjIwaUxDSnZjbWRPWVcxbElqb2lUM0puTVNJc0ltbGhkQ0k2TVRZMU9ERXpPRFF5TkgwLmhvVGY0cXFuZGJyVV9hUXBYLU1rMWJIZ244LTF5WkJLX1dJV1NZeElkSTAiLCJpYXQiOjE2NTgxMzg0MjR9.4rFAq2PvfXGLSTFuViRtTdh37DH9bReVEN9DPXWqeRs','Content-Type': 'application/json'} 
  
  const headers = {'token':tokens,'Content-Type': 'application/json'} 
  let body=
  {
    "orderId": this.ApproveRejectList[i].requestId,
    "status": "Reject",
    "comments": "comments"
  }
  
  console.log("body",body)
  // const body=JSON.stringify(this.listorder.value);
  
     this.http.put('http://10.109.88.187:443/api/approvedPayment',body ,{headers})
     .subscribe(res => {
            console.log("ressss",res['result']);
            if(res['result']!=null){
              //  alert('valid ! '+ res['result'].filedata.fileData);
              this.errormsg=false
              this.showreject=true
  
            }else{
              // alert('Invalid ! ' +' '+'{ }');
              this.showreject=false
              this.errormsg=true
             
            }
          
  
           
          // alert("submit suceessfully"+ res['result'].value) ;    // let showdata = res['result'].filedata.fileData
        })

}
// pageSwitch(page: number){
//   this.paginateOption.currentPage=page;
//     }
//     pageSize(size:number){
//       this.paginateOption.itemsPerPage=size;
//     }

 
}
