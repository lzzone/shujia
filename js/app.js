var linmo=angular.module("linlin",["ionic","homemo","ezApp","ionicLazyLoad","listmo","xiangxi"
,"cartmo"]);
linmo.config(["$stateProvider","$urlRouterProvider",
	function($stateProvider,$urlRouterProvider){
		$stateProvider
		.state("zero",{
			url: "/tab",
			templateUrl: "template/tab.html"
		})
		// .state("zero.third.xiangxi",{
		// 	url: "/:num",
		// 	templateUrl: "template/xiangxiliebiao.html"
		// })
		.state("zero.first",{
			url: "/home",
			views: {
				"home": {
					templateUrl: "template/home.html",
					controller: "homecon"
				}
			}
		})
		.state("zero.second",{
			url: "/cart",
			views: {
				"cart": {
					templateUrl: "template/cart.html",
					controller: "cartcon"
				}
			}
		})
		.state("zero.third",{
			url: "/list",
			views: {
				"list": {
					templateUrl: "template/list.html",
					controller: "listcon"
				}
			}
		})
		.state("zero.xiangxi",{
			url: "/:num",
			// templateUrl: "template/xiangxiliebiao.html"
			views: {
				"list": {
					templateUrl: "template/xiangxiliebiao.html",
					controller: "xiangxicon"
				}
			}
		})
		// .state("zero.fourth",{
		// 	url: "/people",
		// 	views: {
		// 		"people": {
		// 			templateUrl: "template/people.html",
					
		// 		}
		// 	}
		// })
		$urlRouterProvider.otherwise("/tab/home");
	}])