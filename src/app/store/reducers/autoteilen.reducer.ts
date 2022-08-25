import { createReducer, on } from '@ngrx/store';
import * as fromAutoteileActions from './../actions';
import { AutoTeile } from 'src/app/model/auto-teile';

export interface AutoteileState {}

export const initialState: AutoteileState = {};

export const reducer = createReducer(initialState);
