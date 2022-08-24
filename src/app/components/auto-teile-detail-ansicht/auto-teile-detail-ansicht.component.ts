import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoTeile } from 'src/app/model/auto-teile';
import { AutoTeileService } from 'src/app/services/auto-teile.service';

@Component({
  selector: 'app-auto-teile-detail-ansicht',
  templateUrl: './auto-teile-detail-ansicht.component.html',
  styleUrls: ['./auto-teile-detail-ansicht.component.css'],
})
export class AutoTeileDetailAnsichtComponent implements OnInit {
  autoteile$: Observable<AutoTeile> | undefined;

  constructor(
    private autoteileService: AutoTeileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.autoteile$ = this.autoteileService.getAutoTeile(
        params['autoteileId']
      );
    });
  }

  onHandleNavigateToList(): void {
    this.router.navigate(['/', 'list']);
  }
}
