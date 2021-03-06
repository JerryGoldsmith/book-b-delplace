import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-i',
  templateUrl: './imagelist-i.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListIComponent implements OnInit {

  imageListI: string[];
  rowIndexArray: number[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailList();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListI = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListI.length +1) / 3)).keys());
      }
    );
  }

}
