import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    whyChooseContent = [
        {
            subTitle: 'WHY CHOOSE US',
            title: 'The Best Quality Fashion Store In Town',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            content: [
                {
                    title: 'Huge Selection',
                    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
                },
                {
                    title: 'Low Price Everyday',
                    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
                },
                {
                    title: 'Same Day Delivery',
                    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.'
                }
            ]
        }
    ]
    whyChooseImage = [
        {
            img: 'assets/img/categories/why-choose-us.jpg'
        }
    ]

}
