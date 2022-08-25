import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromAutoteile from './autoteilen.reducer';

export interface CarInvertarState {
  auto: fromAutoteile.AutoteileState;
}

export const reducers: ActionReducerMap<CarInvertarState> = {
  auto: fromAutoteile.reducer,
};

export const getCarInventarState =
  createFeatureSelector<CarInvertarState>('carinventory');
