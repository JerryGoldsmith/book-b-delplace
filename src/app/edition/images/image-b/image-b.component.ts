import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from '../../../services/image.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-image-b',
  templateUrl: './image-b.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageBComponent implements OnInit {

  imgSrc: string;
  selectedImage: File;
  imageList: string[];
  imageListAll: string[];
  rowIndexArray: number[];

  formTemplate = new FormGroup(
    {
      caption : new FormControl('', Validators.required),
      category : new FormControl(''),
      imageUrl : new FormControl('', Validators.required)
    }
  );
  isSubmitted: boolean;

  constructor(
    private storage: AngularFireStorage,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.resetForm();

    this.imageService.getImageDetailListB();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
      }
    );

    // ----

    this.imageService.getImageDetailListAll();

    this.imageService.imageDetailListAll.snapshotChanges().subscribe(
      list => {
        this.imageListAll = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListAll.length +1) / 3)).keys());
      }
    );

  }

  showPreview(event:any) {
    if(event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = '../../assets/cape-verde.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue: { [x: string]: any; category: any; }) {
    this.isSubmitted = true;
    if(this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.imageService.insertImageDetailsB(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue(
      {
        caption: '',
        imageUrl: '',
        category: 'articleB'
      }
    );
    this.imgSrc = "../../assets/cape-verde.jpg";
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
