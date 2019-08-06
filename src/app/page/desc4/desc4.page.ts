import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc4',
  templateUrl: './desc4.page.html',
  styleUrls: ['./desc4.page.scss'],
})
export class Desc4Page implements OnInit {

  creamPrice: number = 10;
  syrupPrice: number = 8;

  @Input() espresso: number;
  
  constructor(private modalCtrl: ModalController, navParams: NavParams, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.espresso)
  }

  onCreamAdd(){
    this.espresso = this.espresso + this.creamPrice;
  }

  onCreamSub(){
    if(this.espresso > 20){
      this.espresso = this.espresso - this.creamPrice;
    }
  }

  onSyrupAdd(){
    this.espresso = this.espresso + this.syrupPrice;
  }

  onSyrupSub(){
    if(this.espresso > 20){
      this.espresso = this.espresso - this.syrupPrice;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.route.navigate(['/home'], { queryParams:{espresso: this.espresso}})
  }

}
