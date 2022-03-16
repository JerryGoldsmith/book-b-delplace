import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-j',
  templateUrl: './imagelist-j.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListJComponent implements OnInit {

  imageListJ: any[];
  rowIndexArray: any[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailList();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListJ = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListJ.length +1) / 3)).keys());
      }
    );
  }

}
