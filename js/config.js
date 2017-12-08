angular.module("ezApp",["ionic"])
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
 //Modify the tabs of android display position! start
 $ionicConfigProvider.platform.ios.tabs.style('standard');
 $ionicConfigProvider.platform.ios.tabs.position('bottom');
 $ionicConfigProvider.platform.android.tabs.style('standard');
 $ionicConfigProvider.platform.android.tabs.position('standard');
 $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
 $ionicConfigProvider.platform.android.navBar.alignTitle('left');
 $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
 $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
 $ionicConfigProvider.platform.ios.views.transition('ios');
 $ionicConfigProvider.platform.android.views.transition('android');
 $ionicConfigProvider.scrolling.jsScrolling(true);
});