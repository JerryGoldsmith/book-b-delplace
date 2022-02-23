import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-h',
  templateUrl: './imagelist-h.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListHComponent implements OnInit {

  imageListH: any[];
  rowIndexArray: [];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailListH();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListH = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListH.length +1) / 3)).keys());
      }
    );
  }

}
