import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { EventEmitterService } from '../event-emitter.service';
import { DomSanitizer } from '@angular/platform-browser';
import { InfosTeam } from './InfosTeam';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  teams = [];
  standings = [];
  fixtures = [];
  id;
  infos = [];
  InfosTeam = [];
  InfosLeague = [];
  columnDefs = [];
  rowData = [];
  type = "uo";
  filter = "all";

  constructor(private apiService: ApiService, private eventEmitterService: EventEmitterService) { 

  	if (this.eventEmitterService.subsVar==undefined) {   
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeTeams.subscribe((id) => {    
     	this.id=id;
     	this.InfosTeam = [];
        this.loadTeams(id);
      });    
    }   
  }

  ngOnInit() {}

  loadTeams(id){
    if(!this.InfosLeague[id]){
	    this.apiService.getStats("teams", "league", id).subscribe((data)=>{
	      this.teams[id] = data['api']['teams'];
	    },
	    (error)=>{
	    	console.log(error);
	    }
	    ,
	    ()=>{this.loadFixtures(id)})
	}
	else(this.assignStandings(id))
   }

   loadFixtures(id){
	    this.apiService.getStats("fixtures", "league", id).subscribe(
	    	(data)=>{
	      this.fixtures[id] = data['api']['fixtures'];
	    },
	    (error)=>{
	    	console.log(error);
	    }
	    ,
	    ()=>{this.loadStandings(id)})
	}

	loadStandings(id){
		this.apiService.getStats("leagueTable", id).subscribe((data)=>{
	      this.standings[id] = data['api'];
	    },
	    (error)=>{
	    	console.log(error);
	    }
	    ,
	    ()=>{this.assignStandings(id)})
	}

	assignStandings(id){
		let i = 0;
    	let rank;
	
		for (let team of this.teams[id]){
    		this.assignFixtures(this.id, team.team_id, team.name, team.logo, i);
    		i++;
    	}
    	this.InfosLeague[id] = this.InfosTeam;
    	console.log(this.InfosLeague[id]);
    	this.setTable();
	}

	assignFixtures(id, team_id, team_name, team_logo, index){	
		let rank = "";
		if(this.standings[id]["results"] == 1){
			for(let standing of this.standings[id]["standings"][0]){
				if(standing.team_id == team_id){
					rank = standing.rank;
				}
			}
		}

		let i = 0;
		this.infos = [];
		for (let fixtures of this.fixtures[id].reverse()){
			if((fixtures.awayTeam.team_id == team_id || fixtures.homeTeam.team_id == team_id) && fixtures.statusShort=="FT"){
				let fixture_id = fixtures.fixture_id;
				this.infos[i] = fixtures;
				i++;
			}
		}
		this.InfosTeam[index] = new InfosTeam(team_id, team_name, team_logo, rank, this.infos);
		this.InfosTeam[index].filter = this.filter;
		this.InfosTeam[index].type = this.type;
	}


	setFilter(filter){
		if(this.filter!=filter){
			this.filter = filter;
			for(let team of this.InfosLeague[this.id]){
				team.filter = filter;
			}
			this.setTable();
		}
	}
	setType(type){
		if(this.type!=type){
			this.type = type;
			for(let team of this.InfosLeague[this.id]){
				team.type = type;
			}
			this.setTable();
		}
	}



	setTable(){

		if(this.type=="uo"){
			  this.columnDefs = [
		      {
		        headerName: "#",
		        field:'rank',
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        sort: "asc",
		        type: "numericColumn"
		      },
		      {
		        headerName: "Équipe",
		        field: "team_name",
		        minWidth: 180,
		        maxWidth: 350,
		        sortable: true
		      },
		      {
		        headerName: "G",
		        field: "sumG",
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        type: "numericColumn",
		        cellRenderer: this.sumGCellRenderer,
		        cellRendererParams:{filter:this.filter}
		      },
		      {
		        headerName: "O",
		        field: "sumO",
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        type: "numericColumn",
		        cellRenderer: this.sumOCellRenderer,
		        cellRendererParams:{filter:this.filter}
		      },
		      {
		        headerName: "U",
		        field: "sumU",
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        type: "numericColumn",
		        cellRenderer: this.sumUCellRenderer,
		        cellRendererParams:{filter:this.filter}
		      },
		      {
		        headerName: "Résultats",
		        field: "fixtures",
		        minWidth: 800,
		        sortable: true,
		        cellRenderer: this.fixturesCellRenderer,
		        cellRendererParams:{filter:this.filter, type:this.type}
		      }
		    ];
		}
		else{
			this.columnDefs = [
		      {
		        headerName: "#",
		        field:'rank',
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        sort: "asc",
		        type: "numericColumn"
		      },
		      {
		        headerName: "Équipe",
		        field: "team_name",
		        minWidth: 180,
		        maxWidth: 350,
		        sortable: true
		      },
		      {
		        headerName: "G",
		        field: "sumG",
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        type: "numericColumn",
		        cellRenderer: this.sumGCellRenderer,
		        cellRendererParams:{filter:this.filter}
		      },
		      {
		        headerName: "Y",
		        field: "sumY",
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        type: "numericColumn",
		        cellRenderer: this.sumYCellRenderer,
		        cellRendererParams:{filter:this.filter}
		      },
		      {
		        headerName: "N",
		        field: "sumN",
		        minWidth: 65,
		        width: 70,
		        maxWidth: 80,
		        sortable: true,
		        type: "numericColumn",
		        cellRenderer: this.sumNCellRenderer,
		        cellRendererParams:{filter:this.filter}
		      },
		      {
		        headerName: "Résultats",
		        field: "fixtures",
		        minWidth: 800,
		        sortable: true,
		        cellRenderer: this.fixturesCellRenderer,
		        cellRendererParams:{filter:this.filter, type:this.type}
		      }
		    ];
		}

	    this.rowData = this.InfosLeague[this.id];

	}

	sumGCellRenderer(params){
		return params.data.sumG[params.filter];
	}
	sumYCellRenderer(params){
		return params.data.sumY[params.filter];
	}
	sumNCellRenderer(params){
		return params.data.sumN[params.filter];
	}
	sumOCellRenderer(params){
		return params.data.sumO[params.filter];
	}
	sumUCellRenderer(params){
		return params.data.sumU[params.filter];
	}

	fixturesCellRenderer(params) {
	  let fixtures = params.data.fixtures;
	  let retour = "";
	  let type;
	  let filter;
	  for(let fixture of fixtures){
	  	if(params.filter == "all" || (params.filter == "home" && fixture.homeTeam.team_id == params.data.team_id) || (params.filter == "away" && fixture.awayTeam.team_id == params.data.team_id)){
		  	if(params.type == "uo"){
		  		type = fixture.typeUO;
		  	}
		  	else{
		  		type = fixture.typeBTS;
		  	}
		  	retour += '<div class="fixture ' + type + '" data-toggle="tooltip" data-placement="top" data-html="true" ';
		  	retour += 'data-original-title="<span class=\'date text-light\'>' + formatDate(fixture.event_date, 'dd/MM/yyyy - HH:mm', 'en-US') + '</span><span class=\'match\'>' + fixture.homeTeam.team_name + '-' + fixture.awayTeam.team_name +'</span> <span class=\'score\'>' + fixture.score.fulltime +'</span>" onmouseenter="$(this).tooltip(\'show\')">';
		    retour += '<span>' + type + '</span>';
		    retour += '</div>';
		  }
		}
	  return retour;
	}
    getRowClass = function(params) {
    	let fixtures = params.data.fixtures;
    	let counter = 0;
    	let previousValueUO = "";
    	let previousValueBTS = "";
    	let style = "";
    	let type;
    	for(let fixture of fixtures){
	  		if(params.data.filter == "all" || (params.data.filter == "home" && fixture.homeTeam.team_id == params.data.team_id) || (params.data.filter == "away" && fixture.awayTeam.team_id == params.data.team_id)){
		  		if(params.data.type == "uo" && (fixture.typeUO =="U" || fixture.typeUO == "O")){
				  	if( fixture.typeUO == previousValueUO){
				  		counter++;
				  	}
				  	else{
				  		counter = 0;
				  	}
			  		previousValueUO = fixture.typeUO;
			  	}
			  	else if(params.data.type == "bts" && (fixture.typeBTS =="Y" || fixture.typeBTS == "N")){
			  		if( fixture.typeBTS == previousValueBTS){
				  		counter++;
				  	}
				  	else{
				  		counter = 0;
				  	}
			  		previousValueBTS = fixture.typeBTS;
		  		}
			    if(counter == 5){
			    	style='sixInARow';
			    }
			    else if(counter == 6){
					style='sevenInARow';
			    }
			    else if(counter >= 7){
			    	style='eightInARow';
			    }
	  		}
	  	}
	    return style;
	}

  onFirstDataRendered(params) {
   params.api.sizeColumnsToFit();
  }

}