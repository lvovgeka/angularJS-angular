// External dependencies
import * as angular from 'angular';
import { setAngularLib } from '@angular/upgrade/static';

setAngularLib(angular);

// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
const AppModuleAngularJS = angular.module("sampleapp", []);


AppModuleAngularJS.component('ng1Hero', {
    bindings: {hero: '<', onRemove: '&'},
    transclude: true,
    template: `<div class="title" ng-transclude></div>
               <h2>{{ $ctrl.hero.name }} {{hero}}</h2>
               <p>{{ $ctrl.hero.description }}</p>
               <p>{{ $ctrl.example }}</p>
               <h2>РАБОТАЕТ!</h2>
               <button ng-click="$ctrl.onRemovSmth()" mat-raised-button>Remove</button> <p>some</p>
               <button ng-click="onRemove()" mat-raised-button>Remove</button> <p>some</p>
               <p>{{$ctrl | json}}</p>
`,
    controller: () => {

        return {

            example: 'example',
            onRemove: () => {

                console.log('onRemove', this);
            },
            onRemovSmth: () => {
                console.log('onRemove', this);
            }
        }
    },
    controllerAs: '$ctrl'
});

export default AppModuleAngularJS;
