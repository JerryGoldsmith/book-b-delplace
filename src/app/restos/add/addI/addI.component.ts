import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { IService } from "../../../services/resto/i.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addI',
  templateUrl: './addI.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class IComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceIs: any[];
  priceISubscription: Subscription;

  itemPriceIs: any[];
  itemPriceISubscription: Subscription;

  get sumTotalPrices() {
    return this.priceIs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public iService: IService
  ) {
    this.getScreenSize();
  }

  getScreenSize() {
    //@ts-ignore
    this.scrHeight = window.innerHeight;
  }

  submit() {
    this.iService.saveTotalIToFirebaseinServer();
    this.iService.saveTotalCompleteIToFirebaseinServer();
    this.iService.saveTotalTvaIToFirebaseinServer();
  }

  ngOnInit(): void {
    
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceISubscription = this.iService.priceISubject.subscribe(
      (priceIs: any[]) => {
        this.priceIs = priceIs;
      }
    );
    this.iService.emitPriceISubject();
    this.iService.savePriceIFromFirebaseinServer();

    // -----

    this.itemPriceISubscription = this.iService.itemPriceISubject.subscribe(
      (itemPriceIs: any[]) => {
        this.itemPriceIs = itemPriceIs;
      }
    );
    this.iService.emitItemPriceISubject();
    this.iService.saveItemPriceIFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalIOnFirebase() {
    this.iService.saveTotalI();
  }

  // ----

  onSaveTotalCompleteIOnFirebase() {
    this.iService.saveTotalCompleteI();
  }

  // -----

  onSaveTotalTvaIOnFirebase() {
    this.iService.saveTotalTvaI();
  }

}
