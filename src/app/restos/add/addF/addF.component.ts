import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { FService } from "../../../services/resto/f.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addF',
  templateUrl: './addF.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class FComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceFs: any[];
  priceFSubscription: Subscription;

  itemPriceFs: any[];
  itemPriceFSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceFs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public fService: FService
  ) {
    this.getScreenSize();
  }

  getScreenSize() {
    //@ts-ignore
    this.scrHeight = window.innerHeight;
  }

  submit() {
    this.fService.saveTotalFToFirebaseinServer();
    this.fService.saveTotalCompleteFToFirebaseinServer();
    this.fService.saveTotalTvaFToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceFSubscription = this.fService.priceFSubject.subscribe(
      (priceFs: any[]) => {
        this.priceFs = priceFs;
      }
    );
    this.fService.emitPriceFSubject();
    this.fService.savePriceFFromFirebaseinServer();

    // ------

    this.itemPriceFSubscription = this.fService.itemPriceFSubject.subscribe(
      (itemPriceFs: any[]) => {
        this.itemPriceFs = itemPriceFs;
      }
    );
    this.fService.emitItemPriceFSubject();
    this.fService.saveItemPriceFFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalFOnFirebase() {
    this.fService.saveTotalF();
  }

  // ----

  onSaveTotalCompleteFOnFirebase() {
    this.fService.saveTotalCompleteF();
  }

  // -----

  onSaveTotalTvaFOnFirebase() {
    this.fService.saveTotalTvaF();
  }

}
