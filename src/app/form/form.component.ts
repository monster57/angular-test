import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NumberValidator , CharacterValidator, YearValidator} from '../../validators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	public billing_form: FormGroup;
  
  constructor(private _fb: FormBuilder,
    private router:Router
  ) { 
  }

  ngOnInit() {
  	this.billing_form = this._fb.group({
      card_number:this._fb.group({
        card_number_1:["" , Validators.compose([Validators.minLength(16) ,Validators.maxLength(16), Validators.required , NumberValidator.validate])],
        card_number_2:["" , Validators.compose([Validators.minLength(16) ,Validators.maxLength(16), Validators.required , NumberValidator.validate])],
      } , {validator: this.areEqual}),
      cvv:["" , Validators.compose([Validators.required, Validators.minLength(3) ,Validators.maxLength(3),NumberValidator.validate])],
      exp_month :["" , Validators.compose([Validators.required])],
      exp_year :["" , Validators.compose([Validators.required,Validators.minLength(4) ,Validators.maxLength(4),NumberValidator.validate,YearValidator.validate])],
      address:["" , Validators.compose([Validators.required])],
      suite:["" , Validators.compose([Validators.required , CharacterValidator.validate])],
      city:["" , Validators.compose([Validators.required, CharacterValidator.validate])],
      state:["" , Validators.compose([Validators.required, CharacterValidator.validate])],
      postal:["" , Validators.compose([Validators.minLength(6) ,Validators.maxLength(6),Validators.required,NumberValidator.validate])],
      country:["" , Validators.compose([Validators.required , CharacterValidator.validate])]

  	})
  }

  areEqual(group: FormGroup) {
    
    if(group.controls["card_number_1"].value != group.controls["card_number_2"].value 
         && group.controls["card_number_2"].value!= "" && group.controls["card_number_1"].value!=""){
         return {
           not_duplicate: true  
        }  
       }
       return null;
  }


  navigate(form){
    this.router.navigate(['/display']);
  }

}
