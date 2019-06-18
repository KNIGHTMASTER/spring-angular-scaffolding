import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SacAddComponent } from './sac-add/sac-add.component';
import { SacGetComponent } from './sac-get/sac-get.component';
import { SacEditComponent } from './sac-edit/sac-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessClientService } from './client/business-client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SacAddComponent,
    SacGetComponent,
    SacEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,  
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
