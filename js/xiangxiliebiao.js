var xiangxi=angular.module("xiangxi",[]);
var chuanshushuju=[];
// 试试用数组行不行
xiangxi.controller("xiangxicon",["$scope","$rootScope","HttpService","$stateParams","$state","$timeout","$location","$state",
	function($scope,$rootScope,HttpService,$stateParams,$state,$timeout,$location,$state){
		var canshu=$stateParams.num;
		$rootScope.chuanshu=chuanshushuju;
		var url="https://api.douban.com/v2/book/"+canshu;
		HttpService.jsonp(url,{},function(data){
			console.log(data);
			$scope.data=data;
			$scope.id=data.id;
			$scope.title=data.title;
			$scope.image=data.images.medium;
			$scope.price=data.price;
			$scope.$apply();
		})
		$scope.zhanshi=function(){
			$scope.zhanshichulai=true;
			$timeout(function(){
				$scope.zhanshichulai=false;
				// $scope.$apply();
			},1000)
			if($scope.price=="") {
				$scope.price=100;
			}
	// 判断数据中有没有重复的id有的话显示一句，没有的显示另一句
			for(var i=0;i<chuanshushuju.length;i++){
				if(chuanshushuju[i].id==$scope.id){
					$scope.already=true;
					$scope.nozai=false;
					return;
				}
			}
			$scope.already=false;
			$scope.nozai=true;
			$rootScope.chuanshujson={};
			$rootScope.chuanshujson.id=$scope.id;
			$rootScope.chuanshujson.title=$scope.title;
			$rootScope.chuanshujson.image=$scope.image;
			$rootScope.chuanshujson.price=$scope.price;
			$rootScope.chuanshujson.shuliang=1;
			chuanshushuju.push($rootScope.chuanshujson);
			// $rootScope.chuanshu.push( $rootScope.chuanshujson );

			console.log($rootScope.chuanshu);
		}
		// 点击后退效果
		$scope.goback=function(){
			$state.go("zero.third")
		}
		// 当页面刷新时跳转到list页面
		// window.onbeforeunload=function(){
		// 	$state.go("zero.first");
		// }
}])