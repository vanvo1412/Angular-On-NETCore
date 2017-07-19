import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { MdSidenav, MdSidenavModule } from '@angular/material';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterModule } from './../footer/footer.module';
import { PageHeaderModule } from './../page-header/page-header';
import { SideNavItems } from './../../../shared/sidenav-items/sidenav-items';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  constructor(
    public sideNavItems: SideNavItems,
    private _router: Router) { }

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}


@NgModule({
  imports: [MdSidenavModule, RouterModule, CommonModule, PageHeaderModule, FooterModule],
  exports: [SideNavComponent],
  declarations: [SideNavComponent],
  providers: [SideNavItems],
})
export class SideNavModule { }
