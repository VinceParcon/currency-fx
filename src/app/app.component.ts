import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'currency-fx';
  currencies: any = [];
  firstCur: any;
  secondCur: any;
  firstVal: number;
  secondVal: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getCurrencyList().subscribe((val: any) => {
      this.currencies = val;
      this.firstCur = this.currencies.find(obj => obj.name === 'USD');
      this.secondCur = this.currencies.find(obj => obj.name === 'PHP');
    });
  }

  onSelectFirst(val: any) {
    this.firstCur = val;
    this.convertCurrency('first');
  }

  onSelectSecond(val: any) {
    this.secondCur = val;
    this.convertCurrency('second');
  }

  convertCurrency(order) {
    if (order === 'first') {
      // since EUR is the only base price, will convert the value to EUR first
      const baseEUR = (this.firstVal / (+this.firstCur.price));
      this.secondVal = (baseEUR * (+this.secondCur.price));
    } else {
      const baseEUR = (this.secondVal / (+this.secondCur.price));
      this.firstVal = (baseEUR * (+this.firstCur.price));
    }
  }
}
