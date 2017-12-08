var homemo=angular.module("homemo",[]);

homemo.controller("homecon",["$scope","$http","$ionicScrollDelegate","$ionicModal",
	function($scope,$http,$ionicScrollDelegate,$ionicModal){
// http://www.cnblogs.com/fashflying/p/6640753.html
// http://www.cnblogs.com/chenhuzi/p/javascrpt-json2-json-add-update-delete.html
		$scope.data={
			first: {
				second: {
					topimg: "images/home/aishenghuo.jpg",
					liangge: [
						{
							"one": "玩3C",
							"two": "iPhone 超低价",
							"three": "images/home/aishenghuo1.jpg"
						},
						{
							"one": "林林家电",
							"two": "领券减1500",
							"three": "images/home/aishenghuo2.jpg"
						},
						{
							"one": "林林超市",
							"two": "家清199减100",
							"three": "images/home/aishenghuo3.jpg"
						},
						{
							"one": "爱家",
							"two": "家具满99减30",
							"three": "images/home/aishenghuo4.jpg"
						}
					],
					sige: [
						{
							one: "爱宝宝",
							two: "爆款低至5折",
							three: "images/home/aishenghuo5.jpg"					
						},
						{
							one: "爱美丽",
							two: "爆款低至5折",
							three: "images/home/aishenghuo6.jpg"					
						},
						{
							one: "爱吃",
							two: "低至9.9包邮",
							three: "images/home/aishenghuo7.jpg"					
						},
						{
							one: "爱穿搭",	
							two: "大牌清仓1折",
							three: "images/home/aishenghuo8.jpg"					
						}
					]
				},
				seconder: {
					topimg: "images/home/xiangpingzhi.jpg",
					liangge: [
						{
							one: "全球尖货",
							two: "买3减1",
							three: "images/home/xiangpingzhi1.jpg"
						},
						{
							one: "林林精选",
							two: "精选优质生活",
							three: "images/home/xiangpingzhi2.jpg"
						},
						{
							one: "林林体育",
							two: "夏装换新",
							three: "images/home/xiangpingzhi3.jpg"
						},
						{
							one: "奢品大牌",
							two: "整点折扣秒杀",
							three: "images/home/xiangpingzhi4.jpg"
						}
					],
					sige: [
						{
							one: "环球时尚",
							two: "低至3折",
							three: "images/home/xiangpingzhi5.jpg"					
						},
						{
							one: "珠宝首饰",
							two: "12期免息",
							three: "images/home/xiangpingzhi6.jpg"					
						},
						{
							one: "设计师",
							two: "潮流时尚精选",
							three: "images/home/xiangpingzhi7.jpg"					
						},
						{
							one: "买手甄选",
							two: "全球一口价",
							three: "images/home/xiangpingzhi8.jpg"					
						}
					]
				}
		}
	}
		var shuju1=$scope.data.first.second;
		var shuju2=$scope.data.first.seconder;
// 轮播图部分
// 监听视图完全加载之后的事件
    $scope.$on('$ionicView.afterEnter', function (e) {
      henggundong();
      shugundong();
    });
	function henggundong() {
		var mySwiper = new Swiper('.swiperheng', {
			autoplay: 2000,
			loop : true,
			centeredSlides: true,
			pagination : '.swiper-pagination',
			paginationClickable :true,
			autoplayDisableOnInteraction : false,
			observer:true,// 当我们修改swiper的时候，他会自动重新实例化switer
        	observeParents:true,
		})		
	}
	function shugundong(){
		var mySwiper = new Swiper('.swipershu',{
			autoplay: 2500,
			loop : true,
			autoplayDisableOnInteraction : false,
			direction : 'vertical',
		})		
	}


// 上拉刷新部分
		$scope.shanglashuaxin=function(){
			var name="second"+Math.random();
			var name1="second"+Math.random();
			// console.log(name);
			// console.log(shuju1);
			// console.log(shuju2);
			$scope.data.first[name]=shuju1;
			$scope.data.first[name1]=shuju2;
			$scope.$broadcast("scroll.infiniteScrollComplete");
		}
// 滚动条滑动使头部的颜色透明度改变

		var coverheader=document.getElementById("coverheader");
		var oioncontent=document.getElementById("ioncontent");
		oioncontent.onscroll=function(){
			var scrollTop =$ionicScrollDelegate.getScrollPosition().top;
			coverheader.style.opacity=scrollTop/300*0.8>0.8 ? 0.8 : scrollTop/100*0.8;
			coverheader.style.filter="alpha(opacity="+scrollTop/300*0.8>0.8 ? 0.8 : scrollTop/100*0.8+")";
		}

// 登录弹窗部分
	$ionicModal.fromTemplateUrl("my-modal.html", {
		scope: $scope,
        animation: "slide-in-up"
	}).then(function(modal) {
		$scope.modal = modal;
	});


	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};

    $scope.removeModal = function() {
        $scope.modal.remove();
    };
	//Cleanup the modal when we are done with it!
	$scope.$on("$destroy", function() {
        console.log('modal.$destroy');
		$scope.modal.remove();
	});
	// Execute action on hide modal
	$scope.$on("modal.hidden", function() {
		// Execute action
        console.log('modal.hidden');
	});
	// Execute action on remove modal
	$scope.$on("modal.removed", function() {
		// Execute action
        console.log('modal.removed');
	});


}])