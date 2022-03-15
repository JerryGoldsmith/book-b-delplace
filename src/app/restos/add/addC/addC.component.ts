import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { CService } from "../../../services/resto/c.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addC',
  templateUrl: './addC.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class CComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceCs: any[];
  priceCSubscription: Subscription;

  itemPriceCs: any[];
  itemPriceCSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceCs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public cService: CService
  ) {
    this.getScreenSize();
  }

  getScreenSize() {
    //@ts-ignore
    this.scrHeight = window.innerHeight;
  }

  submit() {
    this.cService.saveTotalCToFirebaseinServer();
    this.cService.saveTotalCompleteCToFirebaseinServer();
    this.cService.saveTotalTvaCToFirebaseinServer();
  }

  ngOnInit(): void {
    
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceCSubscription = this.cService.priceCSubject.subscribe(
      (priceCs: any[]) => {
        this.priceCs = priceCs;
      }
    );
    this.cService.emitPriceCSubject();
    this.cService.savePriceCFromFirebaseinServer();

    // -----

    this.itemPriceCSubscription = this.cService.itemPriceCSubject.subscribe(
      (itemPriceCs: any[]) => {
        this.itemPriceCs = itemPriceCs;
      }
    );
    this.cService.emitItemPriceCSubject();
    this.cService.saveItemPriceCFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  onSaveTotalCOnFirebase() {
    this.cService.saveTotalC();
  }

  onSaveTotalCompleteCOnFirebase() {
    this.cService.saveTotalCompleteC();
  }

  // -----

  onSaveTotalTvaCOnFirebase() {
    this.cService.saveTotalTvaC();
  }

}
