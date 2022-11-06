import { createFeatureSelector } from '@ngrx/store';
import { BreedState } from '../interfaces/BreedState';
import { QuantityState } from '../interfaces/QuantityState';

export const selectQuantityState =
  createFeatureSelector<QuantityState>('quantityState');

export const selectBreedState = createFeatureSelector<BreedState>('breedState');
