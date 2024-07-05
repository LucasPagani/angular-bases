import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[]= ['spiderman','Ironman','Hulk','sheHlk','Dr.Strange']
  public deleteHero?: string;


removeLastHeroe():void{
  this.deleteHero = this.heroNames.pop();


}




}
