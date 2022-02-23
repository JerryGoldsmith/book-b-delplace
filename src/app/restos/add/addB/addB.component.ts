import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { BService } from "../../../services/resto/b.service";
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-addB',
  templateUrl: './addB.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class BComponent implements OnInit {

  matrixs: any[];
  matrixSubscription: Subscription;

  priceBs: any[];
  priceBSubscription: Subscription;

  itemPriceBs: any[];
  itemPriceBSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceBs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public bService: BService
  ) {}

  submit() {
    this.bService.saveTotalBToFirebaseinServer();
    this.bService.saveTotalCompleteBToFirebaseinServer();
    this.bService.saveTotalTvaBToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceBSubscription = this.bService.priceBSubject.subscribe(
      (priceBs: any[]) => {
        this.priceBs = priceBs;
      }
    );
    this.bService.emitPriceBSubject();
    this.bService.savePriceBFromFirebaseinServer();

    // -----

    this.itemPriceBSubscription = this.bService.itemPriceBSubject.subscribe(
      (itemPriceBs: any[]) => {
        this.itemPriceBs = itemPriceBs;
      }
    );
    this.bService.emitItemPriceBSubject();
    this.bService.saveItemPriceBFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalBOnFirebase() {
    this.bService.saveTotalB();
  }

  // ----

  onSaveTotalCompleteBOnFirebase() {
    this.bService.saveTotalCompleteB();
  }

  // -----

  onSaveTotalTvaBOnFirebase() {
    this.bService.saveTotalTvaB();
  }

}
