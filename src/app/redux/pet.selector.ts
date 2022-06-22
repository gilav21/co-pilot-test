import { PetState, PetFeatureKey } from './pet.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectState =
  createFeatureSelector<PetState>(PetFeatureKey);

export const selectPetName =
  createSelector(selectState, (state: PetState) => state.name);

export const selectPetAge =
  createSelector(selectState, (state: PetState) => state.age);

export const selectPetType =
  createSelector(selectState, (state: PetState) => state.type);

export const selectPet =
  createSelector(selectPetName, selectPetAge, selectPetType, (name, age, type) => ({ name, age, type }));

