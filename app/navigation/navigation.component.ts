import { Component, OnInit } from '@angular/core';
import { Navigation } from '../type/navigationType';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navbar: Navigation;

  constructor() {

    this.navbar = {
        title: 'Tour of Heroes',
        navLinks:
        [
            {
                name: 'Dashboard', link: '/dashboard'
            },
            {
                name: 'Heroes', link: '/heroes'
            }
        ]
    };
  }

  ngOnInit() {
  }

}
