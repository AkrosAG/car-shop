import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AutoTeile } from 'src/app/model/auto-teile';
import { AutoTeileService } from 'src/app/services/auto-teile.service';
import { LoadAutoteilen } from 'src/app/store/actions';

@Component({
  selector: 'app-list-auto-teile',
  templateUrl: './list-auto-teile.component.html',
  styleUrls: ['./list-auto-teile.component.css'],
})
export class ListAutoTeileComponent implements OnInit {
  // autoTeilen: AutoTeile[] = [];
  autoTeilen$: Observable<AutoTeile[]> | undefined;

  constructor(
    private router: Router,
    private store: Store,
    private autoTeileService: AutoTeileService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(LoadAutoteilen());
    this.autoTeilen$ = this.autoTeileService.getAllAutoTeilen();
  }

  onNavigate(): void {
    this.router.navigate(['/', 'add']);
  }
}
