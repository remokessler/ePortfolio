import {Component, Input} from '@angular/core';
import {AppBodyComponent} from '../app-body/app-body';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.css'],
})
export class NavigationComponent {
  @Input()
  public appBody: AppBodyComponent;

  public navigate(page:string) {
    this.appBody.setActivePage(page);
  }
}
