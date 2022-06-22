export const PetFeatureKey = 'pet';

export interface PetState {
  name: string;
  age: number;
  type: string;
}

export const initialPetState: PetState = {
  name: '',
  age: 0,
  type: ''
};
