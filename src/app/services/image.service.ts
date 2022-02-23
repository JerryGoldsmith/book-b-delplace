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

  getImageDetailListEach() {
    this.imageDetailListEach = this.firebase.list('imageDetailEachs');
  }

  // -------

  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails);
  }

  // -----

  insertImageDetailsA(imageDetailAs) {
    this.imageDetailListA.push(imageDetailAs);
  }

  insertImageDetailsB(imageDetailBs) {
    this.imageDetailListB.push(imageDetailBs);
  }

  insertImageDetailsC(imageDetailCs) {
    this.imageDetailListC.push(imageDetailCs);
  }

  insertImageDetailsD(imageDetailDs) {
    this.imageDetailListD.push(imageDetailDs);
  }

  insertImageDetailsE(imageDetailEs) {
    this.imageDetailListE.push(imageDetailEs);
  }

  insertImageDetailsF(imageDetailFs) {
    this.imageDetailListF.push(imageDetailFs);
  }

  insertImageDetailsG(imageDetailGs) {
    this.imageDetailListG.push(imageDetailGs);
  }

  insertImageDetailsH(imageDetailHs) {
    this.imageDetailListH.push(imageDetailHs);
  }

  insertImageDetailsI(imageDetailIs) {
    this.imageDetailListI.push(imageDetailIs);
  }

  insertImageDetailsJ(imageDetailJs) {
    this.imageDetailListJ.push(imageDetailJs);
  }

  insertImageDetailsK(imageDetailKs) {
    this.imageDetailListK.push(imageDetailKs);
  }

  insertImageDetailsL(imageDetailLs) {
    this.imageDetailListL.push(imageDetailLs);
  }

  insertImageDetailsAll(imageDetailAlls) {
    this.imageDetailListAll.push(imageDetailAlls);
  }

  // insertImageDetailsEach(imageDetailEachs) {
  //   this.imageDetailListEach.push(imageDetailEachs);
  // }

}
