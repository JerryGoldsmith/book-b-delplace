import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatrixService } from "../services/resto/matrix.service";
import { AService } from "../services/resto/a.service";
import { BService } from "../services/resto/b.service";
import { CService } from "../services/resto/c.service";
import { DService } from "../services/resto/d.service";
import { EService } from "../services/resto/e.service";
import { FService } from "../services/resto/f.service";
import { GService } from "../services/resto/g.service";
import { HService } from "../services/resto/h.service";
import { IService } from "../services/resto/i.service";
import { JService } from "../services/resto/j.service";
import { KService } from "../services/resto/k.service";
import { LService } from "../services/resto/l.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-restos',
  templateUrl: './restos.component.html',
  styleUrls: ['./restos.component.scss', './main.component.scss']
})
export class RestosComponent implements OnInit {

  restoForm: FormGroup;

  matrixs: any[];
  matrixSubscription: Subscription;

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
  ) { }

  ngOnInit(): void {

    this.matrixSubscription = this.matrixService.matrixSubject.subscribe(
      (matrixs: any[]) => {
        this.matrixs = matrixs;
      }
    );
    this.matrixService.emitMatrixSubject();
    this.matrixService.saveMatrixFromFirebaseinServer();
  }

  onSaveOnFirebase() {
    this.matrixService.saveMatrixToFirebaseinServer();
  }

  // ----

  onDestroy() {
    this.matrixSubscription.unsubscribe();
  }

}
