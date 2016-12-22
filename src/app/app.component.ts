import {Component, OnInit} from '@angular/core';
import {PhotoService} from "./photos.service";
import {Photo} from "./models";

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(private photoService: PhotoService) {

        this.photos = photoService.getPhotos(this.defaultRow1Quantity);
    }

    photos: Photo[];
    defaultRow1Quantity: number = 12;
    infinityScroll: boolean = false;
    defaultAddToScroll: number = 3;

    quantityChanged($event: any): void {

        if (!isNaN($event['value'])) {

            if (!$event['isInfinityScroll']) {
                this.photos = this.photoService.getPhotos(+$event['value']);
            } else {
                this.photoService.getPhotos(+$event).forEach((photo: Photo)=> {
                    if (this.photos) {
                        this.photos.push(photo);
                    }
                })
            }
        }
    };

    scrolledToBottom($event): void {
        if (this.photos) {
            this.photoService.getPhotos(this.defaultAddToScroll).forEach((photo: Photo)=> {
                this.photos.push(photo);
            })
        }
        ;
    };

    removePhotoByIndex(index: number): void {
        this.photos.splice(index, 1);
    }
}
