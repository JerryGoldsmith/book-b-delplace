import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatrixService } from "../../../services/resto/matrix.service";
import { AService } from "../../../services/resto/a.service";
import { BService } from "../../../services/resto/b.service";
import { CService } from "../../../services/resto/c.service";
import { DService } from "../../../services/resto/d.service";
import { EService } from "../../../services/resto/e.service";
import { FService } from "../../../services/resto/f.service";
import { GService } from "../../../services/resto/g.service";
import { HService } from "../../../services/resto/h.service";
import { IService } from "../../../services/resto/i.service";
import { JService } from "../../../services/resto/j.service";
import { KService } from "../../../services/resto/k.service";
import { LService } from "../../../services/resto/l.service";
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: [
    './../../restos.component.scss',
    './../total.component.scss']
})
export class PaymentComponent implements OnInit {

  radioValue = true;
  isShow = false;

  matrixs: any[];
  matrixSubscription: Subscription;

  // -----

  priceAs: any[];
  priceASubscription: Subscription;

  priceBs: any[];
  priceBSubscription: Subscription;

  priceCs: any[];
  priceCSubscription: Subscription;

  priceDs: any[];
  priceDSubscription: Subscription;

  priceEs: any[];
  priceESubscription: Subscription;

  priceFs: any[];
  priceFSubscription: Subscription;

  priceGs: any[];
  priceGSubscription: Subscription;

  priceHs: any[];
  priceHSubscription: Subscription;

  priceIs: any[];
  priceISubscription: Subscription;

  priceJs: any[];
  priceJSubscription: Subscription;

  priceKs: any[];
  priceKSubscription: Subscription;

  priceLs: any[];
  priceLSubscription: Subscription;

  // -----

  itemPriceAs: any[];
  itemPriceASubscription: Subscription;

  itemPriceBs: any[];
  itemPriceBSubscription: Subscription;

  itemPriceCs: any[];
  itemPriceCSubscription: Subscription;

  itemPriceDs: any[];
  itemPriceDSubscription: Subscription;

  itemPriceEs: any[];
  itemPriceESubscription: Subscription;

  itemPriceFs: any[];
  itemPriceFSubscription: Subscription;

  itemPriceGs: any[];
  itemPriceGSubscription: Subscription;

  itemPriceHs: any[];
  itemPriceHSubscription: Subscription;

  itemPriceIs: any[];
  itemPriceISubscription: Subscription;

  itemPriceJs: any[];
  itemPriceJSubscription: Subscription;

  itemPriceKs: any[];
  itemPriceKSubscription: Subscription;

  itemPriceLs: any[];
  itemPriceLSubscription: Subscription;

  // ----

  width: 0;
  height: 0;

  onResized(event: ResizedEvent) {
    //@ts-ignore
    this.width = event.newWidth;
    //@ts-ignore
    this.height = event.newHeight;
  }

  get totalCompleteAs(): Array<any> {
    return (Object as any).values(this.aService.totalCompleteAs);
  }

  get totalCompleteBs(): Array<any> {
    return (Object as any).values(this.bService.totalCompleteBs);
  }

  get totalCompleteCs(): Array<any> {
    return (Object as any).values(this.cService.totalCompleteCs);
  }

  get totalCompleteDs(): Array<any> {
    return (Object as any).values(this.dService.totalCompleteDs);
  }

  get totalCompleteEs(): Array<any> {
    return (Object as any).values(this.eService.totalCompleteEs);
  }

  get totalCompleteFs(): Array<any> {
    return (Object as any).values(this.fService.totalCompleteFs);
  }

  get totalCompleteGs(): Array<any> {
    return (Object as any).values(this.gService.totalCompleteGs);
  }

  get totalCompleteHs(): Array<any> {
    return (Object as any).values(this.hService.totalCompleteHs);
  }

  get totalCompleteIs(): Array<any> {
    return (Object as any).values(this.iService.totalCompleteIs);
  }

  get totalCompleteJs(): Array<any> {
    return (Object as any).values(this.jService.totalCompleteJs);
  }

  get totalCompleteKs(): Array<any> {
    return (Object as any).values(this.kService.totalCompleteKs);
  }

  get totalCompleteLs(): Array<any> {
    return (Object as any).values(this.lService.totalCompleteLs);
  }

  // ----

  get totalTvaAs(): Array<any> {
    return (Object as any).values(this.aService.totalTvaAs);
  }

  get totalTvaBs(): Array<any> {
    return (Object as any).values(this.bService.totalTvaBs);
  }

  get totalTvaCs(): Array<any> {
    return (Object as any).values(this.cService.totalTvaCs);
  }

  get totalTvaDs(): Array<any> {
    return (Object as any).values(this.dService.totalTvaDs);
  }

  get totalTvaEs(): Array<any> {
    return (Object as any).values(this.eService.totalTvaEs);
  }

  get totalTvaFs(): Array<any> {
    return (Object as any).values(this.fService.totalTvaFs);
  }

  get totalTvaGs(): Array<any> {
    return (Object as any).values(this.gService.totalTvaGs);
  }

  get totalTvaHs(): Array<any> {
    return (Object as any).values(this.hService.totalTvaHs);
  }

  get totalTvaIs(): Array<any> {
    return (Object as any).values(this.iService.totalTvaIs);
  }

  get totalTvaJs(): Array<any> {
    return (Object as any).values(this.jService.totalTvaJs);
  }

  get totalTvaKs(): Array<any> {
    return (Object as any).values(this.kService.totalTvaKs);
  }

  get totalTvaLs(): Array<any> {
    return (Object as any).values(this.lService.totalTvaLs);
  }

  // ----

  constructor(
    public matrixService: MatrixService,
    public aService: AService,
    public bService: BService,
    public cService: CService,
    public dService: DService,
    public eService: EService,
    public fService: FService,
    public gService: GService,
    public hService: HService,
    public iService: IService,
    public jService: JService,
    public kService: KService,
    public lService: LService
  ) {}

  ngOnInit(): void {
    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();

    // ---

    this.priceASubscription = this.aService.priceASubject.subscribe(
      (priceAs: any[]) => {
        this.priceAs = priceAs;
      }
    );
    this.aService.emitPriceASubject();

    this.priceBSubscription = this.bService.priceBSubject.subscribe(
      (priceBs: any[]) => {
        this.priceBs = priceBs;
      }
    );
    this.bService.emitPriceBSubject();

    this.priceCSubscription = this.cService.priceCSubject.subscribe(
      (priceCs: any[]) => {
        this.priceCs = priceCs;
      }
    );
    this.cService.emitPriceCSubject();

    this.priceDSubscription = this.dService.priceDSubject.subscribe(
      (priceDs: any[]) => {
        this.priceDs = priceDs;
      }
    );
    this.dService.emitPriceDSubject();

    this.priceESubscription = this.eService.priceESubject.subscribe(
      (priceEs: any[]) => {
        this.priceEs = priceEs;
      }
    );
    this.eService.emitPriceESubject();

    this.priceFSubscription = this.fService.priceFSubject.subscribe(
      (priceFs: any[]) => {
        this.priceFs = priceFs;
      }
    );
    this.fService.emitPriceFSubject();

    this.priceGSubscription = this.gService.priceGSubject.subscribe(
      (priceGs: any[]) => {
        this.priceGs = priceGs;
      }
    );
    this.gService.emitPriceGSubject();

    this.priceHSubscription = this.hService.priceHSubject.subscribe(
      (priceHs: any[]) => {
        this.priceHs = priceHs;
      }
    );
    this.hService.emitPriceHSubject();

    this.priceISubscription = this.iService.priceISubject.subscribe(
      (priceIs: any[]) => {
        this.priceIs = priceIs;
      }
    );
    this.iService.emitPriceISubject();

    this.priceJSubscription = this.jService.priceJSubject.subscribe(
      (priceJs: any[]) => {
        this.priceJs = priceJs;
      }
    );
    this.jService.emitPriceJSubject();

    this.priceKSubscription = this.kService.priceKSubject.subscribe(
      (priceKs: any[]) => {
        this.priceKs = priceKs;
      }
    );
    this.kService.emitPriceKSubject();

    this.priceLSubscription = this.lService.priceLSubject.subscribe(
      (priceLs: any[]) => {
        this.priceLs = priceLs;
      }
    );
    this.lService.emitPriceLSubject();

    // -----

    this.itemPriceASubscription = this.aService.itemPriceASubject.subscribe(
      (itemPriceAs: any[]) => {
        this.itemPriceAs = itemPriceAs;
      }
    );
    this.aService.emitItemPriceASubject();

    this.itemPriceBSubscription = this.bService.itemPriceBSubject.subscribe(
      (itemPriceBs: any[]) => {
        this.itemPriceBs = itemPriceBs;
      }
    );
    this.bService.emitItemPriceBSubject();

    this.itemPriceCSubscription = this.cService.itemPriceCSubject.subscribe(
      (itemPriceCs: any[]) => {
        this.itemPriceCs = itemPriceCs;
      }
    );
    this.cService.emitItemPriceCSubject();

    this.itemPriceDSubscription = this.dService.itemPriceDSubject.subscribe(
      (itemPriceDs: any[]) => {
        this.itemPriceDs = itemPriceDs;
      }
    );
    this.dService.emitItemPriceDSubject();

    this.itemPriceESubscription = this.eService.itemPriceESubject.subscribe(
      (itemPriceEs: any[]) => {
        this.itemPriceEs = itemPriceEs;
      }
    );
    this.eService.emitItemPriceESubject();

    this.itemPriceFSubscription = this.fService.itemPriceFSubject.subscribe(
      (itemPriceFs: any[]) => {
        this.itemPriceFs = itemPriceFs;
      }
    );
    this.fService.emitItemPriceFSubject();

    this.itemPriceGSubscription = this.gService.itemPriceGSubject.subscribe(
      (itemPriceGs: any[]) => {
        this.itemPriceGs = itemPriceGs;
      }
    );
    this.gService.emitItemPriceGSubject();

    this.itemPriceHSubscription = this.hService.itemPriceHSubject.subscribe(
      (itemPriceHs: any[]) => {
        this.itemPriceHs = itemPriceHs;
      }
    );
    this.hService.emitItemPriceHSubject();

    this.itemPriceISubscription = this.iService.itemPriceISubject.subscribe(
      (itemPriceIs: any[]) => {
        this.itemPriceIs = itemPriceIs;
      }
    );
    this.iService.emitItemPriceISubject();

    this.itemPriceJSubscription = this.jService.itemPriceJSubject.subscribe(
      (itemPriceJs: any[]) => {
        this.itemPriceJs = itemPriceJs;
      }
    );
    this.jService.emitItemPriceJSubject();

    this.itemPriceKSubscription = this.kService.itemPriceKSubject.subscribe(
      (itemPriceKs: any[]) => {
        this.itemPriceKs = itemPriceKs;
      }
    );
    this.kService.emitItemPriceKSubject();

    this.itemPriceLSubscription = this.lService.itemPriceLSubject.subscribe(
      (itemPriceLs: any[]) => {
        this.itemPriceLs = itemPriceLs;
      }
    );
    this.lService.emitItemPriceLSubject();
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  // -----

  onDestroy() {
    this.matrixSubscription.unsubscribe();
  }

  // ----

  onDestroyPriceA() {
    this.priceASubscription.unsubscribe();
  }

  onDestroyPriceB() {
    this.priceBSubscription.unsubscribe();
  }

  onDestroyPriceC() {
    this.priceCSubscription.unsubscribe();
  }

  onDestroyPriceD() {
    this.priceDSubscription.unsubscribe();
  }

  onDestroyPriceE() {
    this.priceESubscription.unsubscribe();
  }

  onDestroyPriceF() {
    this.priceFSubscription.unsubscribe();
  }

  onDestroyPriceG() {
    this.priceGSubscription.unsubscribe();
  }

  onDestroyPriceH() {
    this.priceHSubscription.unsubscribe();
  }

  onDestroyPriceI() {
    this.priceISubscription.unsubscribe();
  }

  onDestroyPriceJ() {
    this.priceJSubscription.unsubscribe();
  }

  onDestroyPriceK() {
    this.priceKSubscription.unsubscribe();
  }

  onDestroyPriceL() {
    this.priceLSubscription.unsubscribe();
  }

  // ----

  onDestroyItemPriceA() {
    this.itemPriceASubscription.unsubscribe();
  }

  onDestroyItemPriceB() {
    this.itemPriceBSubscription.unsubscribe();
  }

  onDestroyItemPriceC() {
    this.itemPriceCSubscription.unsubscribe();
  }

  onDestroyItemPriceD() {
    this.itemPriceDSubscription.unsubscribe();
  }

  onDestroyItemPriceE() {
    this.itemPriceESubscription.unsubscribe();
  }

  onDestroyItemPriceF() {
    this.itemPriceFSubscription.unsubscribe();
  }

  onDestroyItemPriceG() {
    this.itemPriceGSubscription.unsubscribe();
  }

  onDestroyItemPriceH() {
    this.itemPriceHSubscription.unsubscribe();
  }

  onDestroyItemPriceI() {
    this.itemPriceISubscription.unsubscribe();
  }

  onDestroyItemPriceJ() {
    this.itemPriceJSubscription.unsubscribe();
  }

  onDestroyItemPriceK() {
    this.itemPriceKSubscription.unsubscribe();
  }

  onDestroyItemPriceL() {
    this.itemPriceLSubscription.unsubscribe();
  }
}
