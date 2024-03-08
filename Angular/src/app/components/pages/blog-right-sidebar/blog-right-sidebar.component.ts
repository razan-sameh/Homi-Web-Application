import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-right-sidebar',
    templateUrl: './blog-right-sidebar.component.html',
    styleUrls: ['./blog-right-sidebar.component.scss']
})
export class BlogRightSidebarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            bgImage: 'assets/img/page-title-bg.jpg',
            title: 'Blog Right Sidebar'
        }
    ]
    singleBlogPost = [
        {
            img: 'assets/img/blog/blog1.jpg',
            tag: 'Furniture',
            title: 'Spotlight on Bernhardt Modern American Furniture',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog2.jpg',
            tag: 'Sofa',
            title: '4 Ways to Decorate your Living Room with a Brown Sofa',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog3.jpg',
            tag: 'Outdoor',
            title: '4 Ways to Create the Ultimate Outdoor Living Space',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog4.jpg',
            tag: 'Furniture',
            title: 'Decorating Tips for Arranging Living Room Furniture',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog5.jpg',
            tag: 'Cleaning',
            title: 'Keep Things Organized and Get Ready for Spring Cleaning',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog6.jpg',
            tag: 'Spotlight',
            title: 'Spotlight on the Natuzzi Editions Furniture Collection',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog4.jpg',
            tag: 'Furniture',
            title: 'Decorating Tips for Arranging Living Room Furniture',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog5.jpg',
            tag: 'Cleaning',
            title: 'Keep Things Organized and Get Ready for Spring Cleaning',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog6.jpg',
            tag: 'Spotlight',
            title: 'Spotlight on the Natuzzi Editions Furniture Collection',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog1.jpg',
            tag: 'Furniture',
            title: 'Spotlight on Bernhardt Modern American Furniture',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog2.jpg',
            tag: 'Sofa',
            title: '4 Ways to Decorate your Living Room with a Brown Sofa',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        },
        {
            img: 'assets/img/blog/blog3.jpg',
            tag: 'Outdoor',
            title: '4 Ways to Create the Ultimate Outdoor Living Space',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            linkText: 'Read More',
            detailsLink: 'blog-details'
        }
    ]

    blogRightSidebar: number = 1;

}