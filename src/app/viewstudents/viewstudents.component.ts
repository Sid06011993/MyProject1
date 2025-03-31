import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent {
  id:number=0;
  details:any='';
constructor(private _activatedRoute:ActivatedRoute,
private _studentService:StudentService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      console.log(this.id);
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
_studentService.viewstudent(this.id).subscribe(
  (data:any)=>{
    console.log(data);
    this.details=data;
  }, (err:any)=>{
    alert("Internal Server Error");
  }
)
}
}
