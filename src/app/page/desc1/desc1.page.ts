import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc1',
  templateUrl: './desc1.page.html',
  styleUrls: ['./desc1.page.scss'],
})
export class Desc1Page implements OnInit {

  creamPrice: number = 9.10;
  syrupPrice: number = 7;

  @Input() brewedCoffee: number;
  
  constructor(private modalCtrl: ModalController, navParams: NavParams, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.brewedCoffee)
  }

  onCreamAdd(){
    this.brewedCoffee = this.brewedCoffee + this.creamPrice;
  }

  onCreamSub(){
    if(this.brewedCoffee > 13){
      this.brewedCoffee = this.brewedCoffee - this.creamPrice;
    }
  }

  onSyrupAdd(){
    this.brewedCoffee = this.brewedCoffee + this.syrupPrice;
  }

  onSyrupSub(){
    if(this.brewedCoffee > 13){
      this.brewedCoffee = this.brewedCoffee - this.syrupPrice;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.route.navigate(['/home'], { queryParams:{brewedCoffee: this.brewedCoffee}})
  }
}
