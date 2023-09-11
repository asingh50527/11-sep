import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-nav',
  // standalone: true,
	// imports: [NgbNavModule],
  // imports: [NgbNavModule, NgbAlertModule, NgIf],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  active = 1;
}
