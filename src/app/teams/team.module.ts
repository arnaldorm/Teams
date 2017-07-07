import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {  SharedModule } from '../shared/shared.module';

import { TeamListComponent }  from './team-list.component';
//import { TeamDetailComponent }  from './team-detail.component';
import { TeamService } from './team.service';

@NgModule({
    declarations: [
        TeamListComponent,
        //TeamDetailComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'teams', component: TeamListComponent },
            //{ path: 'team/:id', component: TeamDetailComponent }
        ])
    ],
    providers: [ 
        TeamService
    ]
})

export class TeamModule {}