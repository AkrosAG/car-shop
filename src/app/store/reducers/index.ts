import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAutoteile from './autoteilen.reducer';

export interface CarInvertarState {}

export const reducers: ActionReducerMap<CarInvertarState> = {};

export const getCarInventarState =
  createFeatureSelector<CarInvertarState>('carinventory');
