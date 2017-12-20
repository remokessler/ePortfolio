import {Component, EventEmitter, Input, NgModule} from '@angular/core';
import {MaterializeDirective, MaterializeModule, MaterializeAction} from 'angular2-materialize';

@NgModule({
  imports:[
    MaterializeDirective,
  ],
})
@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html',
  styleUrls: ['gallery.css'],
})
export class GalleryComponent {
  @Input()
  public id: number;
  @Input()
  public file: string;
  public modalActions = new EventEmitter<string|MaterializeAction>();

  public openModal() {
    this.modalActions.emit({action:'modal', params:['open']});
  }
  public closeModal() {
    this.modalActions.emit({action:'modal', params:['close']});
  }
}
