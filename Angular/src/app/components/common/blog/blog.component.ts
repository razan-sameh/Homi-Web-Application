import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: "Our Latest News",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        }
    ]
    singleBlogPost = [
        {
            img: 'assets/img/blog/blog1.jpg',
            tag: 'Furniture',
            title: 'Spotlight on Bernhardt Modern American Furniture',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            link: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog2.jpg',
            tag: 'Sofa',
            title: '4 Ways to Decorate your Living Room with a Brown Sofa',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            link: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog3.jpg',
            tag: 'Outdoor',
            title: '4 Ways to Create the Ultimate Outdoor Living Space',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            link: 'blog-details'
        }
    ]

}