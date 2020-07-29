import { Component, OnInit, Input } from '@angular/core';
import { Breach } from 'src/app/models/breach.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-breach',
  templateUrl: './single-breach.component.html',
  styleUrls: ['./single-breach.component.scss']
})
export class SingleBreachComponent implements OnInit {

  @Input() breach: Breach = null;

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  viewMoreInfo() {
    this.localStorage.set(this.breach);
    this.localStorage.lastScrollPosition = window.scrollY;
    this.router.navigate(['/view-breach', this.breach.Name]);
  }

}
