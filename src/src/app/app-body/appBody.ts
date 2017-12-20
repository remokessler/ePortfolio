import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'app-body.html',
  styleUrls: ['app-body.css'],
})
export class AppBodyComponent {
  public activePage= 'home';

  public setActivePage(page: string): void {
    if (page) {
      this.activePage = page;
    }
  }
}
