import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { EService } from "../../../services/resto/e.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addE',
  templateUrl: './addE.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class EComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceEs: any[];
  priceESubscription: Subscription;

  itemPriceEs: any[];
  itemPriceESubscription: Subscription;

  get sumTotalPrices() {
    return this.priceEs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public eService: EService
  ) {}

  submit() {
    this.eService.saveTotalEToFirebaseinServer();
    this.eService.saveTotalCompleteEToFirebaseinServer();
    this.eService.saveTotalTvaEToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceESubscription = this.eService.priceESubject.subscribe(
      (priceEs: any[]) => {
        this.priceEs = priceEs;
      }
    );
    this.eService.emitPriceESubject();
    this.eService.savePriceEFromFirebaseinServer();

    // -----

    this.itemPriceESubscription = this.eService.itemPriceESubject.subscribe(
      (itemPriceEs: any[]) => {
        this.itemPriceEs = itemPriceEs;
      }
    );
    this.eService.emitItemPriceESubject();
    this.eService.saveItemPriceEFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalEOnFirebase() {
    this.eService.saveTotalE();
  }

  // ----

  onSaveTotalCompleteEOnFirebase() {
    this.eService.saveTotalCompleteE();
  }

  // -----

  onSaveTotalTvaEOnFirebase() {
    this.eService.saveTotalTvaE();
  }

}
