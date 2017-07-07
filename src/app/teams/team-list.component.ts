import { Component, OnInit }  from '@angular/core';

import { TeamService } from './team.service';
import { ITeam } from './team';

@Component({
    moduleId: module.id,
    templateUrl: 'team-list.component.html',
    //providers: [TeamService]
})

export class TeamListComponent implements OnInit {
    pageTitle: string = 'Team List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    teams: ITeam[];

    constructor(private _teamService: TeamService){
    }

    ngOnInit(): void {
        this._teamService.getTeams()
                .subscribe(teams => this.teams = teams,
                           error => this.errorMessage = <any>error);
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    } 

    onRatingClicked(message: string): void {
        this.pageTitle = 'Teams List: ' + message;
    }
}