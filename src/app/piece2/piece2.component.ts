import { Component, ElementRef, OnInit, HostListener, Host } from '@angular/core';
import { PositionService } from '../position.service'; 

import { COLCOUNT, ROWCOUNT, WIDTH, HEIGHT } from 'src/constants';

@Component({
  selector: 'app-piece2',
  templateUrl: './piece2.component.html',
  styleUrls: ['./piece2.component.css']
})
export class Piece2Component implements OnInit {
  @HostListener('document:keydown', ['$event'])
  onKey(event: any) {
    switch(event.key){
      case 'ArrowRight': {
        if(this.currentPosition[0] < COLCOUNT-1) {
          this.updatePosition([this.currentPosition[0]+1,this.currentPosition[1]]);
        }
        break;
      }
      case 'ArrowLeft': {
        if(this.currentPosition[0] > 0) {
          this.updatePosition([this.currentPosition[0]-1,this.currentPosition[1]]);
        }
        break;
      }
      case 'ArrowUp': {
        if(this.currentPosition[1] > 0) {
          this.updatePosition([this.currentPosition[0],this.currentPosition[1]-1]);
        }
        break;
      }
      case 'ArrowDown': {
        if(this.currentPosition[1] < ROWCOUNT-1) {
          this.updatePosition([this.currentPosition[0],this.currentPosition[1]+1]);
        }
        break;
      }
    }
    console.log(event.key);
  }

  el!: ElementRef;
  currentPosition: [number,number] = [COLCOUNT-1,ROWCOUNT-1];

  constructor() { }

  ngOnInit(): void {
    this.el = new ElementRef(document.getElementById("piece2"));
  }

  updatePosition(v: [number,number]): void {
    this.el.nativeElement.style.transform = `translate(${(v[0] - COLCOUNT + 1)*WIDTH}px,${(v[1] - ROWCOUNT + 1)*HEIGHT}px)`
    this.currentPosition = v;
  }

}
