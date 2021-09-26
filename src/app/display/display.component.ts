import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';

import { Square } from '../square';
import { Position } from '../square';

import {ROWCOUNT, COLCOUNT} from '../../constants';

import { PositionService } from '../position.service'; 

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Output() clickEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() keyEvent: EventEmitter<number> = new EventEmitter<number>();

  currentId: number = 0;
  private currentColor: string = '';
  board: Position[][];

  constructor(private positionService: PositionService) { 
    this.board = []
    for(let i: number = 0; i < ROWCOUNT; i++)
    {
      this.board[i] = [];
      for(let j: number = 0; j < COLCOUNT; j++)
      {
        this.currentId = (i*COLCOUNT)+j;
        this.currentColor = (i%2 == 0 ? (j%2 == 0 ? 'white' : 'black') : (j%2 == 0 ? 'black' : 'white'));
        this.board[i][j] = new Position([j,i],this.currentColor);
      }
    }

  }

  ngOnInit(): void {
  }

  onClick(val: any) {
    this.positionService.position$.next(val);
    this.clickEvent.emit(val);
  }
}
