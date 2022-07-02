import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required ),
 
    
   });
    constructor() { }
   datashow:any;
    get firstname(){
      return this.form.get('firstName')
    }
    ngOnInit() {
      this.form.valueChanges.subscribe(res=>{
        console.log(res);
        this.datashow = res.firstName;
        var etsy_fee_convert_inr:any = res.firstName * 80;

        this.datashow = parseInt(res.lastName) - ( parseInt(etsy_fee_convert_inr) + parseInt(res.email));


        console.log(parseInt(res.lastName),  parseInt(etsy_fee_convert_inr) ,  parseInt(res.email));
      });
    }
  
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }

}