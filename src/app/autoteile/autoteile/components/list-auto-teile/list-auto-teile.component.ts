import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AutoTeile } from '../../model/auto-teile';
import { LoadAutoteilen } from '../../store/actions';
import { selectAutoteilen } from '../../store/selectors/autoteile.selectors';

@Component({
  selector: 'app-list-auto-teile',
  templateUrl: './list-auto-teile.component.html',
  styleUrls: ['./list-auto-teile.component.css'],
})
export class ListAutoTeileComponent implements OnInit {
  // autoTeilen: AutoTeile[] = [];
  autoTeilen$: Observable<AutoTeile[]> | undefined;

  constructor(private router: Router, private store: Store) {
    this.store.dispatch(LoadAutoteilen());
  }

  ngOnInit(): void {
    this.autoTeilen$ = this.store.select(selectAutoteilen);
  }

  onNavigate(): void {
    this.router.navigate(['/', 'add']);
  }
}
