import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CatViewComponent } from './components/cat-view/cat-view.component';
import { StoreModule } from '@ngrx/store';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { catsQuantityReducer, } from './state/cats-quantity.reducer';
import { catsBreedReducer } from './state/cats-breed.reducer';
@NgModule({
  declarations: [AppComponent, CatViewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    StoreModule.forRoot({ quantityState: catsQuantityReducer, breedState:catsBreedReducer }),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
