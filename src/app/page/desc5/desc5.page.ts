import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc5',
  templateUrl: './desc5.page.html',
  styleUrls: ['./desc5.page.scss'],
})
export class Desc5Page implements OnInit {

  creamPrice: number = 10;
  syrupPrice: number = 5;

  @Input() coldBrewedCoffee: number;
  
  constructor(private modalCtrl: ModalController, navParams: NavParams, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.coldBrewedCoffee)
  }

  onCreamAdd(){
    this.coldBrewedCoffee = this.coldBrewedCoffee + this.creamPrice;
  }

  onCreamSub(){
    if(this.coldBrewedCoffee > 19){
      this.coldBrewedCoffee = this.coldBrewedCoffee - this.creamPrice;
    }
  }

  onSyrupAdd(){
    this.coldBrewedCoffee = this.coldBrewedCoffee + this.syrupPrice;
  }

  onSyrupSub(){
    if(this.coldBrewedCoffee > 19){
      this.coldBrewedCoffee = this.coldBrewedCoffee - this.syrupPrice;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.route.navigate(['/home'], { queryParams:{brewedCoffee: this.coldBrewedCoffee}})
  }

}
