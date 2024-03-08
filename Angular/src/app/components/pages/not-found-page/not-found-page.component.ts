import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-not-found-page',
    templateUrl: './not-found-page.component.html',
    styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

    ngOnInit(): void {
    }
    errorContent = [
        {
            img: 'assets/img/error.png',
            title: 'Error 404 : Page Not Found',
            paragraph: 'The page you are looking for might have been removed had its name changed or is temporarily unavailable.'
        }
    ]

}
