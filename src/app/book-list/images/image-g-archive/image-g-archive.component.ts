import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from '../../../services/image.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-image-g-archive',
  templateUrl: './image-g-archive.component.html',
  styleUrls: ['./../images.component.scss',
  './../normalize.component.scss']
})
export class ImageGArchiveComponent implements OnInit {

  imgSrc: string;
  selectedImage: any;
  imageList: any[];
  rowIndexArray: [];

  formTemplateArchive = new FormGroup(
    {
      caption : new FormControl('', Validators.required),
      category : new FormControl(''),
      imageUrl : new FormControl('', Validators.required)
    }
  );

  constructor(
    private storage: AngularFireStorage,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.resetForm();

    this.imageService.getImageDetailListG();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length +1) / 3)).keys());
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

  onSubmit(formValue) {
    this.isSubmitted = true;
    if(this.formTemplateArchive.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.imageService.insertImageDetailsAll(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplateArchive['controls'];
  }

  resetForm() {
    this.formTemplateArchive.reset();
    this.formTemplateArchive.setValue(
      {
        caption: '',
        imageUrl: '',
        category: 'articleAll'
      }
    );
    this.imgSrc = "../../assets/cape-verde.jpg";
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
