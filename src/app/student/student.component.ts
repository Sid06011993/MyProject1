import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
[x: string]: any;
studentarray:any=[];
constructor(private _studentService:StudentService){
  _studentService.getStudents().subscribe(
    (data:any)=>{
      console.log(data);
      this.studentarray=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}
term:string='';
filter(){
  this._studentService.getFilteredStudents(this.term).subscribe(
    (data:any)=>{
      this.studentarray=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}

column:string='';
order:string='';
sort(){
  this._studentService.getSortedStudents(this.column,this.order).subscribe(
    (data:any)=>{
      this.studentarray=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}

limit:string='';
page:string='';
paginate(){
  console.log(this.limit,this.page);
  this._studentService.getPaginatedStudents(this.limit,this.page).subscribe(
    (data:any)=>{
      this.studentarray=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}
reload(){
  this._studentService.getStudents().subscribe(
    (data:any)=>{
      console.log(data);
      this.studentarray=data;
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
}
delete(id:any){
  this._studentService.deleteStudents(id).subscribe(
    (data:any)=>{
      alert("Record deleted successfully");
      this.reload()
    },(err:any)=>{
      alert("Internal Server Error");
    }
    )
  }
}
