import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonFormReactiveModule } from 'src/app/routing/common-form-reactive.module'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import * as fr from "@angular/common/locales/fr"; // date

// lazy load images
import { LazyImgDirective } from 'src/app/helpers/lazy-img.directive';
import { AuthPreloadStrategy } from '../pre-loading/auth-preload-strategy';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// guard
import { AuthGuardService } from 'src/app/services/auth-guard.service';

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

    // upload 3 > images backoffice/rendu
    {
        path: 'upload',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-a/images-a.module')
          .then(mod => mod.ImagesAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadB',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-b/images-b.module')
          .then(mod => mod.ImagesBModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadC',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-c/images-c.module')
          .then(mod => mod.ImagesCModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadD',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-d/images-d.module')
          .then(mod => mod.ImagesDModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadE',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-e/images-e.module')
          .then(mod => mod.ImagesEModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadF',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-f/images-f.module')
          .then(mod => mod.ImagesFModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadG',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-g/images-g.module')
          .then(mod => mod.ImagesGModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadH',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-h/images-h.module')
          .then(mod => mod.ImagesHModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadI',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-i/images-i.module')
          .then(mod => mod.ImagesIModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadJ',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-j/images-j.module')
          .then(mod => mod.ImagesJModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadK',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-k/images-k.module')
          .then(mod => mod.ImagesKModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadL',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/images-l/images-l.module')
          .then(mod => mod.ImagesLModule),
          data: { preload: true, delay:1000 }
    },

    // upload 1 > image archive

    {
        path: 'uploadArchive',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-a/image-archives-a.module')
          .then(mod => mod.ImageArchivesAModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveB',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-b/image-archives-b.module')
          .then(mod => mod.ImageArchivesBModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveC',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-c/image-archives-c.module')
          .then(mod => mod.ImageArchivesCModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveD',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-d/image-archives-d.module')
          .then(mod => mod.ImageArchivesDModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveE',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-e/image-archives-e.module')
          .then(mod => mod.ImageArchivesEModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveF',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-f/image-archives-f.module')
          .then(mod => mod.ImageArchivesFModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveG',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-g/image-archives-g.module')
          .then(mod => mod.ImageArchivesGModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveH',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-h/image-archives-h.module')
          .then(mod => mod.ImageArchivesHModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveI',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-i/image-archives-i.module')
          .then(mod => mod.ImageArchivesIModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveJ',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-j/image-archives-j.module')
          .then(mod => mod.ImageArchivesJModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveK',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-k/image-archives-k.module')
          .then(mod => mod.ImageArchivesKModule),
          data: { preload: true, delay:1000 }
    },
    {
        path: 'uploadArchiveL',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/archives/image-archives-l/image-archives-l.module')
          .then(mod => mod.ImageArchivesLModule),
          data: { preload: true, delay:1000 }
    },
    

    // list images > backoffice/rendu

    {
        path: 'list',
        canActivate: [AuthGuardService],
        loadChildren: () => import('src/app/mod/private/books/images/list/images-list-a/images-list-a.module')
          .then(mod => mod.ImagesListAModule),
          data: { preload: true, delay:1000 }
    },

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
        LazyLoadImageModule,
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
        LazyImgDirective,
        AuthPreloadStrategy
    ]
})

export class Part01EditionImagesModule {
    constructor() {
        registerLocaleData(fr.default);
    }
}