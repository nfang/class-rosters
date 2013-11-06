var ClassRosterApp = angular.module('ClassRoster', ['ngResource']);

ClassRosterApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('((');
  $interpolateProvider.endSymbol('))');
});

ClassRosterApp.controller('ClassRosterCtrl', function($scope, $resource) {
  $scope.source = $resource('http://127.0.0.1\\:8000/:action/', 
    { action: 'api' }, { list: { method: "GET" } });

  $scope.RosterResult = $scope.source.list(function () {
    $scope.selectedClass = $scope.RosterResult.objects[0];
  });

  $scope.ListRosters = function ( selected ) {
    $scope.selectedClass = selected;
  }
});