import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import { AutoteileState } from '../reducers/autoteilen.reducer';

export const selectAutoteileState = createSelector(
  fromFeature.getCarInventarState,
  (state: fromFeature.CarInvertarState) => state?.auto
);

export const selectAutoteilen = createSelector(
  selectAutoteileState,
  (state: AutoteileState) => state?.autoteilen
);
