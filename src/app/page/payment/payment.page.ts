import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  name;
  finalPrice;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params)

      this.name = params.name
      console.log(this.name),
      this.finalPrice = params.finalPrice
      console.log(this.finalPrice)     
    })
  }

  dismiss(){
    window.print();
  }
}
