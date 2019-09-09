import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	leagueName = "";

  constructor(private eventEmitterService: EventEmitterService) { 
	  if (this.eventEmitterService.subsVar2==undefined) {    
	      this.eventEmitterService.subsVar2 = this.eventEmitterService.    
	      invokeLeagueName.subscribe((leagueName) => {    
	     	this.leagueName=leagueName;
	      });    
	    }   
	}

  ngOnInit() {
  }

}
