import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myResult:any=[]
  myObject:any
  newDetails:any

  first_list:any=[

    {
    
    "Tradecode": "GSA472",
    
    "location": "GS ",
    
    "no_of_lots": 2,
    
    "recommendation": 3,
    
    "username": "ANIL"
    
    },
    
    {
    
    "Tradecode": "PLV083",
    
    "location": "PL ",
    
    "no_of_lots": 2,
    
    "recommendation": 3,
    
    "username": "VIPIN"
    
    }
    
    ]

    second_list:any=
    [

      {
      
      "MTM": 3636.8,
      
      "Tradecode": "PLV083",
      
      "bought_qty": 10,
      
      "bought_value": "10.0000",
      
      "marketprice": 3636.8,
      
      "netqty": 4,
      
      "real_pandl": "10.0000",
      
      "securitycode": "TCS",
      
      "securityname": "TCS LTD",
      
      "sell_qty": 6,
      
      "sell_value": "10.0000"
      
      },
      
      {
      
      "MTM": 3636.8,
      
      "Tradecode": "GSA472",
      
      "bought_qty": 10,
      
      "bought_value": "10.0000",
      
      "marketprice": 3636.8,
      
      "netqty": 2,
      
      "real_pandl": "10.0000",
      
      "securitycode": "TCS",
      
      "securityname": "TCS LTD",
      
      "sell_qty": 8,
      
      "sell_value": "10.0000"
      
      }
      
      ]

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.first_list.map((n:any)=>{
      this.myObject=n
      delete this.myObject.username
      let myArray=this.second_list.filter((i:any)=>
        i.Tradecode==this.myObject.Tradecode
      )
      
      this.myObject.recommendationAry=myArray
      this.myResult.push(this.myObject)
    })
    
    this.newDetails=JSON.stringify(this.myResult)
    console.log(this.myResult);
    console.log(this.newDetails);
  }


}
