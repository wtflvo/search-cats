import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __await } from 'tslib';
import {  lastValueFrom, Observable } from 'rxjs';
import { Cat } from '../interfaces/Cat';
import { select, Store } from '@ngrx/store';
import { QuantityState } from '../interfaces/QuantityState';
import { BreedState } from '../interfaces/BreedState';
import { selectQuantityState } from '../state/cats.selectors';
import { selectBreedState } from '../state/cats.selectors';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  public currentQuantity: number = 0;
  public currentBreed: string = '';
  constructor(
    private http: HttpClient,
    private store:Store
  ) {
    this.store
      .pipe(select(selectQuantityState))
      .subscribe((state) => (this.currentQuantity = state.value));
    this.store
      .pipe(select(selectBreedState))
      .subscribe((state) => (this.currentBreed = state.breed));
  }

  async getAPI(): Promise<any> {
    
    let apiData: Observable<Object>;
    if (this.currentBreed === 'any') {
      apiData = this.http.get(
        `https://api.thecatapi.com/v1/images/search?limit=${this.currentQuantity}&api_key=live_rik1Qe8EGcAnrJFJnHehYPLmWgXeqf4ZwcHBfICDbVSUAezQ39ltt8YHgCbEnUAU`
      );
    } else {
      apiData = this.http.get(
        `https://api.thecatapi.com/v1/images/search?limit=${this.currentQuantity}&breed_ids=${this.currentBreed}&api_key=live_rik1Qe8EGcAnrJFJnHehYPLmWgXeqf4ZwcHBfICDbVSUAezQ39ltt8YHgCbEnUAU`
      );
    }

    const finalData: Object = await lastValueFrom(apiData);
    
    return finalData;
  }

  cats: Array<any> = [];
  async getCats(): Promise<any> {
    const apiData: Object = await this.getAPI();
    for (let obj of apiData as Cat[]) {
      this.cats.push(obj);
    }
    
  }
  clear() {
    this.cats = [];
  }
}
