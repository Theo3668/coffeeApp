import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc7',
  templateUrl: './desc7.page.html',
  styleUrls: ['./desc7.page.scss'],
})
export class Desc7Page implements OnInit {

  creamPrice: number = 9.10;
  syrupPrice: number = 7;

  @Input() flatWhite: number;
  
  constructor(private modalCtrl: ModalController, navParams: NavParams, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.flatWhite)
  }

  onCreamAdd(){
    this.flatWhite = this.flatWhite + this.creamPrice;
  }

  onCreamSub(){
    if(this.flatWhite > 26){
      this.flatWhite = this.flatWhite - this.creamPrice;
    }
  }

  onSyrupAdd(){
    this.flatWhite = this.flatWhite + this.syrupPrice;
  }

  onSyrupSub(){
    if(this.flatWhite > 26){
      this.flatWhite = this.flatWhite - this.syrupPrice;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.route.navigate(['/home'], { queryParams:{flatWhite: this.flatWhite}})
  }

}
