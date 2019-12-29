import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  rowCount(type: string): number {
    let total: number = 0;
    type = type.toLowerCase();
    for (let i = 0; i < this.satellites.length; i++)
    {
      let satelliteType = this.satellites[i].type.toLowerCase();
      if (type === satelliteType)
      {
        total += 1;
        console.log(total);
      }
      // else if (type === 'communication')
      // {
      //   total += 1;
      // }
      // else if (type === 'probe')
      // {
      //   total += 1;
      // }
      // else if (type === 'positioning')
      // {
      //   total += 1;
      // }
      this.satellites[i]["total"] = total;
    }
    return total;
  }
}
