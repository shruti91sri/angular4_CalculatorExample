import {Component} from '@angular/core';
import {CalculatorModel} from './calculatorModel';

@Component ({
  selector : 'app-calculator-two',
  templateUrl : './calculator-two.component.html',
  styleUrls : ['./calculatorResult.component.css']
})

export class CalculatorTwoComponent {

model : CalculatorModel =new CalculatorModel();
operator : string = 'add';
onCalculateClick(){
	this.model[this.operator]();
}
}