import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageDetailList: AngularFireList<any>;

  imageDetailListA: AngularFireList<any>;
  imageDetailListB: AngularFireList<any>;
  imageDetailListC: AngularFireList<any>;
  imageDetailListD: AngularFireList<any>;
  imageDetailListE: AngularFireList<any>;
  imageDetailListF: AngularFireList<any>;
  imageDetailListG: AngularFireList<any>;
  imageDetailListH: AngularFireList<any>;
  imageDetailListI: AngularFireList<any>;
  imageDetailListJ: AngularFireList<any>;
  imageDetailListK: AngularFireList<any>;
  imageDetailListL: AngularFireList<any>;

  imageDetailListAll: AngularFireList<any>;
  imageDetailListEach: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  // -----

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  // -----

  getImageDetailListA() {
    this.imageDetailListA = this.firebase.list('imageDetailAs');
  }

  getImageDetailListB() {
    this.imageDetailListB = this.firebase.list('imageDetailBs');
  }

  getImageDetailListC() {
    this.imageDetailListC = this.firebase.list('imageDetailCs');
  }

  getImageDetailListD() {
    this.imageDetailListD = this.firebase.list('imageDetailDs');
  }

  getImageDetailListE() {
    this.imageDetailListE = this.firebase.list('imageDetailEs');
  }

  getImageDetailListF() {
    this.imageDetailListF = this.firebase.list('imageDetailFs');
  }

  getImageDetailListG() {
    this.imageDetailListG = this.firebase.list('imageDetailGs');
  }

  getImageDetailListH() {
    this.imageDetailListH = this.firebase.list('imageDetailHs');
  }

  getImageDetailListI() {
    this.imageDetailListI = this.firebase.list('imageDetailIs');
  }

  getImageDetailListJ() {
    this.imageDetailListJ = this.firebase.list('imageDetailJs');
  }

  getImageDetailListK() {
    this.imageDetailListK = this.firebase.list('imageDetailKs');
  }

  getImageDetailListL() {
    this.imageDetailListL = this.firebase.list('imageDetailLs');
  }

  getImageDetailListAll() {
    this.imageDetailListAll = this.firebase.list('imageDetailAlls');
  }

  // -------

  insertImageDetails(imageDetails: { [x: string]: any; category: any; }) {
    this.imageDetailList.push(imageDetails) ;
  }

  // -----

  insertImageDetailsA(imageDetailAs: { [x: string]: any; category: any; }): void {
    this.imageDetailListA.push(imageDetailAs);
  }

  insertImageDetailsB(imageDetailBs: { [x: string]: any; category: any; }): void {
    this.imageDetailListB.push(imageDetailBs);
  }

  insertImageDetailsC(imageDetailCs: { [x: string]: any; category: any; }): void {
    this.imageDetailListC.push(imageDetailCs);
  }

  insertImageDetailsD(imageDetailDs: { [x: string]: any; category: any; }): void {
    this.imageDetailListD.push(imageDetailDs);
  }

  insertImageDetailsE(imageDetailEs: { [x: string]: any; category: any; }): void {
    this.imageDetailListE.push(imageDetailEs);
  }

  insertImageDetailsF(imageDetailFs: { [x: string]: any; category: any; }): void {
    this.imageDetailListF.push(imageDetailFs);
  }

  insertImageDetailsG(imageDetailGs: { [x: string]: any; category: any; }): void {
    this.imageDetailListG.push(imageDetailGs);
  }

  insertImageDetailsH(imageDetailHs: { [x: string]: any; category: any; }): void {
    this.imageDetailListH.push(imageDetailHs);
  }

  insertImageDetailsI(imageDetailIs: { [x: string]: any; category: any; }): void {
    this.imageDetailListI.push(imageDetailIs);
  }

  insertImageDetailsJ(imageDetailJs: { [x: string]: any; category: any; }): void {
    this.imageDetailListJ.push(imageDetailJs);
  }

  insertImageDetailsK(imageDetailKs: { [x: string]: any; category: any; }): void {
    this.imageDetailListK.push(imageDetailKs);
  }

  insertImageDetailsL(imageDetailLs: { [x: string]: any; category: any; }): void {
    this.imageDetailListL.push(imageDetailLs);
  }

  insertImageDetailsAll(imageDetailAlls: { [x: string]: any; category: any; }): void {
    this.imageDetailListAll.push(imageDetailAlls);
  }

}
