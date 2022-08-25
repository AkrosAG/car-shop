import { createAction, props } from '@ngrx/store';
import { AutoTeile } from 'src/app/autoteile/autoteile/model/auto-teile';

export enum AutoteilenActionTypes {
  LOAD_AUTOTEILEN = '[ListAutoTeileComponent] Load Autoteilen',
  LOAD_AUTOTEILEN_SUCCESS = '[ListAutoTeileComponent] Load Autoteilen Success',
  LOAD_AUTOTEILEN_FAIL = '[ListAutoTeileComponent] Load Autoteilen Fail',
  UPDATE_AUTOTEILE = '[AutoTeileDetailEditComponent] Update Autoteile ',
  UPDATE_AUTOTEILE_SUCCESS = '[AutoTeileDetailEditComponent] Update Autoteile Success',
  DELETE_AUTOTEILE = '[AutoTeileDetailAnsichtComponent] Delete Autoteile ',
  DELETE_AUTOTEILE_SUCCESS = '[AutoTeileDetailAnsichtComponent] Delete Autoteile Success',
}

export const LoadAutoteilen = createAction(
  AutoteilenActionTypes.LOAD_AUTOTEILEN
);

export const LoadAutoteilenSuccess = createAction(
  AutoteilenActionTypes.LOAD_AUTOTEILEN_SUCCESS,
  props<{ autoteilen: AutoTeile[] }>()
);
