import { Directive, OnInit, OnChanges, DoCheck, OnDestroy, Input, Output, Inject, ElementRef, SimpleChanges, Injector, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

export class Hero {
  name: string;
}

@Directive({
  selector: 'ng1-hero'
})
export class Ng1TestDirective extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
OnDestroy {
  @Input() hero: Hero;
  @Output() onRemove: EventEmitter<void>;
  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    // We must pass the name of the directive as used by AngularJS to the super
    super('ng1Hero', elementRef, injector);
  }

  // For this class to work when compiled with AoT, we must implement these lifecycle hooks
  // because the AoT compiler will not realise that the super class implements them
  ngOnInit() { super.ngOnInit(); }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }

  ngDoCheck() { super.ngDoCheck(); }

  ngOnDestroy() { super.ngOnDestroy(); }
}
