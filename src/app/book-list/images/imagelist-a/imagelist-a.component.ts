import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-a',
  templateUrl: './imagelist-a.component.html',
  styleUrls: ['./../images.component.scss',
  './../normalize.component.scss']
})
export class ImageListAComponent implements OnInit {

  imageListA: any[];
  rowIndexArray: any[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailListA();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListA = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListA.length +1) / 3)).keys());
      }
    );
  }

}
