import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css']
})
export class MasterDataComponent implements OnInit {


  constructor(private http: HttpClient,private formBuilder: FormBuilder) { } 
  MasterData: FormGroup;
  ngOnInit(): void {

    this.MasterData = this.formBuilder.group({
      discountPercentage: ['', Validators.required],
      vatPercentage: ['', Validators.required],
      pricePerUnit: ['', Validators.required],
      supplierType: ['', [Validators.required]],
 });
}

showdata:any[]=[]
data:any[]=[]
showhide = false
errormsg=false
submit(){

  const formData = new FormData();
   

// formData.append('accounts',this.transferFormMultipleReceipient.get('receiver').value);

formData.append('discountPercentage',this.MasterData.get('vatPercentage').value);

formData.append('discountPercentage',this.MasterData.get('pricePerUnit').value);
formData.append('discountPercentage',this.MasterData.get('supplierType').value);



// formData.append('file', this.verifyForm.get('fileSource').value);

console.log("govind",this.MasterData)


const headers = {'Content-Type': 'application/json'} 
  
const body=JSON.stringify(this.MasterData.value);

   this.http.post('http://10.109.88.187:443/api/master/masterData', body,{headers})

    .subscribe(res => {
          
          console.log("ressss",res);
          // this.showdata  = res['result'].filedata.fileData
          if(res!=null){
            //  alert('valid ! '+ res['result'].filedata.fileData);
            this.errormsg=false
            this.showhide=true
            this.showdata.push(res)

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
      if (this.MasterData.invalid) {
        console.log(this.MasterData.value)
        //  alert('valid ! '+ res['result'].filedata.fileData);
        this.showhide=false
        this.errormsg=true
        }else{
          // alert('Invalid ! ' +' '+'{ }');
           this.errormsg=false
           this.showhide=true
           this.showdata  = this.MasterData.value
           console.log(this.showdata);
        }
      }


}
