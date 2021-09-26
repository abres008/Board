import { Component, ElementRef, OnInit, HostListener, Host } from '@angular/core';
import { PositionService } from '../position.service'; 

import { COLCOUNT, ROWCOUNT, WIDTH, HEIGHT } from 'src/constants';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {
  @HostListener('document:keydown', ['$event'])
  onKey(event: any) {
    switch(event.key){
      case 'd': {
        if(this.currentPosition[0] < COLCOUNT-1) {
          this.updatePosition([this.currentPosition[0]+1,this.currentPosition[1]]);
        }
        break;
      }
      case 'a': {
        if(this.currentPosition[0] > 0) {
          this.updatePosition([this.currentPosition[0]-1,this.currentPosition[1]]);
        }
        break;
      }
      case 'w': {
        if(this.currentPosition[1] > 0) {
          this.updatePosition([this.currentPosition[0],this.currentPosition[1]-1]);
        }
        break;
      }
      case 's': {
        if(this.currentPosition[1] < ROWCOUNT-1) {
          this.updatePosition([this.currentPosition[0],this.currentPosition[1]+1]);
        }
        break;
      }
    }
    console.log(event.key);
  }

  el!: ElementRef;
  currentPosition: [number,number] = [0,0];

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    this.el = new ElementRef(document.getElementById("piece"));

    this.positionService.position$.subscribe({
      next: (v) => this.updatePosition(v)
    })
  }

  updatePosition(v: [number,number]): void {
    this.el.nativeElement.style.transform = `translate(${v[0]*WIDTH}px,${v[1]*HEIGHT}px)`
    this.currentPosition = v;
  }
}
