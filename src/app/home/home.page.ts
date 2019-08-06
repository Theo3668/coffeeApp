import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Desc1Page } from '../page/desc1/desc1.page';
import { ActivatedRoute, Router } from '@angular/router';
import { Desc2Page } from '../page/desc2/desc2.page';
import { Desc3Page } from '../page/desc3/desc3.page';
import { Desc4Page } from '../page/desc4/desc4.page';
import { Desc5Page } from '../page/desc5/desc5.page';
import { Desc6Page } from '../page/desc6/desc6.page';
import { Desc7Page } from '../page/desc7/desc7.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  creamPrice: number = 9.10;
  syrupPrice: number = 7;
  milkPrice: number = 5;
  chocolatePrice: number = 11;
  //---------------
  brewedCoffee = 0;
  americano = 0;
  caffeMocha = 0;
  espresso = 0;
  coldBrewedCoffee = 0;
  cappuccino = 0;
  flatWhite = 0;
  //------------------
  name;
  finalPrice: number = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  constructor(private modalController: ModalController, private route: ActivatedRoute, private router: Router) {
    //   this.route.queryParams.subscribe(params => {
    //   console.log(params)

    //   this.brewedCoffee = params.brewedCoffee
    //   console.log(this.brewedCoffee),
    //   this.americano = params.americano
    //   console.log(this.americano),
    //   this.caffeMocha = params.caffeMocha
    //   console.log(this.caffeMocha),
    //   this.espresso = params.espresso
    //   console.log(this.espresso),
    //   this.coldBrewedCoffee = params.coldBrewedCoffee
    //   console.log(this.coldBrewedCoffee),
    //   this.cappuccino = params.cappuccino
    //   console.log(this.cappuccino),
    //   this.flatWhite = params.flatWhite
    //   console.log(this.flatWhite)
    // })
    // this.finalPrice = +this.brewedCoffee + +this.americano + +this.caffeMocha + +this.espresso + +this.coldBrewedCoffee + +this.cappuccino + +this.flatWhite;
  }
  
 

  onCreamAdd(){
    this.brewedCoffee = this.brewedCoffee + this.creamPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;
  }

  onCreamSub(){
    if(this.brewedCoffee > 12){
      this.brewedCoffee = this.brewedCoffee - this.creamPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  onSyrupAdd(){
    this.brewedCoffee = this.brewedCoffee + this.syrupPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onSyrupSub(){
    if(this.brewedCoffee > 12){
      this.brewedCoffee = this.brewedCoffee - this.syrupPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  //-----------
  onCreamAddSec(){
    this.americano = this.americano + this.creamPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onCreamSubSec(){
    if(this.americano > 26){
      this.americano = this.americano - this.creamPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  onSyrupAddSec(){
    this.americano = this.americano + this.milkPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onSyrupSubSec(){
    if(this.americano > 26){
      this.americano = this.americano - this.milkPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  //--------------
  onCreamAddThird(){
    this.caffeMocha = this.caffeMocha + this.creamPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onCreamSubThird(){
    if(this.caffeMocha > 23){
      this.caffeMocha = this.caffeMocha - this.creamPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  onSyrupAddThird(){
    this.caffeMocha = this.caffeMocha + this.chocolatePrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onSyrupSubThird(){
    if(this.caffeMocha > 23){
      this.caffeMocha = this.caffeMocha - this.chocolatePrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  //-----------------
  onCreamAddFouth(){
    this.espresso = this.espresso + this.creamPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onCreamSubFouth(){
    if(this.espresso > 19){
      this.espresso = this.espresso - this.creamPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  onSyrupAddFouth(){
    this.espresso = this.espresso + this.syrupPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onSyrupSubFouth(){
    if(this.espresso > 19){
      this.espresso = this.espresso - this.syrupPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  //----------------
  onCreamAddFifth(){
    this.coldBrewedCoffee = this.coldBrewedCoffee + this.chocolatePrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onCreamSubFifth(){
    if(this.coldBrewedCoffee > 18){
      this.coldBrewedCoffee = this.coldBrewedCoffee - this.chocolatePrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  onSyrupAddFifth(){
    this.coldBrewedCoffee = this.coldBrewedCoffee + this.syrupPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onSyrupSubFifth(){
    if(this.coldBrewedCoffee > 18){
      this.coldBrewedCoffee = this.coldBrewedCoffee - this.syrupPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  //-----------------
  onCreamAddSixth(){
    this.cappuccino = this.cappuccino + this.creamPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onCreamSubSixth(){
    if(this.cappuccino > 28){
      this.cappuccino = this.cappuccino - this.creamPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  onSyrupAddSixth(){
    this.cappuccino = this.cappuccino + this.syrupPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onSyrupSubSixth(){
    if(this.cappuccino > 28){
      this.cappuccino = this.cappuccino - this.syrupPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }
  
  //-----------------
  onCreamAddSev(){
    this.flatWhite = this.flatWhite + this.creamPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onCreamSubSev(){
    if(this.flatWhite > 25){
      this.flatWhite = this.flatWhite - this.creamPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  onSyrupAddSev(){
    this.flatWhite = this.flatWhite + this.syrupPrice;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onSyrupSubSev(){
    if(this.flatWhite > 25){
      this.flatWhite = this.flatWhite - this.syrupPrice;
      this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

    }
  }

  presentModal(){
    this.brewedCoffee = this.brewedCoffee + 12.90;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }
  onAmericano(){
    this.americano = this.americano + 26.90;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }
  onCaffeMocha(){
    this.caffeMocha = this.caffeMocha + 23.90;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }
  onEspresso(){
    this.espresso = this.espresso + 19.90;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }
  onColdBrewedCoffee(){
    this.coldBrewedCoffee = this.coldBrewedCoffee + 19;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }
  onCappuccino(){
    this.cappuccino = this.cappuccino + 28.90;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }
  onFlatWhite(){
    this.flatWhite = this.flatWhite + 25.90;
    this.finalPrice = this.brewedCoffee + this.americano + this.caffeMocha + this.espresso + this.coldBrewedCoffee + this.cappuccino + this.flatWhite;

  }

  onFinalOrder(){
    this.router.navigate(['/payment'], { queryParams:{name: this.name, finalPrice: this.finalPrice}})
    console.log(this.finalPrice);
  }

}
