import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currrentnumber = '0';
  firstoperand = null;
  operator = null;
  secondoperand = false;



  constructor() { }

  ngOnInit(): void {
  }

  public getNumber(v:string){
    console.log(v)  
    if(this.secondoperand){
    this.currrentnumber = v;
    this.secondoperand= false;
    console.log(this.currrentnumber);
    }else
    {
      this.currrentnumber === '0' ? this.currrentnumber = v :  this.currrentnumber += v;
      console.log(this.currrentnumber);
    }
  }
  
 

  getdecimal(v:string){

    if(!this.currrentnumber.includes('.')){
      this.currrentnumber += '.'  ;
    }
    console.log(v)
  }
    
  private doCalculation(operator , secondnum){

    switch(operator){
      case  '+' :
        return this.firstoperand += secondnum;
      case  '-':
        return this.firstoperand -= secondnum;
      case  '*':
        return this.firstoperand *= secondnum;
      case  '/':
        return this.firstoperand /= secondnum;
      case  '=':
        return secondnum;
    }

  }


  public getOperation(op:string){
    console.log(op);
    if(this.firstoperand == null){
      this.firstoperand = Number(this.currrentnumber);

    }else if(this.operator){

      const result = this.doCalculation(this.operator,Number(this.currrentnumber));
      this.currrentnumber = String(result);
      this.firstoperand  = result;

    }
    this.operator = op;
    this.secondoperand = true;

 console.log(this.firstoperand);

  }





  clear(){
   this.currrentnumber = '0';
    this.firstoperand = null;
    this.operator = null;
    this.secondoperand = false;
  }


}
