angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('welcome', {
    url: '/page4',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('menu', {
    url: '/side-menu22',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('userSignUp', {
    url: '/page5',
    templateUrl: 'templates/userSignUp.html',
    controller: 'userSignUpCtrl'
  })

  .state('userLogin', {
    url: '/page6',
    templateUrl: 'templates/userLogin.html',
    controller: 'userLoginCtrl'
  })

  .state('cHATBOT', {
    url: '/page7',
    templateUrl: 'templates/cHATBOT.html',
    controller: 'cHATBOTCtrl'
  })

  .state('confirmation', {
    url: '/page8',
    templateUrl: 'templates/confirmation.html',
    controller: 'confirmationCtrl'
  })

  .state('chats', {
    url: '/page9',
    templateUrl: 'templates/chats.html',
    controller: 'chatsCtrl'
  })

$urlRouterProvider.otherwise('/page7')

  

});