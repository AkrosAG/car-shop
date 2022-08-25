import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoTeile } from 'src/app/autoteile/autoteile/model/auto-teile';
import { AutoTeileService } from 'src/app/autoteile/autoteile/services/auto-teile.service';

@Component({
  selector: 'app-auto-teile-detail-ansicht',
  templateUrl: './auto-teile-detail-ansicht.component.html',
  styleUrls: ['./auto-teile-detail-ansicht.component.css'],
})
export class AutoTeileDetailAnsichtComponent implements OnInit {
  autoteile$: Observable<AutoTeile> | undefined;
  autoteileId: string = '';

  constructor(
    private autoteileService: AutoTeileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.autoteileId = params['autoteileId'];
      this.autoteile$ = this.autoteileService.getAutoTeile(
        params['autoteileId']
      );
    });
  }

  onHandleNavigateToList(): void {
    this.router.navigate(['/', 'list']);
  }

  onHandleRemove(): void {
    if (confirm('Autoteile wirklich löschen')) {
      this.autoteileService
        .deleteAutoteile(this.autoteileId)
        .subscribe((response) => this.router.navigateByUrl('/list'));
    }
  }
}
