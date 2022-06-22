import { IPet } from './models/IPet';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { PetActions, PetSelectors } from './redux/pet.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pet$!: Observable<IPet>;

  constructor(private store: Store<any>) {
    this.store.dispatch(PetActions.setPet({ pet: { name: 'Alfie', age: 3, type: 'dog' } }));
    setTimeout(() => {
      this.store.dispatch(PetActions.setPet({pet: { name: 'Bamba', age: 2, type: 'dog' }}));
    }, 3000);
    setTimeout(() => {
      this.store.dispatch(PetActions.updateAge({age: 3}));
    }, 5000);
  }

  ngOnInit(): void {
    this.pet$ = this.store.select(PetSelectors.selectPet);

  }

}
