'use strict';

var spiderapusApp = angular.module('spiderapusApp')

spiderapusApp.directive('ngNavigation', ['$log', '_', '$rootScope','$location',
	  function ($log, _, $rootScope,$location) {
    return {
      //templateUrl: 'scripts/directives/navigation.tmpl.html',
      restrict: 'C',           // Allow only class binding for the directive
      //require: '^links',    // Lookup the model in parents scope as well
      scope: {      	                       
        //activeNavMenuItem:   '=' // Bidirectional binding  with  parents model on the same props      
      },
      link: function(scope, element, attrs) {
      	 var parentScope = scope.$parent;
      	 scope.$on('$locationChangeSuccess',function(scope, next, current){
      	 	if(next!=current) {
         		element.children("li.pure-menu-selected").removeClass('pure-menu-selected')      	 		
	     	    
	     	    var targetActiveClass = 'nav.'+parentScope.$navPath();
	     		angular.forEach(element.find("a"), function(aLink) {
	     			
	     			var target = angular.element(aLink)
	     			if(target.hasClass(targetActiveClass)){
	     				target.parent().addClass('pure-menu-selected');
	     			}
	     		});
     		}      	 
         });
      }
    }
}]);

spiderapusApp.directive('links', function() {
	return  {
		controller: function($scope){}
	}
});