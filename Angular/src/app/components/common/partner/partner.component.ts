import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    partnerItem = [
        {
            link: '#',
            img: 'assets/img/partner/partner1 (1).png'
        },
        {
            link: '#',
            img: 'assets/img/partner/partner2 (1).png'
        },
        {
            link: '#',
            img: 'assets/img/partner/partner3 (1).png'
        },
        {
            link: '#',
            img: 'assets/img/partner/partner4 (1).png'
        },
        {
            link: '#',
            img: 'assets/img/partner/partner5 (1).png'
        }
    ]
    partnerSlidesOptions: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 5
			}
		}
    }

}
