import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auto-teile-detail-ansicht',
  templateUrl: './auto-teile-detail-ansicht.component.html',
  styleUrls: ['./auto-teile-detail-ansicht.component.css'],
})
export class AutoTeileDetailAnsichtComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const autoTeileId = params['id'];
    });
  }

  ngOnInit(): void {}
}
