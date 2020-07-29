import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IndexComponent } from './components/index/index.component';
import { SingleBreachComponent } from './components/index/parts/single-breach/single-breach.component';
import { ViewBreachComponent } from './components/index/parts/view-breach/view-breach.component';

import { BreachService } from './services/breach.service';
import { ThemingService } from './services/theming.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];

const externalLibraries = [
  InfiniteScrollModule
]

const angularModules = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
];

const angularMaterialModules = [
  MatChipsModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule
];

const components = [
  AppComponent,
  IndexComponent,
  SingleBreachComponent,
  ViewBreachComponent,
  ToolbarComponent,
];

const services = [
  BreachService,
  ThemingService,
  LocalStorageService
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    angularModules,
    angularMaterialModules,
    externalLibraries
  ],
  providers: [
    services,
    interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
