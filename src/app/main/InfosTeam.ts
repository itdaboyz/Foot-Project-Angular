import { Component, OnInit } from '@angular/core';

export class InfosTeam implements OnInit {

	team_id:number;
	team_name:string;
	team_logo:string;
	fixtures=[];
	sumG;
	sumO;
	sumU;
	sumY;
	sumN;
	rank:number;
	identicalFixtures;

	constructor(team_id, team_name, team_logo, rank, fixtures){
		this.team_id = team_id;
		this.team_name = team_name;
		this.team_logo = team_logo;
		this.fixtures = fixtures;
		this.sumO = {"all": 0, "home": 0, "away": 0};
		this.sumU = {"all": 0, "home": 0, "away": 0};
		this.sumY = {"all": 0, "home": 0, "away": 0};
		this.sumN = {"all": 0, "home": 0, "away": 0};
		this.sumG = {"all": 0, "home": 0, "away": 0};
		this.rank = rank;

		this.parseScore();

		this.sumY["all"] = this.sumY["home"] + this.sumY["away"];
		this.sumU["all"] = this.sumU["home"] + this.sumU["away"];
		this.sumO["all"] = this.sumO["home"] + this.sumO["away"];

		this.sumG["all"] = this.sumO["all"] + this.sumU["all"];
		this.sumG["home"] = this.sumO["home"] + this.sumU["home"];
		this.sumG["away"] = this.sumO["away"] + this.sumU["away"];

		this.sumN["all"] = this.sumG["all"] - this.sumY["all"];
		this.sumN["home"] = this.sumG["home"] - this.sumY["home"];
		this.sumN["away"] = this.sumG["away"] - this.sumY["away"];
	}

	ngOnInit() { }

	parseScore(){
		for(let fixture of this.fixtures){
			let total = 0;
			let typeBTS ="N";
			let typeUO = "E";
			let place;
			if(fixture.homeTeam.team_id == this.team_id){
				place = "home";
			}
			else{
				place = "away";
			}
			if(fixture.score.fulltime!=null){
				let score = fixture.score.fulltime.toString().split("-");
				if(Number(score[0]) > 0 && Number(score[1]) > 0){
					typeBTS ="Y";
					this.sumY[place]++;
				}
				total = (Number(score[0])+Number(score[1]));
			}
			else{
				fixture.score.fulltime = "Erreur";
			}
			fixture.score.total = total;
			fixture.typeBTS = typeBTS;
			if(total>2){
				this.sumO[place] ++;
				typeUO = "O";
			}
			else if (total <= 2){
				this.sumU[place] ++;
				typeUO = "U";
			}
			fixture.typeUO = typeUO;
		}
	}
}