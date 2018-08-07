import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GreeterComponent } from './Greeter/greeter/greeter.component';
import { CalculatorOneComponent } from './Calculator/calculator-one/calculator-one.component';
import { CalculatorTwoComponent } from './Calculator/calculator-one/calculator-two.component';
import { CalculatorResultComponent } from './Calculator/calculator-one/calculatorResult.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GreeterComponent,  CalculatorOneComponent ,CalculatorTwoComponent,CalculatorResultComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
