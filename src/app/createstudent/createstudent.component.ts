import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {
  public studentForm:FormGroup = new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    dob:new FormControl(),
    city:new FormControl(),
    email:new FormControl(),
    school_name:new FormControl(),
    school_pin:new FormControl(),
    school_logo:new FormControl(),
    profile_picture:new FormControl(),
  })
  constructor(private _studentService:StudentService, private _router:Router){}
    create(){
      console.log(this.studentForm.value);
      this._studentService.createstudent(this.studentForm.value).subscribe(
        (data:any)=>{
          alert("New Student Entry Created Successfully");
          this._router.navigateByUrl("/dashboard/student");
        }, (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }

}
