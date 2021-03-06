import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationHomeAdminRoutingModule } from './reservation-home-admin-routing.module';
import { ReservationHomeAdminComponent } from 'src/app/part01-reservation/reservation-home-admin/reservation-home-admin.component';

import { ReservationAdminComponent } from 'src/app/part01-reservation/reservation-admin/reservation-admin.component';
import { ReservationQueryDateComponent } from 'src/app/part01-reservation/reservation-query-date/reservation-query-date.component';

import { SeatsComponent } from 'src/app/part01-reservation/seats/seats/seats.component';

import { ButtonAAComponent } from 'src/app/part01-reservation/buttons-delete/button-aa/button-aa.component';
import { ButtonBAComponent } from 'src/app/part01-reservation/buttons-delete/button-ba/button-ba.component';
import { ButtonCAComponent } from 'src/app/part01-reservation/buttons-delete/button-ca/button-ca.component';
import { ButtonDAComponent } from 'src/app/part01-reservation/buttons-delete/button-da/button-da.component';
import { ButtonEAComponent } from 'src/app/part01-reservation/buttons-delete/button-ea/button-ea.component';
import { ButtonFAComponent } from 'src/app/part01-reservation/buttons-delete/button-fa/button-fa.component';
import { ButtonGAComponent } from 'src/app/part01-reservation/buttons-delete/button-ga/button-ga.component';
import { ButtonHAComponent } from 'src/app/part01-reservation/buttons-delete/button-ha/button-ha.component';
import { ButtonIAComponent } from 'src/app/part01-reservation/buttons-delete/button-ia/button-ia.component';
import { ButtonJAComponent } from 'src/app/part01-reservation/buttons-delete/button-ja/button-ja.component';
import { ButtonKAComponent } from 'src/app/part01-reservation/buttons-delete/button-ka/button-ka.component';
import { ButtonLAComponent } from 'src/app/part01-reservation/buttons-delete/button-la/button-la.component';
import { ButtonMAComponent } from 'src/app/part01-reservation/buttons-delete/button-ma/button-ma.component';
import { ButtonNAComponent } from 'src/app/part01-reservation/buttons-delete/button-na/button-na.component';
import { ButtonOAComponent } from 'src/app/part01-reservation/buttons-delete/button-oa/button-oa.component';
import { ButtonPAComponent } from 'src/app/part01-reservation/buttons-delete/button-pa/button-pa.component';
import { ButtonQAComponent } from 'src/app/part01-reservation/buttons-delete/button-qa/button-qa.component';
import { ButtonRAComponent } from 'src/app/part01-reservation/buttons-delete/button-ra/button-ra.component';
import { ButtonSAComponent } from 'src/app/part01-reservation/buttons-delete/button-sa/button-sa.component';
import { ButtonTAComponent } from 'src/app/part01-reservation/buttons-delete/button-ta/button-ta.component';
import { ButtonUAComponent } from 'src/app/part01-reservation/buttons-delete/button-ua/button-ua.component';
import { ButtonVAComponent } from 'src/app/part01-reservation/buttons-delete/button-va/button-va.component';
import { ButtonWAComponent } from 'src/app/part01-reservation/buttons-delete/button-wa/button-wa.component';
import { ButtonXAComponent } from 'src/app/part01-reservation/buttons-delete/button-xa/button-xa.component';
import { ButtonYAComponent } from 'src/app/part01-reservation/buttons-delete/button-ya/button-ya.component';
import { ButtonZAComponent } from 'src/app/part01-reservation/buttons-delete/button-za/button-za.component';
import { ButtonABComponent } from 'src/app/part01-reservation/buttons-delete/button-ab/button-ab.component';
import { ButtonBBComponent } from 'src/app/part01-reservation/buttons-delete/button-bb/button-bb.component';
import { ButtonCBComponent } from 'src/app/part01-reservation/buttons-delete/button-cb/button-cb.component';
import { ButtonDBComponent } from 'src/app/part01-reservation/buttons-delete/button-db/button-db.component';
import { ButtonEBComponent } from 'src/app/part01-reservation/buttons-delete/button-eb/button-eb.component';
import { ButtonFBComponent } from 'src/app/part01-reservation/buttons-delete/button-fb/button-fb.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeyValuePipeModule } from 'src/app/routing/key-value-pipe.module';
import { ValueArrayPipeModule } from 'src/app/routing/value-array-pipe.module';

@NgModule({
  declarations: [
    ReservationHomeAdminComponent,
    ReservationAdminComponent,
    ReservationQueryDateComponent,
    SeatsComponent,

    ButtonAAComponent,
    ButtonBAComponent,
    ButtonCAComponent,
    ButtonDAComponent,
    ButtonEAComponent,
    ButtonFAComponent,
    ButtonGAComponent,
    ButtonHAComponent,
    ButtonIAComponent,
    ButtonJAComponent,
    ButtonKAComponent,
    ButtonLAComponent,
    ButtonMAComponent,
    ButtonNAComponent,
    ButtonOAComponent,
    ButtonPAComponent,
    ButtonQAComponent,
    ButtonRAComponent,
    ButtonSAComponent,
    ButtonTAComponent,
    ButtonUAComponent,
    ButtonVAComponent,
    ButtonWAComponent,
    ButtonXAComponent,
    ButtonYAComponent,
    ButtonZAComponent,

    ButtonABComponent,
    ButtonBBComponent,
    ButtonCBComponent,
    ButtonDBComponent,
    ButtonEBComponent,
    ButtonFBComponent
  ],
  imports: [
    CommonModule,
    ReservationHomeAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    KeyValuePipeModule,
    ValueArrayPipeModule
  ],
  exports: [
    ReservationHomeAdminComponent,
    ReservationAdminComponent,
    ReservationQueryDateComponent,
    SeatsComponent,

    ButtonAAComponent,
    ButtonBAComponent,
    ButtonCAComponent,
    ButtonDAComponent,
    ButtonEAComponent,
    ButtonFAComponent,
    ButtonGAComponent,
    ButtonHAComponent,
    ButtonIAComponent,
    ButtonJAComponent,
    ButtonKAComponent,
    ButtonLAComponent,
    ButtonMAComponent,
    ButtonNAComponent,
    ButtonOAComponent,
    ButtonPAComponent,
    ButtonQAComponent,
    ButtonRAComponent,
    ButtonSAComponent,
    ButtonTAComponent,
    ButtonUAComponent,
    ButtonVAComponent,
    ButtonWAComponent,
    ButtonXAComponent,
    ButtonYAComponent,
    ButtonZAComponent,

    ButtonABComponent,
    ButtonBBComponent,
    ButtonCBComponent,
    ButtonDBComponent,
    ButtonEBComponent,
    ButtonFBComponent
  ]
})
export class ReservationHomeAdminModule { }
