import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromAutoteileAction from './../actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AutoTeileService } from 'src/app/services/auto-teile.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class AutoteilenEffects {
  loadAutoteilen$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAutoteileAction.LoadAutoteilen),
      mergeMap(() =>
        this.autoteileService.getAllAutoTeilen().pipe(
          map((autoteilen) =>
            fromAutoteileAction.LoadAutoteilenSuccess({ autoteilen })
          ),
          catchError((error) => {
            console.error(error);
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private autoteileService: AutoTeileService
  ) {}
}
