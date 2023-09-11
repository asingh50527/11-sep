import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-rating',
  // standalone: true,
	// imports: [NgbRatingModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
[x: string]: any;
currentRate = 8;
selected = 0;
hovered = 0;
readonly = false;
}
