import { createReducer, on } from "@ngrx/store";
import { initialPetState } from "./pet.state";
import { PetActions } from "./pet.types";

export const petReducer = createReducer(initialPetState,
  on(PetActions.updateAge, (state, action) => {
    return {
      ...state,
      age: action.age
    };
  }),
  on(PetActions.setPet, (state, action) => {
    return {
      ...state,
      name: action.pet.name,
      age: action.pet.age,
      type: action.pet.type
    };
  })
  
);

