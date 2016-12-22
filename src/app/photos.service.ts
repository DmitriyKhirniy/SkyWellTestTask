import {Injectable} from "@angular/core";
import {Photo} from "./models";
@Injectable()
export class PhotoService{

    constructor(){}

    private photos : Photo[] = [
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'http://myhammond.com/wp-content/uploads/2016/10/Ad-300x250.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'http://www.queenslandpoetryfestival.com/site/wp-content/themes/bulteno-theme/images/no-banner-300x250.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.eclipsecon.org/2012/sites/eclipsecon.org.2012/files/300x2500aa5.png?1315863934'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'http://demo.hashthemes.com/viral/wp-content/uploads/2016/09/ads2.gif'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.cdc.gov/images/campaigns/dnpao/hw/hw-drink02-300x250.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        },
        {
            description : 'Some description',
            title: 'Some title',
            imgUrl: 'https://www.oracle.com/us/assets/j1-300x250-2590162.jpg'
        }
    ];

    public getPhotos(quantity : number) : Photo[]{
        return this.photos.slice(0 , quantity);
    }

}