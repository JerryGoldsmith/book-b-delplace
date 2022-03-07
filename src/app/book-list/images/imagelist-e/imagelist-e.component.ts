import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-e',
  templateUrl: './imagelist-e.component.html',
  styleUrls: ['./../images.component.scss',
  './../normalize.component.scss']
})
export class ImageListEComponent implements OnInit {

  imageListE: any[];
  rowIndexArray: [];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailListE();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListE = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListE.length +1) / 3)).keys());
      }
    );
  }

}
