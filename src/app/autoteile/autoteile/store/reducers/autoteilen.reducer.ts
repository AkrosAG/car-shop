import { createReducer, on } from '@ngrx/store';
import * as fromAutoteileActions from './../actions';
import { AutoTeile } from 'src/app/autoteile/autoteile/model/auto-teile';

export interface AutoteileState {
  autoteilen: AutoTeile[];
}

export const initialState: AutoteileState = {
  autoteilen: [],
};

export const reducer = createReducer(
  initialState,

);
