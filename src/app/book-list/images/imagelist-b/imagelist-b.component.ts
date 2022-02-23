import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-b',
  templateUrl: './imagelist-b.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListBComponent implements OnInit {

  imageListB: any[];
  rowIndexArray: [];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailListB();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListB = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListB.length +1) / 3)).keys());
      }
    );
  }

}
