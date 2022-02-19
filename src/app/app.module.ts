import { AppComponent } from './app.component';

/* -------------------------------------------------- */
/* --------------------- MODULES --------------------- */
/* -------------------------------------------------- */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// everywhere in the app
import { SharedModule } from "./shared/shared.module";
// SharedModule needs CommonModule
import { CommonModule } from "@angular/common";

/* -------------------------------------------------- */
/* --------------------- ROUTES --------------------- */
/* -------------------------------------------------- */

import { Routes, RouterModule } from '@angular/router';

/* -------------------------------------------------------- */
/* --------------------- ARCHITECTURE --------------------- */
/* -------------------------------------------------------- */

/* ---- Main ----- */

import { MainComponent } from './main/main.component';

/* ---- Navigation ----- */

import { Part01Component } from './part01/part01.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
  
  { path: 'part01', component: Part01Component }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Part01Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
