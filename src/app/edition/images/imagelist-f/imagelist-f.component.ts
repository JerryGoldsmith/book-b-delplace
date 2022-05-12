import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-f',
  templateUrl: './imagelist-f.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListFComponent implements OnInit {

  imageListF: string[];
  rowIndexArray: number[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailList();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListF = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListF.length +1) / 3)).keys());
      }
    );
  }

}
