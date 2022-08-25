import { createReducer, on } from '@ngrx/store';
import * as fromAutoteileActions from './../actions';
import { AutoTeile } from 'src/app/model/auto-teile';

export interface AutoteileState {
  autoteilen: AutoTeile[];
}

export const initialState: AutoteileState = {
  autoteilen: [],
};

export const reducer = createReducer(
  initialState,
  on(fromAutoteileActions.LoadAutoteilenSuccess, (state, { autoteilen }) => {
    return {
      ...state,
      autoteilen: [...autoteilen],
    };
  })
);
