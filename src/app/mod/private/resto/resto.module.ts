import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

import { RestoRoutingModule } from './resto-routing.module';
import { RestosComponent } from 'src/app/restos/restos.component';

// --------------------------------------------------
// ------------- partA / resto (restos) ------------- :
// --------------------------------------------------

// pages produits :
// --------------
import { AComponent } from 'src/app/restos//add/addA/addA.component';
import { BComponent } from 'src/app/restos//add/addB/addB.component';
import { CComponent } from 'src/app/restos//add/addC/addC.component';
import { DComponent } from 'src/app/restos//add/addD/addD.component';
import { EComponent } from 'src/app/restos//add/addE/addE.component';
import { FComponent } from 'src/app/restos//add/addF/addF.component';
import { GComponent } from 'src/app/restos//add/addG/addG.component';
import { HComponent } from 'src/app/restos//add/addH/addH.component';
import { IComponent } from 'src/app/restos//add/addI/addI.component';
import { JComponent } from 'src/app/restos//add/addJ/addJ.component';
import { KComponent } from 'src/app/restos//add/addK/addK.component';
import { LComponent } from 'src/app/restos//add/addL/addL.component';
// total
import { AbcdefghijklComponent } from 'src/app/restos/total/abcdefghijkl/abcdefghijkl.component';
// payment
import { PaymentComponent } from 'src/app/restos//total/payment/payment.component';
// services
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


@NgModule({
  declarations: [
    RestosComponent
    // CComponent,
    // BComponent,
    // AComponent,
    // DComponent,
    // EComponent,
    // FComponent,
    // JComponent,
    // LComponent,
    // KComponent,
    // GComponent,
    // HComponent,
    // IComponent,
    // PaymentComponent,
    // AbcdefghijklComponent
  ],
  imports: [
    RestoRoutingModule,
    CommonModule
  ],
  exports: [
    RestoRoutingModule,
    RestosComponent
    // CComponent,
    // BComponent,
    // AComponent,
    // DComponent,
    // EComponent,
    // FComponent,
    // JComponent,
    // LComponent,
    // KComponent,
    // GComponent,
    // HComponent,
    // IComponent,
    // PaymentComponent,
    // AbcdefghijklComponent
  ],
  providers: [
    // MatrixService,
    // AService,
    // BService,
    // CService,
    // DService,
    // EService,
    // FService,
    // GService,
    // HService,
    // IService,
    // JService,
    // KService,
    // LService
  ]
})
export class RestoModule {}
