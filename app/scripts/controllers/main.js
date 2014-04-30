'use strict';

angular.module('angularLabBoxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.levels = [
      {
        data: undefined,
        options:[{name:'hepp'},{name:'huppp'},{name:'hääpppp'}]
      }
    ];
  });
