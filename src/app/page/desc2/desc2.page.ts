import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc2',
  templateUrl: './desc2.page.html',
  styleUrls: ['./desc2.page.scss'],
})
export class Desc2Page implements OnInit {

  creamPrice: number = 9.10;
  milkPrice: number = 5;

  @Input() americano: number;
  
  constructor(private modalCtrl: ModalController, navParams: NavParams, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
  console.log(this.americano)
  }

  onCreamAdd(){
    this.americano = this.americano + this.creamPrice;
  }

  onCreamSub(){
    if(this.americano > 27){
      this.americano = this.americano - this.creamPrice;
    }
  }

  onSyrupAdd(){
    this.americano = this.americano + this.milkPrice;
  }

  onSyrupSub(){
    if(this.americano > 27){
      this.americano = this.americano - this.milkPrice;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    this.route.navigate(['/home'], { queryParams:{americano: this.americano}})
  }

}
