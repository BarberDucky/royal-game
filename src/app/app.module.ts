import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { StoneComponent } from './stone/stone.component';
import { GamePageComponent } from './game-page/game-page.component';
import { BoardComponent } from './board/board.component';
import { DicesComponent } from './dices/dices.component';
import { HouseComponent } from './house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    StoneComponent,
    GamePageComponent,
    BoardComponent,
    DicesComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
