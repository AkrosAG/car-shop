import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAutoteile from './autoteilen.reducer';

export interface CarInvertarState {
  autoteilen: fromAutoteile.AutoteileState;
}

export const reducers: ActionReducerMap<CarInvertarState> = {
  autoteilen: fromAutoteile.reducer,
};

export const getCarInventarState =
  createFeatureSelector<CarInvertarState>('carinventory');
