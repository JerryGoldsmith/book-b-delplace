import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { KService } from "../../../services/resto/k.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addK',
  templateUrl: './addK.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class KComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceKs: any[];
  priceKSubscription: Subscription;

  itemPriceKs: any[];
  itemPriceKSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceKs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public kService: KService
  ) {
    this.getScreenSize();
  }

  getScreenSize() {
    //@ts-ignore
    this.scrHeight = window.innerHeight;
  }

  submit() {
    this.kService.saveTotalKToFirebaseinServer();
    this.kService.saveTotalCompleteKToFirebaseinServer();
    this.kService.saveTotalTvaKToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceKSubscription = this.kService.priceKSubject.subscribe(
      (priceKs: any[]) => {
        this.priceKs = priceKs;
      }
    );
    this.kService.emitPriceKSubject();
    this.kService.savePriceKFromFirebaseinServer();

    // -----

    this.itemPriceKSubscription = this.kService.itemPriceKSubject.subscribe(
      (itemPriceKs: any[]) => {
        this.itemPriceKs = itemPriceKs;
      }
    );
    this.kService.emitItemPriceKSubject();
    this.kService.saveItemPriceKFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalKOnFirebase() {
    this.kService.saveTotalK();
  }

  // ----

  onSaveTotalCompleteKOnFirebase() {
    this.kService.saveTotalCompleteK();
  }

  // -----

  onSaveTotalTvaKOnFirebase() {
    this.kService.saveTotalTvaK();
  }

}
