import { Component, OnInit } from '@angular/core';
import { AutoTeile } from 'src/app/model/auto-teile';

@Component({
  selector: 'app-list-auto-teile',
  templateUrl: './list-auto-teile.component.html',
  styleUrls: ['./list-auto-teile.component.css'],
})
export class ListAutoTeileComponent implements OnInit {
  autoTeile: AutoTeile = {
    id: 1,
    name: 'Goodyear Fortera HL Radial Tire - 245/65R17 105S',
    description:
      'As one of the most trusted names in the tire business, Goodyear Tires has an ongoing legacy of success and a reputation for quality tires and satisfied drivers',
    quantity: 42,
    picture:
      'https://i5.walmartimages.com/asr/1e7d1052-976c-45c1-9749-3690bd029afb_1.53c412220f398adcf2b747834c09a73d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    madeIn: 'US',
    keywords: ['tires', 'wheel'],
    technical_details: {
      brand: 'Goodyear',
      model: 'Fortera HL',
      section_width: '245 mm',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
