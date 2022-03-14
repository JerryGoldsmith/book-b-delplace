import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { GService } from "../../../services/resto/g.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addG',
  templateUrl: './addG.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class GComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceGs: any[];
  priceGSubscription: Subscription;

  itemPriceGs: any[];
  itemPriceGSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceGs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public gService: GService
  ) {}

  submit() {
    this.gService.saveTotalGToFirebaseinServer();
    this.gService.saveTotalCompleteGToFirebaseinServer();
    this.gService.saveTotalTvaGToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceGSubscription = this.gService.priceGSubject.subscribe(
      (priceGs: any[]) => {
        this.priceGs = priceGs;
      }
    );
    this.gService.emitPriceGSubject();
    this.gService.savePriceGFromFirebaseinServer();

    // -----

    this.itemPriceGSubscription = this.gService.itemPriceGSubject.subscribe(
      (itemPriceGs: any[]) => {
        this.itemPriceGs = itemPriceGs;
      }
    );
    this.gService.emitItemPriceGSubject();
    this.gService.saveItemPriceGFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  onSaveTotalGOnFirebase() {
    this.gService.saveTotalG();
  }

  // ----

  onSaveTotalCompleteGOnFirebase() {
    this.gService.saveTotalCompleteG();
  }

  // -----

  onSaveTotalTvaGOnFirebase() {
    this.gService.saveTotalTvaG();
  }

}
