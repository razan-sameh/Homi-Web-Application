import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-account-page',
    templateUrl: './my-account-page.component.html',
    styleUrls: ['./my-account-page.component.scss']
})
export class MyAccountPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-cecília-o-tommasini-904621.jpg',
            title: 'Profile Authentication'
        }
    ]

}
