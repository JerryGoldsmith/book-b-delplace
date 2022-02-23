import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { LService } from "../../../services/resto/l.service";
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-addL',
  templateUrl: './addL.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class LComponent implements OnInit {

  radioForm: FormGroup;

  matrixs: any[];
  matrixSubscription: Subscription;

  priceLs: any[];
  priceLSubscription: Subscription;

  itemPriceLs: any[];
  itemPriceLSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceLs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public lService: LService
  ) {}

  submit() {
    this.lService.saveTotalLToFirebaseinServer();
    this.lService.saveTotalCompleteLToFirebaseinServer();
    this.lService.saveTotalTvaLToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceLSubscription = this.lService.priceLSubject.subscribe(
      (priceLs: any[]) => {
        this.priceLs = priceLs;
      }
    );
    this.lService.emitPriceLSubject();
    this.lService.savePriceLFromFirebaseinServer();

    // -----

    this.itemPriceLSubscription = this.lService.itemPriceLSubject.subscribe(
      (itemPriceLs: any[]) => {
        this.itemPriceLs = itemPriceLs;
      }
    );
    this.lService.emitItemPriceLSubject();
    this.lService.saveItemPriceLFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalLOnFirebase() {
    this.lService.saveTotalL();
  }

  // ----

  onSaveTotalCompleteLOnFirebase() {
    this.lService.saveTotalCompleteL();
  }

  // -----

  onSaveTotalTvaLOnFirebase() {
    this.lService.saveTotalTvaL();
  }

}
