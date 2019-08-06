import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc3',
  templateUrl: './desc3.page.html',
  styleUrls: ['./desc3.page.scss'],
})
export class Desc3Page implements OnInit {

  creamPrice: number = 9.10;
  chocolatePrice: number = 11;

  @Input() caffeMocha: number;
  
  constructor(private modalCtrl: ModalController, navParams: NavParams, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.caffeMocha)
  }

  onCreamAdd(){
    this.caffeMocha = this.caffeMocha + this.creamPrice;
  }

  onCreamSub(){
    if(this.caffeMocha > 24){
      this.caffeMocha = this.caffeMocha - this.creamPrice;
    }
  }

  onSyrupAdd(){
    this.caffeMocha = this.caffeMocha + this.chocolatePrice;
  }

  onSyrupSub(){
    if(this.caffeMocha > 24){
      this.caffeMocha = this.caffeMocha - this.chocolatePrice;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.route.navigate(['/home'], { queryParams:{brewedCoffee: this.caffeMocha}})
  }

}
