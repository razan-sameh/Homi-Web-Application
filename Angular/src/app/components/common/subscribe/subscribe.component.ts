import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    subscribeArea = [
        {
            bgImage: 'assets/img/subscribe-bg.jpg',
            subTitle: 'GET UPDATES',
            title: 'Our Newsletter'
        }
    ]

}