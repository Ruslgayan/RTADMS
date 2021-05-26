import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-defaultlt',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnDestroy {

  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
