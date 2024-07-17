import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-forms',
  templateUrl: './reactiv-forms.component.html',
  styleUrls: ['./reactiv-forms.component.scss'],
})
export class ReactivFormsComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(public fb: FormBuilder) {
 this.signupForm = this.fb.group({
  name : ['' , [Validators.required , Validators.maxLength(10) , Validators.minLength(3)]],
  email : ['' , [Validators.required , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
 })
  }
  get validationCheck() {return this.signupForm.controls}

  ngOnInit() {
    console.log( this.signupForm , ' this.signupForm this.signupForm this.signupForm')
   }

   onSubmit(){
    console.log(this.signupForm.value , 'lllllll')
   }
}
