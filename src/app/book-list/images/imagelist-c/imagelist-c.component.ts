import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-c',
  templateUrl: './imagelist-c.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListCComponent implements OnInit {

  imageListC: any[];
  rowIndexArray: [];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailList();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListC = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListC.length +1) / 3)).keys());
      }
    );
  }

}
