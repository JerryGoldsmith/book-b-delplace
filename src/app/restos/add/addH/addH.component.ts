import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { HService } from "../../../services/resto/h.service";
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-addH',
  templateUrl: './addH.component.html',
  styleUrls: [
    './../../restos.component.scss', 
    './../add.component.scss']
})
export class HComponent implements OnInit {

  radioForm: FormGroup;

  matrixs: any[];
  matrixSubscription: Subscription;

  priceHs: any[];
  priceHSubscription: Subscription;

  itemPriceHs: any[];
  itemPriceHSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceHs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public hService: HService
  ) {}

  submit() {
    this.hService.saveTotalHToFirebaseinServer();
    this.hService.saveTotalCompleteHToFirebaseinServer();
    this.hService.saveTotalTvaHToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceHSubscription = this.hService.priceHSubject.subscribe(
      (priceHs: any[]) => {
        this.priceHs = priceHs;
      }
    );
    this.hService.emitPriceHSubject();
    this.hService.savePriceHFromFirebaseinServer();

    // -----

    this.itemPriceHSubscription = this.hService.itemPriceHSubject.subscribe(
      (itemPriceHs: any[]) => {
        this.itemPriceHs = itemPriceHs;
      }
    );
    this.hService.emitItemPriceHSubject();
    this.hService.saveItemPriceHFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  onSaveTotalHOnFirebase() {
    this.hService.saveTotalH();
  }

  // ----

  onSaveTotalCompleteHOnFirebase() {
    this.hService.saveTotalCompleteH();
  }

  // -----

  onSaveTotalTvaHOnFirebase() {
    this.hService.saveTotalTvaH();
  }

}
