// External dependencies
import * as angular from "angular";

// Create the angular 1 module "demo".
//
// Since it is exported, other parts of the application (in other files) can then import it and register things.
// In bootstrap.js, the module is imported, and the components, services, and states are registered.
const AppModuleAngularJS = angular.module("sampleapp", []);


AppModuleAngularJS.component('ng1Hero', {
    bindings: {hero: '<', onRemove: '&'},
    transclude: true,
    template: `<div class="title" ng-transclude></div>
               <h2>{{ $ctrl.hero.name }}</h2>
               <p>{{ $ctrl.hero.description }}</p>
               <button ng-click="$ctrl.onRemove()">Remove</button> <p>some</p>`
  });

export default AppModuleAngularJS;