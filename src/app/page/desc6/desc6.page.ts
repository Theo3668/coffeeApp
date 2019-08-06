import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc6',
  templateUrl: './desc6.page.html',
  styleUrls: ['./desc6.page.scss'],
})
export class Desc6Page implements OnInit {

  creamPrice: number = 10;
  syrupPrice: number = 5;

  @Input() cappuccino: number;
  
  constructor(private modalCtrl: ModalController, navParams: NavParams, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.cappuccino)
  }

  onCreamAdd(){
    this.cappuccino = this.cappuccino + this.creamPrice;
  }

  onCreamSub(){
    if(this.cappuccino > 29){
      this.cappuccino = this.cappuccino - this.creamPrice;
    }
  }

  onSyrupAdd(){
    this.cappuccino = this.cappuccino + this.syrupPrice;
  }

  onSyrupSub(){
    if(this.cappuccino > 29){
      this.cappuccino = this.cappuccino - this.syrupPrice;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.route.navigate(['/home'], { queryParams:{brewedCoffee: this.cappuccino}})
  }

}
