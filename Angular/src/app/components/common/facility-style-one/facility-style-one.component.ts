import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-facility-style-one',
    templateUrl: './facility-style-one.component.html',
    styleUrls: ['./facility-style-one.component.scss']
})
export class FacilityStyleOneComponent implements OnInit {

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
    facilityImage = [
        {
            img: 'assets/img/categories/facility-img.png'
        }
    ]

}
