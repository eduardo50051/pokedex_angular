import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  header_footer = true; 

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
    
      .subscribe(() => {
        let currentRoute = this.activatedRoute.firstChild;
        while (currentRoute?.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        
        this.header_footer = currentRoute?.snapshot?.data?.['header_footer'] ?? true;
      });
  }
}
