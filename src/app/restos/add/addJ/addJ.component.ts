import { Component, Input, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { JService } from "../../../services/resto/j.service";
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addJ',
  templateUrl: './addJ.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../add.component.scss']
})
export class JComponent implements OnInit {

  restoForm = new FormGroup({
    name: new FormControl()
  });

  matrixs: any[];
  matrixSubscription: Subscription;

  priceJs: any[];
  priceJSubscription: Subscription;

  itemPriceJs: any[];
  itemPriceJSubscription: Subscription;

  get sumTotalPrices() {
    return this.priceJs.filter(x => x.isChecked).reduce((a, b) => a + b.value + 0, 0)
  }

  constructor(
    public matrixService: MatrixService,
    public jService: JService
  ) {
    this.getScreenSize();
  }

  getScreenSize() {
    //@ts-ignore
    this.scrHeight = window.innerHeight;
  }

  submit() {
    this.jService.saveTotalJToFirebaseinServer();
    this.jService.saveTotalCompleteJToFirebaseinServer();
    this.jService.saveTotalTvaJToFirebaseinServer();
  }

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceJSubscription = this.jService.priceJSubject.subscribe(
      (priceJs: any[]) => {
        this.priceJs = priceJs;
      }
    );
    this.jService.emitPriceJSubject();
    this.jService.savePriceJFromFirebaseinServer();

    // -----

    this.itemPriceJSubscription = this.jService.itemPriceJSubject.subscribe(
      (itemPriceJs: any[]) => {
        this.itemPriceJs = itemPriceJs;
      }
    );
    this.jService.emitItemPriceJSubject();
    this.jService.saveItemPriceJFromFirebaseinServer();
  }

  radioValue = true;

  onRadioClick() {
    console.log('Is checked', this.radioValue);
    this.radioValue = !this.radioValue;
  }

  // ----

  onSaveTotalJOnFirebase() {
    this.jService.saveTotalJ();
  }

  // ----

  onSaveTotalCompleteJOnFirebase() {
    this.jService.saveTotalCompleteJ();
  }

  // -----

  onSaveTotalTvaJOnFirebase() {
    this.jService.saveTotalTvaJ();
  }

}
