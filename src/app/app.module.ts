import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

@NgModule({
  declarations: [
    ReactWrapperComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }