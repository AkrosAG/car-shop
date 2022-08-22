import { Component, OnInit } from '@angular/core';
import { AutoTeile } from 'src/app/model/auto-teile';

@Component({
  selector: 'app-list-auto-teile',
  templateUrl: './list-auto-teile.component.html',
  styleUrls: ['./list-auto-teile.component.css'],
})
export class ListAutoTeileComponent implements OnInit {
  autoTeilen: AutoTeile[] = [
    {
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
    },
    {
      id: 2,
      name: 'Continental Elite 4060740 Poly-V / Serpentine Belt',
      description:
        'Continental Elite Poly-V / Serpentine Belts take performance to the next level with Quiet Channel Technology, making the belt run quieter and last longer.',
      quantity: 31,
      picture:
        'https://images-na.ssl-images-amazon.com/images/I/91wNzKzaFmL._SL1500_.jpg',
      madeIn: 'DE',
      keywords: ['transmission', 'belt'],
      technical_details: {
        brand: 'Continental Elite',
        item_weight: '6.4 ounces',
        product_dimensions: '16 x 6 x 1 inches',
      },
    },
    {
      id: 3,
      name: 'Michelin Latitude Tour All-Season Radial Tire - P265/60R18 109T',
      description:
        'SUV and Crossover tire that features outstanding fuel efficiency and long tread life coupled with impressive on-road comfort and handling.',
      quantity: 42,
      picture:
        'https://images-na.ssl-images-amazon.com/images/I/91wNzKzaFmL._SL1500_.jpg',
      madeIn: 'FR',
      keywords: ['tires', 'wheel'],
      technical_details: {
        brand: 'Michelin',
        model: 'Latitude Tour',
        section_width: '265 mm',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
