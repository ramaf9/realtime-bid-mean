angular.module('BlankApp', ['ngMaterial','ui.router'])
    // http interceptor for settings Authorization header
    .factory('authInterceptor', function ($rootScope, $q, $window) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          if ($window.sessionStorage.token) {
            // set Authorization header from window/tab storage
            config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
          }
          return config;
        },
        response: function (response) {
          if (response.status === 401) {
            // handle the case where the user is not authenticated
          }
          return response || $q.when(response);
        }
      };
    })
    .config(function($mdThemingProvider,$stateProvider, $urlRouterProvider,$httpProvider,$locationProvider) {
    // push http interceptors
    $httpProvider.interceptors.push('authInterceptor');
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
    // set front-end routing
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/view/home.html',
            controller: 'HomeCtrl as homeCtrl'
        })
        .state('user', {
            url: '/user/{uid}',
            templateUrl: 'users/view/users.html',
            controller: 'UsersCtrl as usersCtrl',
            resolve: {
              // get uid from url
              uid: function($stateParams){
                return $stateParams.uid;
              },

            }
        })
        .state('user.auction', {
            url: '/auction',
            views:{
                'auctionColumn@user':{
                    templateUrl: 'auction/view/auction.html',
                    controller: 'AuctionCtrl as auctionCtrl',
                    resolve: {
                      // get uid from url
                      uid: function($stateParams){
                        return $stateParams.uid;
                      },

                    }
                }
            }

        })
        .state('user.inventory', {
            url: '/inventory',
            views:{
                'inventoryColumn@user':{
                    templateUrl: 'inventory/view/inventory.html',
                    controller: 'InventoryCtrl as inventoryCtrl',
                    resolve: {
                      // get uid from url
                      uid: function($stateParams){
                        return $stateParams.uid;
                      },

                    }
                }
            }

        })

        ;
        // disable # in url
        $locationProvider.html5Mode(true);
        // default url
        $urlRouterProvider.otherwise('/');


    })
    .directive('onlyNumbers', function() {
        return function(scope, element, attrs) {
            var keyCode = [8,9,13,37,39,46,48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,110,190];
            element.bind("keydown", function(event) {
                if($.inArray(event.which,keyCode) == -1) {
                    scope.$apply(function(){
                        scope.$eval(attrs.onlyNum);
                        event.preventDefault();
                    });
                    event.preventDefault();
                }

            });
        };
    })
    // set REST API Url
    .constant('restUrl', 'http://localhost:8080/');
