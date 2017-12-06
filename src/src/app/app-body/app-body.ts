import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'app-body.html',

})
export class AppBodyComponent {
  public activePage= 'home';

  public setActivePage(page: string): void {
    if (page) {
      this.activePage = page;
    }
  }
}
