import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Gallery'
        }
    ]
    singleGalleryItem = [
        {
            img: 'assets/img/gallery/gallery1.jpg'
        },
        {
            img: 'assets/img/gallery/gallery2.jpg'
        },
        {
            img: 'assets/img/gallery/gallery3.jpg'
        },
        {
            img: 'assets/img/gallery/gallery4.jpg'
        },
        {
            img: 'assets/img/gallery/gallery5.jpg'
        },
        {
            img: 'assets/img/gallery/gallery6.jpg'
        },
        {
            img: 'assets/img/gallery/gallery7.jpg'
        },
        {
            img: 'assets/img/gallery/gallery8.jpg'
        },
        {
            img: 'assets/img/gallery/gallery9.jpg'
        }
    ]

}