import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { AppRoutingModule , RoutingComponent} from './app-routing.module'; 
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about/about.component'; 
//import { NewCmpComponent } from './new-cmp/new-cmp.component'; 
//import { ChangeTextDirective } from './change-text.directive'; 
//import { SqrtPipe } from './app.sqrt';

@NgModule({ 
   declarations: [ 
      //SqrtPipe,
      AppComponent, 
      //NewCmpComponent, 
      //ChangeTextDirective, 
      RoutingComponent, AboutComponent 
   ], 
   imports: [ 
      BrowserModule, 
      AppRoutingModule 
   ], 
   providers: [],
   bootstrap: [AppComponent] 
})
export class AppModule { }