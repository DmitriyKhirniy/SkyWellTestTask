import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, ReactiveFormsModule, FormsModule} from "@angular/forms";
import {TextMaskModule} from "angular2-text-mask";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {PhotoListComponent} from "./photoList/photoList.component";
import {PhotoService} from "./photos.service";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        FormBuilder,
        PhotoService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    declarations: [
        AppComponent,
        PhotoListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }