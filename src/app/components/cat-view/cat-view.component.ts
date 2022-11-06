import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';

import { CatApiService } from 'src/app/services/cat-api.service';
import { Breed } from 'src/app/interfaces/Breed';
import { Quantity } from 'src/app/interfaces/Quantity';
import {
  quantityFive,
  quantityTen,
  quantityTwenty,
} from '../../state/cats-quantity.actions';

import {
  setAnyBreed,
  setAbobBreed,
  setAshoBreed,
  setRagaBreed,
  setAbysBreed,
  setSingBreed,
} from '../../state/cats-breed.actions';

@Component({
  selector: 'app-cat-view',
  templateUrl: './cat-view.component.html',
  styleUrls: ['./cat-view.component.css'],
  providers: [CatApiService],
})
export class CatViewComponent implements OnInit {
  breeds: Array<Breed> = [
    { id: 'any', name: 'Any breed' },
    { id: 'abys', name: 'Abyssinian' },
    { id: 'raga', name: 'Ragamuffin' },
    { id: 'abob', name: 'American Bobtail' },
    { id: 'sing', name: 'Singapura' },
    { id: 'asho', name: 'American Shorthair' },
  ];
  quantities: Array<Quantity> = [
    { quantity: 5, quantityView: '5' },
    { quantity: 10, quantityView: '10' },
    { quantity: 20, quantityView: '20' },
  ];
  selectedBreed = this.breeds[0].id;
  selectedQuantity = this.quantities[1].quantity;

  catsForm: FormGroup = new FormGroup({
    catsBreed: new FormControl(this.selectedBreed),
    catsQuantity: new FormControl(this.selectedQuantity),
  });

  constructor(private store: Store, private catsInfo: CatApiService) {}
  cats = this.catsInfo.cats;
  submit() {
    this.catsInfo.getCats();
    if (!this.show) {
      this.show = true;
    }
    
  }
  
  show: Boolean = false;

  handleQuantity(value: number) {
    switch (value) {
      case 5:
        this.store.dispatch(quantityFive());
        break;
      case 10:
        this.store.dispatch(quantityTen());
        break;
      case 20:
        this.store.dispatch(quantityTwenty());
        break;

      default:
        this.store.dispatch(quantityTen());
    }
  }
  handleBreed(value: string) {
    switch (value) {
      case 'any':
        this.store.dispatch(setAnyBreed());
        break;
      case 'abob':
        this.store.dispatch(setAbobBreed());
        break;
      case 'asho':
        this.store.dispatch(setAshoBreed());
        break;
      case 'raga':
        this.store.dispatch(setRagaBreed());
        break;
      case 'abys':
        this.store.dispatch(setAbysBreed());
        break;
      case 'sing':
        this.store.dispatch(setSingBreed());
        break;
      default:
        this.store.dispatch(setAnyBreed());
    }
  }

  ngOnInit(): void {}
}
