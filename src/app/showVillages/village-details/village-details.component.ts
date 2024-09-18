import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Village } from '../village';
import { VillagesService } from '../villages.service';

@Component({
  selector: 'app-village-details',
  templateUrl: './village-details.component.html',
  styleUrl: './village-details.component.css'
})
export class VillageDetailsComponent {
  village!: Observable<Village | null>;

  constructor(
    private villaService: VillagesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    this.village = this.villaService.getVillageByIndex(index);
  }
}
