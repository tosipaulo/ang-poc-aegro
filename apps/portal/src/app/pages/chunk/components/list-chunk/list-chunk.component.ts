import { Component, Input } from '@angular/core';
import { FarmModel } from '../../../../models/farm.model';

@Component({
  selector: 'aegro-list-chunk',
  templateUrl: './list-chunk.component.html',
  styleUrls: ['./list-chunk.component.scss'],
})
export class ListChunkComponent  {

  @Input() farm!: FarmModel
}
