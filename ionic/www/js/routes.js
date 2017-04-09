angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.search', {
    url: '/search',
    views: {
      'tab1': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.messages', {
    url: '/message',
    views: {
      'tab4': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('tabsController.getsUser', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/getsUser.html',
        controller: 'getsUserCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('appName', {
    url: '/log-in',
    templateUrl: 'templates/appName.html',
    controller: 'appNameCtrl'
  })

  .state('signup', {
    url: '/sign-up',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.newVehicle', {
    url: '/new-vehicle',
    views: {
      'tab3': {
        templateUrl: 'templates/newVehicle.html',
        controller: 'newVehicleCtrl'
      }
    }
  })

  .state('tabsController.make', {
    url: '/make',
    views: {
      'tab3': {
        templateUrl: 'templates/make.html',
        controller: 'makeCtrl'
      }
    }
  })

  .state('tabsController.model', {
    url: '/model',
    views: {
      'tab3': {
        templateUrl: 'templates/model.html',
        controller: 'modelCtrl'
      }
    }
  })

  .state('tabsController.year', {
    url: '/year',
    views: {
      'tab3': {
        templateUrl: 'templates/year.html',
        controller: 'yearCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/log-in')

  

});