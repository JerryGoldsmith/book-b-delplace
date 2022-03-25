import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"; // date

// lazy load images
import { LazyImgDirective } from 'src/app/helpers/lazy-img.directive';

import { AuthGuardService } from 'src/app/services/auth-guard.service';

// ---------

import { ImagesComponent } from 'src/app/edition/images/images.component';

import { ImageComponent } from 'src/app/edition/images/image/image.component';
import { ImageArchiveComponent } from 'src/app/edition/images/image-archive/image-archive.component';
import { ImageBComponent } from 'src/app/edition/images/image-b/image-b.component';
import { ImageBArchiveComponent } from 'src/app/edition/images/image-b-archive/image-b-archive.component';
import { ImageCComponent } from 'src/app/edition/images/image-c/image-c.component';
import { ImageCArchiveComponent } from 'src/app/edition/images/image-c-archive/image-c-archive.component';
import { ImageDComponent } from 'src/app/edition/images/image-d/image-d.component';
import { ImageDArchiveComponent } from 'src/app/edition/images/image-d-archive/image-d-archive.component';
import { ImageEComponent } from 'src/app/edition/images/image-e/image-e.component';
import { ImageEArchiveComponent } from 'src/app/edition/images/image-e-archive/image-e-archive.component';
import { ImageFComponent } from 'src/app/edition/images/image-f/image-f.component';
import { ImageFArchiveComponent } from 'src/app/edition/images/image-f-archive/image-f-archive.component';
import { ImageGComponent } from 'src/app/edition/images/image-g/image-g.component';
import { ImageGArchiveComponent } from 'src/app/edition/images/image-g-archive/image-g-archive.component';
import { ImageHComponent } from 'src/app/edition/images/image-h/image-h.component';
import { ImageHArchiveComponent } from 'src/app/edition/images/image-h-archive/image-h-archive.component';
import { ImageIComponent } from 'src/app/edition/images/image-i/image-i.component';
import { ImageIArchiveComponent } from 'src/app/edition/images/image-i-archive/image-i-archive.component';
import { ImageJComponent } from 'src/app/edition/images/image-j/image-j.component';
import { ImageJArchiveComponent } from 'src/app/edition/images/image-j-archive/image-j-archive.component';
import { ImageKComponent } from 'src/app/edition/images/image-k/image-k.component';
import { ImageKArchiveComponent } from 'src/app/edition/images/image-k-archive/image-k-archive.component';
import { ImageLComponent } from 'src/app/edition/images/image-l/image-l.component';
import { ImageLArchiveComponent } from 'src/app/edition/images/image-l-archive/image-l-archive.component';

import { ImageListComponent } from 'src/app/edition/images/imagelist/imagelist.component';
import { ImageListBComponent } from 'src/app/edition/images/imagelist-b/imagelist-b.component';
import { ImageListCComponent } from 'src/app/edition/images/imagelist-c/imagelist-c.component';
import { ImageListDComponent } from 'src/app/edition/images/imagelist-d/imagelist-d.component';
import { ImageListEComponent } from 'src/app/edition/images/imagelist-e/imagelist-e.component';
import { ImageListFComponent } from 'src/app/edition/images/imagelist-f/imagelist-f.component';
import { ImageListGComponent } from 'src/app/edition/images/imagelist-g/imagelist-g.component';
import { ImageListHComponent } from 'src/app/edition/images/imagelist-h/imagelist-h.component';
import { ImageListIComponent } from 'src/app/edition/images/imagelist-i/imagelist-i.component';
import { ImageListJComponent } from 'src/app/edition/images/imagelist-j/imagelist-j.component';
import { ImageListKComponent } from 'src/app/edition/images/imagelist-k/imagelist-k.component';
import { ImageListLComponent } from 'src/app/edition/images/imagelist-l/imagelist-l.component';

const routes: Routes = [
    { path: 'image', canActivate: [AuthGuardService], component: ImagesComponent },

    { path: 'upload', canActivate: [AuthGuardService], component: ImageComponent },
    { path: 'uploadArchive', canActivate: [AuthGuardService], component: ImageArchiveComponent },
    { path: 'uploadB', canActivate: [AuthGuardService], component: ImageBComponent },
    { path: 'uploadArchiveB', canActivate: [AuthGuardService], component: ImageBArchiveComponent },
    { path: 'uploadC', canActivate: [AuthGuardService], component: ImageCComponent },
    { path: 'uploadArchiveC', canActivate: [AuthGuardService], component: ImageCArchiveComponent },
    { path: 'uploadD', canActivate: [AuthGuardService], component: ImageDComponent },
    { path: 'uploadArchiveD', canActivate: [AuthGuardService], component: ImageDArchiveComponent },
    { path: 'uploadE', canActivate: [AuthGuardService], component: ImageEComponent },
    { path: 'uploadArchiveE', canActivate: [AuthGuardService], component: ImageEArchiveComponent },
    { path: 'uploadF', canActivate: [AuthGuardService], component: ImageFComponent },
    { path: 'uploadArchiveF', canActivate: [AuthGuardService], component: ImageFArchiveComponent },
    { path: 'uploadG', canActivate: [AuthGuardService], component: ImageGComponent },
    { path: 'uploadArchiveG', canActivate: [AuthGuardService], component: ImageGArchiveComponent },
    { path: 'uploadH', canActivate: [AuthGuardService], component: ImageHComponent },
    { path: 'uploadArchiveH', canActivate: [AuthGuardService], component: ImageHArchiveComponent },
    { path: 'uploadI', canActivate: [AuthGuardService], component: ImageIComponent },
    { path: 'uploadArchiveI', canActivate: [AuthGuardService], component: ImageIArchiveComponent },
    { path: 'uploadJ', canActivate: [AuthGuardService], component: ImageJComponent },
    { path: 'uploadArchiveJ', canActivate: [AuthGuardService], component: ImageJArchiveComponent },
    { path: 'uploadK', canActivate: [AuthGuardService], component: ImageKComponent },
    { path: 'uploadArchiveK', canActivate: [AuthGuardService], component: ImageKArchiveComponent },
    { path: 'uploadL', canActivate: [AuthGuardService], component: ImageLComponent },
    { path: 'uploadArchiveL', canActivate: [AuthGuardService], component: ImageLArchiveComponent },

    { path: 'list', canActivate: [AuthGuardService], component: ImageListComponent },
    { path: 'listB', canActivate: [AuthGuardService], component: ImageListBComponent },
    { path: 'listC', canActivate: [AuthGuardService], component: ImageListCComponent },
    { path: 'listD', canActivate: [AuthGuardService], component: ImageListDComponent },
    { path: 'listE', canActivate: [AuthGuardService], component: ImageListEComponent },
    { path: 'listF', canActivate: [AuthGuardService], component: ImageListFComponent },
    { path: 'listG', canActivate: [AuthGuardService], component: ImageListGComponent },
    { path: 'listH', canActivate: [AuthGuardService], component: ImageListHComponent },
    { path: 'listI', canActivate: [AuthGuardService], component: ImageListIComponent },
    { path: 'listJ', canActivate: [AuthGuardService], component: ImageListJComponent },
    { path: 'listK', canActivate: [AuthGuardService], component: ImageListKComponent },
    { path: 'listL', canActivate: [AuthGuardService], component: ImageListLComponent }
];

@NgModule({
    declarations: [
        
        ImagesComponent,

        ImageComponent,
        ImageArchiveComponent,
        ImageBComponent,
        ImageBArchiveComponent,
        ImageCComponent,
        ImageCArchiveComponent,
        ImageDComponent,
        ImageDArchiveComponent,
        ImageEComponent,
        ImageEArchiveComponent,
        ImageFComponent,
        ImageFArchiveComponent,
        ImageGComponent,
        ImageGArchiveComponent,
        ImageHComponent,
        ImageHArchiveComponent,
        ImageIComponent,
        ImageIArchiveComponent,
        ImageJComponent,
        ImageJArchiveComponent,
        ImageKComponent,
        ImageKArchiveComponent,
        ImageLComponent,
        ImageLArchiveComponent,

        ImageListComponent,
        ImageListBComponent,
        ImageListCComponent,
        ImageListDComponent,
        ImageListEComponent,
        ImageListFComponent,
        ImageListGComponent,
        ImageListHComponent,
        ImageListIComponent,
        ImageListJComponent,
        ImageListKComponent,
        ImageListLComponent
    ],
    imports: [
        RouterModule.forRoot(routes,
            { preloadingStrategy: AuthPreloadStrategy }),
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonFormReactiveModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService,
        LazyImgDirective
    ]
})

export class Part01EditionImagesModule {
    constructor() {
        registerLocaleData(fr.default);
    }
}