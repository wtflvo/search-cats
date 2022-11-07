import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { CatApiService } from 'src/app/services/cat-api.service';
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
import { BREEDS } from 'src/app/arrays/BreedsList';
import { QUANTITIES } from 'src/app/arrays/QuantitiesList';
import { Cat } from 'src/app/interfaces/Cat';

@Component({
  selector: 'app-cat-view',
  templateUrl: './cat-view.component.html',
  styleUrls: ['./cat-view.component.css'],
  providers: [CatApiService],
})
export class CatViewComponent implements OnInit {
  constructor(private store: Store, private catsInfo: CatApiService) {}
  breeds = BREEDS;
  quantities = QUANTITIES;

  catsForm: FormGroup = new FormGroup({
    catsBreed: new FormControl(this.breeds[0].id),
    catsQuantity: new FormControl(this.quantities[1].quantity),
  });
  
  cats: Array<Cat> = [];
 async submit() {
  let catsBand:Array<Cat> = []
    catsBand = await this.catsInfo.getCats() as Array<Cat>;
    for (let cat of catsBand) {
      this.cats.push(cat)
    }
        this.isShown = true;
    
  }
  clear() {
    this.cats = [];
    this.isShown = false;
    
  }

  isShown: Boolean = false;

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
