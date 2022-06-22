import { IPet } from './../models/IPet';
import { createAction, props } from "@ngrx/store";

export const updateAge = createAction(
  '[Pet] Update Age',
  props<{ age: number }>()
);


export const setPet = createAction(
  '[Pet] Set Pet',
  props<{ pet: IPet }>()
);
