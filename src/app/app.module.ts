import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { MalcsComponent } from './malcs.component';
import { EventListComponent } from './events/event-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service'
import { ToastrService } from './shared/toastr.service'
import { Error404Component } from './404.component'
import { EventListResolver } from './shared/events-list-resolver.service'
import { CreateSessionComponent } from './events/ceate-session.component'
import { SimpleModalComponent } from './shared/simple-modal.component'
import { UpvoteComponent } from './events/upvote.component'

let jQuery = window['$']

import { JQUERY_TOKEN } from './shared/jQuery.service';
import { ModalTriggerDirective } from './shared/modal-trigger.directive';

import { appRoutes } from './routes'
import { AuthService } from './user/auth.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/session-list.component';
import { CollapsibleWellComponent } from './shared/collapsible-well.component'
import { DurationPipe } from './shared/duration.pipe';
import { VoterService } from './shared/voter.service';


@NgModule({
  declarations: [
    MalcsComponent,
    EventListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    NavComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
      EventService, 
      ToastrService, 
      EventListResolver, 
      AuthService,
      { provide: JQUERY_TOKEN, useValue: jQuery },
      VoterService
    ],
  bootstrap: [MalcsComponent]
})
export class AppModule { }
