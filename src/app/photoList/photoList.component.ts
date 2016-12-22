import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, ApplicationRef} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Photo} from "../models";

//declare var Materialize : any;
declare var window:any;
declare var jQuery :any;
@Component({
    selector: 'photo-list',
    templateUrl: 'photoList.component.html'
})
export class PhotoListComponent implements OnInit{

    listForm : FormGroup;

    @Input()
    defaultQuantity : number;

    @Input()
    photos : Photo[];

    @Input()
    infinityScroll : boolean;

    @Output()
    quantityChnaged: EventEmitter<any>;

    @Output()
    scrollToBottomEmitter : EventEmitter<any> = new EventEmitter<any>();

    @Output()
    removePhotoEmitter : EventEmitter<number> = new EventEmitter<number>();

    removePhoto(photoIndex : number) : void{
        this.removePhotoEmitter.emit(photoIndex);
    }

    constructor(private fb : FormBuilder, private ref : ApplicationRef) {

        this.quantityChnaged = new EventEmitter<any>();
    }

    ngOnInit() {

        this.listForm = this.fb.group({
            'photoQuantity' : [this.defaultQuantity ],
            'isInfinityScroll' : [this.infinityScroll]
        });

        this.listForm.controls['photoQuantity'].valueChanges
            .subscribe(
                ((changes : number)=>{

                    this.quantityChnaged.emit({
                        value: changes,
                        isInfinityScroll : this.listForm.controls['isInfinityScroll'].value
                    });
                })
            );

            window.onscroll = function() {
                if(jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height()-5) {
                    if(this.listForm.controls['isInfinityScroll'].value){
                        this.scrollToBottomEmitter.emit('scrooled');
                        this.ref.tick();
                    }
                }
            }.bind(this)


    }
}