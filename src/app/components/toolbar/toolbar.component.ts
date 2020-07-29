import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/services/theming.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  themes: string[];

  constructor(
    private readonly theming: ThemingService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.themes = this.theming.themes;
  }

  changeTheme(theme: string) {
    this.theming.theme.next(theme);
  }

  navigateToHomepage() {
    this.router.navigate(['/']);
  }

}
