import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

datalist:any=[
  {productname: 'Pen', price: 10,rating: 3,freedelivery: 'False'},
  {productname: 'Shoes',price: 1000,rating: 4,freedelivery: 'True'},
  {productname: 'Shampoo',price: 150,rating: 4.5,freedelivery: 'False'},
  {productname: 'Guitar',price: 5000,rating: 5,freedelivery: 'True'},
  {productname: 'Watch',price: 800,rating: 3,freedelivery: 'True'},
  {productname: 'Cap',price: 300,rating: 4,freedelivery: 'False'},
  {productname: 'Bike',price: 60000,rating: 2.5,freedelivery: 'False'},
  {productname: 'Car',price: 200000,rating: 4,freedelivery: 'True'},
  {productname: 'Mobile', price: 10000,rating: 3,freedelivery: 'False'},
  {productname: 'Tshirt',price: 500,rating: 4,freedelivery: 'True'}  
]

delete(index:any){
  this.datalist.splice(index,1);
}
term:string='';
search(){
  this.datalist = this.datalist.filter((dataunits:any)=>dataunits.productname.includes(this.term));
  
}

del(){
  this.datalist = this.datalist.filter((dataunits: any) => String(dataunits.freedelivery).toLowerCase() === 'true');
}


pl2h(){
this.datalist.sort((a:any,b:any)=>a.price -b.price);
}
ph2l(){
  this.datalist.sort((a:any,b:any)=>b.price - a.price);
}
rl2h(){
  this.datalist.sort((a:any,b:any)=>a.rating -b.rating);
}
rh2l(){
  this.datalist.sort((a:any,b:any)=>b.rating -a.rating);
}

deliverycharge() {
  this.datalist = this.datalist.map(
    (dataunit:any) => {dataunit.price=dataunit.price+100;
    return dataunit; 
})  
}
percentage:number=0
discount(){
  this.datalist = this.datalist.filter((dataunit:any)=>{dataunit.price=dataunit.price / 2;
    return dataunit;
  })
}

total1(){
let totalprice = this.datalist.reduce((sum:any,dataunit:any)=>dataunit.price+sum, 0);
alert("Total Price: " + totalprice);
}
total2(){
  let totalitems = this.datalist.reduce(()=>this.datalist.length);
  alert("Total Items in the Cart: " + totalitems);
  }

  productname1: string = '';
  price1: number = 0;
  rating1: number = 0;
  choice?: string;  // Stores "true" or "false" as a string



  create() {
    let dataunit = {
      productname: this.productname1,
      price: this.price1,
      rating: this.rating1,
      freedelivery: this.choice === 'true' ? 'True' : 'False'  // Convert "true"/"false" string to boolean
    };
    this.datalist.unshift(dataunit);
  }
}