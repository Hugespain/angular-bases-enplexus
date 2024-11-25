import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [
    {
      name:'Trunks',
      power: 10,
    }];

  @Output()
  public onNewId: EventEmitter<string>= new EventEmitter();

  emitId(id?:string):void{
    if(!id) return;
    this.onNewId.emit(id);

  }


 }
