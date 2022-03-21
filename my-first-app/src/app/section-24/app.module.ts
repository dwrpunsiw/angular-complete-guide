import { AuthEffects } from './auth/store/auth.effects';
import { AlertComponent } from './shared/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppinglistModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { LoggingService } from './logging.service';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    AuthModule,
    RecipesModule,
    ShoppinglistModule,
    CoreModule,
    SharedModule,
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
})
export class AppModule {}
