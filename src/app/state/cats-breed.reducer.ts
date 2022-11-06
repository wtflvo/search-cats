import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {
    setAnyBreed,
    setAbysBreed,
    setRagaBreed,
    setAbobBreed,
    setSingBreed,
    setAshoBreed,
  } from './cats-breed.actions';
  import { BreedState } from '../interfaces/BreedState';

  
  export const initialBreedState: BreedState ={
    breed:'any'
  } ;

  export const catsBreedReducer = createReducer(
    initialBreedState,
    on(setAnyBreed, (state) => ({...state, breed: 'any'})),
    on(setAbysBreed, (state) => ({...state, breed: 'abys'})),
    on(setRagaBreed, (state) => ({...state, breed: 'raga'})),
    on(setAbobBreed, (state) => ({...state, breed: 'abob'})),
    on(setSingBreed, (state) => ({...state, breed: 'sing'})),
    on(setAshoBreed, (state) => ({...state, breed: 'asho'})),
  );