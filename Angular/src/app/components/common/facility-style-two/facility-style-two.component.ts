import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-facility-style-two',
    templateUrl: './facility-style-two.component.html',
    styleUrls: ['./facility-style-two.component.scss']
})
export class FacilityStyleTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    facilityContent = [
        {
            icon: 'bx bx-shopping-bag',
            title: 'Shop Online',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.'
        },
        {
            icon: 'bx bxs-plane-take-off',
            title: 'Free Shipping',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.'
        },
        {
            icon: 'bx bx-info-square',
            title: 'Return Policy',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.'
        },
        {
            icon: 'bx bx-check-shield',
            title: 'Secured Payments',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.'
        }
    ]

}