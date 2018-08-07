import { Component } from '@angular/core';
import {CalculatorModel} from './calculatorModel';

@Component({
  selector: 'app-calculator-one',
  templateUrl: './calculator-one.component.html',
  styleUrls: ['./calculator-one.component.css']
})
export class CalculatorOneComponent {
  result :number =  0 ;
  firstValue : number =0;
  secondValue : number =0;

model : CalculatorModel =new CalculatorModel();
  setfirstValue(value){this.firstValue = value;}
  setsecondValue(value){this.secondValue = value;}

  add(){
    this.result = this.firstValue + this.secondValue;
  }
  substract(){
    this.result = this.firstValue - this.secondValue;
  }
  multiply(){
    this.result = this.firstValue * this.secondValue;
  }
  divide(){
    this.result = this.firstValue / this.secondValue;
  }
}