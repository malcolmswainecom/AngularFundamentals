import { Routes } from '@angular/router'
import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './404.component'
import { EventListResolver } from './shared/events-list-resolver.service'
import { CreateSessionComponent } from './events/ceate-session.component'

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent, resolve: {events:EventListResolver} },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: "/events", pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: 'events/session/new', component:  CreateSessionComponent}
]