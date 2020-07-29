import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Breach } from 'src/app/models/breach.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-breach',
  templateUrl: './view-breach.component.html',
  styleUrls: ['./view-breach.component.scss']
})
export class ViewBreachComponent implements OnInit {

  public breach: Breach = null;

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly router: Router
  ) {
    this.breach = this.localStorage.get();
  }

  ngOnInit(): void {
  }

  navigateBackToList() {
    this.router.navigate(['/']);
  }

}
