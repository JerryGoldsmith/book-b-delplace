import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { DService } from "../../../services/resto/d.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addD',
  templateUrl: './addD.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class DComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceDs: any[];
  priceDSubscription: Subscription;

  itemPriceDs: any[];
  itemPriceDSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceDs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public dService: DService
  ) {
    this.getScreenSize();
  }

  getScreenSize() {
    //@ts-ignore
    this.scrHeight = window.innerHeight;
  }

  submit() {
    this.dService.saveTotalDToFirebaseinServer();
    this.dService.saveTotalCompleteDToFirebaseinServer();
    this.dService.saveTotalTvaDToFirebaseinServer();
  }

  ngOnInit(): void {
    
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceDSubscription = this.dService.priceDSubject.subscribe(
      (priceDs: any[]) => {
        this.priceDs = priceDs;
      }
    );
    this.dService.emitPriceDSubject();
    this.dService.savePriceDFromFirebaseinServer();

    // -----

    this.itemPriceDSubscription = this.dService.itemPriceDSubject.subscribe(
      (itemPriceDs: any[]) => {
        this.itemPriceDs = itemPriceDs;
      }
    );
    this.dService.emitItemPriceDSubject();
    this.dService.saveItemPriceDFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  onSaveTotalDOnFirebase() {
    this.dService.saveTotalD();
  }

  // ---

  onSaveTotalCompleteDOnFirebase() {
    this.dService.saveTotalCompleteD();
  }

  // -----

  onSaveTotalTvaDOnFirebase() {
    this.dService.saveTotalTvaD();
  }

}
