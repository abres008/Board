import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  position$: Subject<[number,number]> = new Subject<[number,number]>();
  
  constructor() { }
}
