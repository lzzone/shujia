var cartmo=angular.module("cartmo",[]);
cartmo.controller("cartcon",["$scope","$rootScope","$ionicActionSheet",
	function($scope,$rootScope,$ionicActionSheet){
		// if($rootScope.chuanshu) {
	// 控制是否选中


		// }else {
		// 	$rootScope.$on("$stateChangeStart",function(){
		// 		$scope.chuanshu=$rootScope.chuanshu;
		// 		$scope.zongjia=0;

		// 		if($rootScope.chuanshu) {
		// 			for(var i=0;i<$scope.chuanshu.length;i++){
		// 				$scope.zongjia+=parseFloat($scope.chuanshu[i].price);
		// 			}
		// 		}else {
		// 			return
		// 		}

		// 	})			
		// }

}])


cartmo.run(["$rootScope","$location","$ionicActionSheet","$ionicPopup",
	function($rootScope,$location,$ionicActionSheet,$ionicPopup){
		$rootScope.$on("$locationChangeStart",function(){
			if($location.url()=="/tab/cart") {
				if ($rootScope.chuanshu) {
					$rootScope.truefalse=false;
					$rootScope.quanxuanan=false;
			// 获取数据
					// $rootScope.data=$rootScope.chuanshu;
			// 计算总价
					$rootScope.zongjia=0;
					for(var i=0;i<$rootScope.chuanshu.length;i++){
						$rootScope.zongjia+=(parseFloat($rootScope.chuanshu[i].price))*($rootScope.chuanshu[i].shuliang);
					}
					// $rootScope.zongjia=$rootScope.zongjia.toFixed(2);
			// 减一的函数
					$rootScope.jian=function(id){
		// 遍历是那个id的数组把里面的shuliang--；
						for(var i=0;i<$rootScope.chuanshu.length;i++) {
							if($rootScope.chuanshu[i].id==id) {
								$rootScope.chuanshu[i].shuliang--;
								if($rootScope.chuanshu[i].shuliang==0){
									$rootScope.chuanshu[i].shuliang=1;
									// for(var i=0;i<$rootScope.chuanshu.length;i++){
									// 	$rootScope.zongjia+=(parseFloat($rootScope.chuanshu[i].price))*($rootScope.chuanshu[i].shuliang);
									// }
									return
								}
								$rootScope.zongjia-=parseFloat($rootScope.chuanshu[i].price);
								// $rootScope.zongjia=$rootScope.zongjia.toFixed(2);

							}
						}	
						// for(var i=0;i<$rootScope.chuanshu.length;i++){
						// 	$rootScope.zongjia+=(parseFloat($rootScope.chuanshu[i].price))*($rootScope.chuanshu[i].shuliang);
						// }
						// for(var i=0;i<$rootScope.chuanshu.length;i++){
						// 	if($rootScope.chuanshu[i].id==id) {
						// 		$rootScope.chuanshu.splice(i,1);
						// 	}
						// }
					}
			// 加一的函数
					$rootScope.jia=function(id){
						for(var i=0;i<$rootScope.chuanshu.length;i++) {
							if($rootScope.chuanshu[i].id==id) {
								$rootScope.chuanshu[i].shuliang++;	
								$rootScope.zongjia+=parseFloat($rootScope.chuanshu[i].price);
								// $rootScope.zongjia=$rootScope.zongjia.toFixed(2);

							}
						}	
					}

					// $rootScope.quanxuan=function(){
					// 	// var asfxuan=document.querySelectorAll(".sfxuan");
					// 	if($rootScope.quanxuanan==false) {
					// 		$scope.truefalse=true;
					// 	}
					// }

					//警告弹出框
					$rootScope.qujiesuan = function() {
						$ionicPopup.alert({
							title: "你还真结算",
							template: "这里没有连接后台的，你点了也没用"
						})
						// .then(function(res) {
						// 	$scope.status = "感谢上帝，你没吃鞋帮哦！11";
						// });
					};

					$rootScope.show=function(flag,id){
						if(flag==false) {
							return
						}
						var hideSheet= $ionicActionSheet.show({
		           		cancelOnStateChange:true,
		           		cssClass:'action_s',
						titleText: "是否删除选中商品",
						// buttons: [
						// 	{ text: "<b>分享</b>文章" },
						// 	{ text: "移动到..." }
						// ],
						// buttonClicked: function(index) {
			   //                  console.log('操作了第'+index+'个文章');
			   //                  return true;
						// },
						cancelText: "取消",
						cancel: function() {
						  // add cancel code..
			                // console.log('执行了取消操作');
			                return true;
						},
						destructiveText: "删除",
						destructiveButtonClicked:function(){
			                for(var i=0;i<$rootScope.chuanshu.length;i++){
								if($rootScope.chuanshu[i].id==id) {
									$rootScope.zongjia=$rootScope.zongjia-parseFloat($rootScope.chuanshu[i].price)*($rootScope.chuanshu[i].shuliang);
									$rootScope.chuanshu.splice(i,1);							
								}
							}
			                return true;

						}
					});

				}





				}else {
					return
				}
			}
		})
	}
])