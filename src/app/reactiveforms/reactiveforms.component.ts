import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  public userForm: FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    class:new FormControl('',[Validators.required]),
    fatherName:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    marks: new FormArray([]),
    type:new FormControl(),
})
get marksFormArray(){
  return this.userForm.get('marks') as FormArray;
}

constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholar'){
        this.userForm.addControl('busFee',new FormControl());
        this.userForm.removeControl('hostelFee');
      }else{
        this.userForm.addControl('hostelFee',new FormControl());
        this.userForm.removeControl('busFee');
      }
    }
  )
}
marks(){
  this.marksFormArray.push(
    new FormGroup({
      class:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl() 
    })
  )
}
deletemarks(i:number){
  this.marksFormArray.removeAt(i);
}
create(){
  console.log(this.userForm);
}

}
