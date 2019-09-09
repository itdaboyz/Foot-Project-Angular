import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeTeams = new EventEmitter();
  invokeLeagueName = new EventEmitter();
  subsVar: Subscription;    
  subsVar2: Subscription;    
    
  constructor() { }    
    
  onLoadMiddleFrame(id, leagueName) {    
    this.invokeTeams.emit(id);
    this.invokeLeagueName.emit(leagueName);
  }    
}  