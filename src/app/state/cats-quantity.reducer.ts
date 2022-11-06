import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {
  quantityTen,
  quantityTwenty,
  quantityFive,
} from './cats-quantity.actions';
import { QuantityState } from '../interfaces/QuantityState';

export const initialQuantityState: QuantityState = {
  value: 10,
};

export const catsQuantityReducer = createReducer(
  initialQuantityState,
  on(quantityFive, (state) => ({ ...state, value: 5 })),
  on(quantityTen, (state) => ({ ...state, value: 10 })),
  on(quantityTwenty, (state) => ({ ...state, value: 20 })),
  
);
