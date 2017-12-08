var listmo=angular.module("listmo",["serviceshttp"]);

// listmo.config(["$stateProvider","$urlRouterProvider",
// 	function($stateProvider,$urlRouterProvider){
// 		$stateProvider
// 		.state("listbiao",{
// 			url: "/tab/list/:num",
// 			templateUrl: "template/tab.html"
// 		})
// 	}])

listmo.controller("listcon",["$scope","HttpService","$stateParams","$state",
	function($scope,HttpService,$stateParams,$state){

		var url="https://api.douban.com/v2/book/search?q=前端";
		HttpService.jsonp(url,{},function(data){
			console.log(data);
			$scope.data=data;
			$scope.$apply();
		})
// 点击搜索模块
		var oformcha=document.getElementById("formcha");
		oformcha.onsubmit=$scope.search=function(){
			console.log("haha");
			var osearch=document.getElementById("search");
			if(osearch.value==""){
				console.log(osearch.value);
				return
			}else{
				console.log(osearch.value);
				var url="https://api.douban.com/v2/book/search?q="+osearch.value;
				HttpService.jsonp(url,{},function(data){
					console.log(data);
					$scope.data=data;
					$scope.$apply();					
				})
			}
		}

// 详细页
		// $state.go("template/xiangxiliebiao.html");



}])

// 筛选部分

// listmo.filter("listxiaodaoda",function(){
// 	return function(input,n1){
// 		console.log(input);
// 		// console.log(n1);
// 		// console.log(n2);
// 		var arr=[];

// 		for(var i=0;i<input.length;i++){
// 			var flag=true;
// 			var number=input[i].parseInt();
// 			if(number=="NaN"){
// 				arr[arr.length].push(number);
// 			}else {
// 				for(var j=0;j<input.length;j++){
// 					if(number>input[j]){
// 						flag=false;
// 					}
// 				}
// 				if(flag==true){
// 					arr[arr.length].push(number);
// 				}
// 			}

// 		}
// 	}
// })