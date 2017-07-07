import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ITeam } from './team';

@Injectable()
export class TeamService{
    private _teamUrl = "api/teams/teams.json";

    constructor(private _http: Http){}

    getTeams(): Observable<ITeam[]>{
        return this._http.get(this._teamUrl)
            .map((response: Response) => <ITeam[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}