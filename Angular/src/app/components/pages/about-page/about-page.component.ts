import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/categories/pexels-maksim-goncharenok-4352247 (1).jpg',
            title: 'About Us'
        }
    ]

    aboutContent = [
        {
            subTitle: `ABOUT US`,
            title: `We've Been Thriving in 37 Years In This Area`,
            paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            content: [
                {
                    title: `Our Goal`,
                    paragraph: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
                },
                {
                    title: `Our Mission`,
                    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
                },
                {
                    title: `Our Vision`,
                    paragraph: `Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.`
                }
            ]
        }
    ]
    aboutImage = [
        {
            img: 'assets/img/categories/about-img1.jpg'
        },
        {
            img: 'assets/img/categories/about-img2.jpg'
        }
    ]

}
