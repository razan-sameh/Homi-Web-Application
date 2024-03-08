import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    videoContent = [
        {
            bgImage: 'assets/img/video-bg.jpg',
            title: 'Watch Our Video',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
            videoLink: 'https://www.youtube.com/watch?v=bk7McNUjWgw'
        }
    ]

}