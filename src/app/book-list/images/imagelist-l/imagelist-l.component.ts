import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-imagelist-l',
  templateUrl: './imagelist-l.component.html',
  styleUrls: ['./../images.component.scss']
})
export class ImageListLComponent implements OnInit {

  imageListL: any[];
  rowIndexArray: any[];

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {

    this.imageService.getImageDetailList();

    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageListL = list.map(item => {return item.payload.val();});
        this.rowIndexArray = Array.from(Array(Math.ceil((this.imageListL.length +1) / 3)).keys());
      }
    );
  }

}
