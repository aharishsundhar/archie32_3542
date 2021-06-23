import { Component, OnInit } from '@angular/core';
import { PlanningService } from './planning.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})

export class PlanningComponent implements OnInit {
    public file = {
        plan: '',
    }

    constructor (
        private planningService: PlanningService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.planningService.GpCreate(this.file).subscribe(data => {
            this.file.plan = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}