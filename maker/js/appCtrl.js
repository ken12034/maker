angular
  .module('app',[
    'ui.router'
  ])
  .config(function( $urlRouterProvider, $stateProvider, $locationProvider ){

    $stateProvider
      .state('home', {
        url: '/maker/',
        views:{
          "viewBanner" : {
            templateUrl: 'maker/templates/banner.html',
            controller: function( $scope ){
                 $scope.banner = [
                   "../maker/img/banner.png",
                   "../maker/img/banner2.jpg"
                 ]
            }
          },
          "viewLeft" : {
            templateUrl: 'maker/templates/left.html',
            controller: function( $scope ){
               $scope.items = [
                 { name:'鋼筆', image : "../maker/img/jd1.jpg" },
                 { name:'繪本',  image : "../maker/img/02.jpg"},
                 { name:'紙膠帶', image :"../maker/img/04.jpg"}
               ];
            }
           },
          "viewCenter" : {
            templateUrl: 'maker/templates/center.html'
          },
          "viewRight" : {
            templateUrl: 'maker/templates/right.html'
          }
        }

      })
      .state('about', {
        url: '/maker/about',
        templateUrl: 'maker/templates/about.html'
      })
    $locationProvider.html5Mode(true);
  })
