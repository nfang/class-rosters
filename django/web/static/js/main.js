var ClassRosterApp = angular.module('ClassRoster', ['ngResource']);

ClassRosterApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('((');
  $interpolateProvider.endSymbol('))');
});

ClassRosterApp.controller('ClassRosterCtrl', function($scope, $resource) {
  /** 
   * When JSONP is supported on server, we can directly get data like this
   **/

  // $scope.source = $resource(
  //   'http://42.121.35.233\\:9001/school/api/:version/class/my/?format=:format&username=:username&api_key=:api_key'
  //   , { 
  //     version: 'v1'
  //     , format: 'json'
  //     , username:'super'
  //     , api_key:'123456'
  //     , callback: 'JSON_CALLBACK'
  //   }
  //   , { list: { method: 'JSONP' } }
  // );

  /**
   * For the time being, we call the middleware that wraps the remote api and add JSONP support.
   **/
  $scope.source = $resource('http://127.0.0.1\\:8000/:action/', 
    { action: 'api', callback: 'JSON_CALLBACK' }, { list: { method: "JSONP" } });

  $scope.RosterResult = $scope.source.list(function () {
    $scope.selectedClass = $scope.RosterResult.objects[0];
  });

  $scope.ListRosters = function ( selected ) {
    $scope.selectedClass = selected;
  }
});