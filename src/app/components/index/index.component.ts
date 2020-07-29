import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { BreachService } from 'src/app/services/breach.service';
import { Subscription } from 'rxjs';
import { Breach } from 'src/app/models/breach.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy, AfterViewInit {

  public breaches: Breach[] = [];
  public showMsg: boolean = false;
  private subscription: Subscription;

  constructor(
    private readonly breachService: BreachService,
    private readonly localStorage: LocalStorageService
  ) {

    if (this.breachService.offset === 0) {
      this.fetchNewBreaches();
    }

    this.subscription = this.breachService.items$.subscribe(data => {
      if (data) {
        if (this.breachService.offset > 426) {
          this.showMsg = true;
        }
        this.breaches = data;
      }
    });

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.localStorage.lastScrollPosition !== 0) {
      window.scrollTo({
        top: this.localStorage.lastScrollPosition,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  trackByFn(item: Breach, index: number) {
    return item.Name;
  }

  fetchNewBreaches() {
    this.breachService.loadNewBreaches();
  }

  onScrollDown() {
    this.fetchNewBreaches();
  }


}
