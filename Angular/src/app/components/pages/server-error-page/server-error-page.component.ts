import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-server-error-page',
  templateUrl: './server-error-page.component.html',
  styleUrls: ['./server-error-page.component.scss']
})
export class ServerErrorPageComponent implements OnInit{

    ngOnInit(): void {
    }
    errorContent = [
        {
            img: 'assets/img/500 Error.jpg',
            title: 'Error 500 : Server Error',
            paragraph: 'A bad request, you have made.'
        }
    ]
}
