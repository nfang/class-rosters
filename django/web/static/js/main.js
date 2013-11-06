var ClassRosterApp = angular.module('ClassRoster', ['ngResource']);

ClassRosterApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('((');
  $interpolateProvider.endSymbol('))');
});

ClassRosterApp.controller('ClassRosterCtrl', function($scope, $resource) {
  $scope.source = $resource('http://localhost\\:8000/:action/', { action: 'api' });

  $scope.RosterResult = $scope.source.get(function () {
    $scope.selectedClass = $scope.RosterResult.objects[0];
  });

  $scope.ListRosters = function ( selected ) {
    $scope.selectedClass = selected;
  }
});