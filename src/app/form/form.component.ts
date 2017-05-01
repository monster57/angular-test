import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NumberValidator} from '../../validators/number.validator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	public billing_form: FormGroup;
  
  constructor(private _fb: FormBuilder) { 
  }

  ngOnInit() {
  	this.billing_form = this._fb.group({
      name:["" , Validators.compose([Validators.required])],
  		card_number:["" , Validators.compose([Validators.minLength(16) ,Validators.maxLength(16), Validators.required , NumberValidator.validate])],
      cvv:["" , Validators.compose([Validators.required, Validators.minLength(3) ,Validators.maxLength(3),NumberValidator.validate])],
      exp_month :["" , Validators.compose([Validators.required])],
      address:["" , Validators.compose([Validators.required])],
      suite:["" , Validators.compose([Validators.required])],
      city:["" , Validators.compose([Validators.required])],
      state:["" , Validators.compose([Validators.required])],
      postal:["" , Validators.compose([Validators.minLength(16) ,Validators.maxLength(16),Validators.required,NumberValidator.validate])],
      country:["" , Validators.compose([Validators.required])]

  	})
  }

}
