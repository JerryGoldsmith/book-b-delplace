import { Component, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { AService } from "../../../services/resto/a.service";
import { Subscription } from 'rxjs/Subscription';
import { Total } from '../../../models/total.model';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addA',
  templateUrl: './addA.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class AComponent implements OnInit {

  // restoForm: FormGroup;

  matrixs: any[];
  matrixSubscription: Subscription;

  priceAs: any[]
  priceASubscription: Subscription;

  itemPriceAs: any[];
  itemPriceASubscription: Subscription;

  get sumTotalPrices() {
    return this.priceAs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public aService: AService
  ) {
    this.getScreenSize();
  }

  getScreenSize(event?) {
    //@ts-ignore
    this.scrHeight = window.innerHeight;
    //@ts-ignore
    this.scrWidth = window.innerWidth;
    //@ts-ignore
    console.log(this.scrHeight, this.scrWidth);
    }

  // -----

  submit() {
    this.aService.saveTotalAToFirebaseinServer();
    this.aService.saveTotalCompleteAToFirebaseinServer();
    this.aService.saveTotalTvaAToFirebaseinServer();
  }

  ngOnInit(): void {

  //   this.restoForm = new FormGroup({
  //     restoName: new FormControl()
  //  });

    /* refresh page */

    // if(!window.location.hash) {
    //    window.location = window.location + '#loaded';
    //    window.location.reload();
    // }

    // -----

    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceASubscription = this.aService.priceASubject.subscribe(
      (priceAs: any[]) => {
        this.priceAs = priceAs;
      }
    );
    this.aService.emitPriceASubject();
    this.aService.savePriceAFromFirebaseinServer();

    // ----

    this.itemPriceASubscription = this.aService.itemPriceASubject.subscribe(
      (itemPriceAs: any[]) => {
        this.itemPriceAs = itemPriceAs;
      }
    );
    this.aService.emitItemPriceASubject();
    this.aService.saveItemPriceAFromFirebaseinServer();

    // ----
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalAOnFirebase() {
    this.aService.saveTotalA();
  }

  // ----

  onSaveTotalCompleteAOnFirebase() {
    this.aService.saveTotalCompleteA();
  }

  // -----

  onSaveTotalTvaAOnFirebase() {
    this.aService.saveTotalTvaA();
  }

}
