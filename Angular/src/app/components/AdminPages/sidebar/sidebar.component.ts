import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../pages/my-account-page/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor(public accoutService:AccountService,public activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
    }
// nav.component.ts
menuItems = ['Categories', 'Products','Brands']
}
