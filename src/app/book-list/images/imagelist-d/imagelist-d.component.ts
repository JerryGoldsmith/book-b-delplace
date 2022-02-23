import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-d',
  templateUrl: './imagelist-d.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListDComponent implements OnInit {

  imageListD: any[];
  rowIndexArray: [];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailListD();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListD = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListD.length +1) / 3)).keys());
      }
    );
  }

}
