import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  id:number=0;
  constructor(private _studentService:StudentService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
    if(this.id){
      _studentService.viewstudent(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.studentForm.patchValue(data);
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
    }
  }

  create(){
    if(this.id){
      console.log(this.studentForm.value);
      this._studentService.updateStudent(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Student Entry Updated Successfully");
          this._router.navigateByUrl("/dashboard/student");
        }, (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }else{
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
  }}
