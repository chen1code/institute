var content = [
	{
		"name": "introduction",
		"item": ["业务介绍","研究所介绍","联系我们","研发进展"]
	},
	{
		"name": "institutionSettings",
		"item": ["医疗领域","量子通信","管理支撑部分"]
	},
	{
		"name": "expertIntroduction",
		"item": ["斐里德·穆拉德","乔治·斯穆特","厄温·内尔","丹·谢赫特曼"]
	},
	{
		"name": "scienceIntroduction",
		"item": ["计算机发展史"]
	}
		
];
$(".nav-bar li").mouseenter(function(){
	var index = $(this).index();	
	var nav_lis_len = $(this).find(".nav-list").length;
	var html = "";
	if(index-1 <4 && index-1 >-1 && nav_lis_len==0){
		for(i=0;i<content[index-1].item.length;i++){
		    html += "<div class='nav-list-item'><a ";
		    html += "href='";
		    html += content[index-1].name + ".html";
		    html += "'>";
			html += content[index-1].item[i];
			html += "</a></div>";
		}
		$(this).append("<div class='nav-list'>" + html + "</div>");
	}	
})
$(".nav-bar li").mouseleave(function(){
		$(".nav-list").remove();
})

$(".tab-nav-list li").click(function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".character-summary").eq(index).removeClass("hide").siblings().addClass("hide");
	$(".content-item").eq(index).removeClass("hide").siblings().addClass("hide");
	$(".tab-content-head #pagetab-detail").html($(this).html());
	$(".tab-content-head-title").html($(this).html());
	if($(".content-item").eq(2).hasClass("hide") == false){
    		initMap();
    }
})


//页面跳转（tab）
$(".page-prev").click(function(){
	var now_act = $(".pagination-tab .page-number.active a").html();
	var index = $(".pagination-tab .page-number.active").index();
	var len = $(".pagination-tab .page-number").length;
	if(now_act == 1){
		return false;
	}else{
		$(".pagination-tab .page-number").eq(index-1).removeClass("active");
		$(".pagination-tab .page-number").eq(index-2).addClass("active");
		$(".content-tab-item").eq(index-2).removeClass("hide").siblings(".content-tab-item").addClass("hide");		
	}
})
$(".page-next").click(function(){
	var now_act = $(".pagination-tab .page-number.active a").html();
	var index = $(".pagination-tab .page-number.active").index();
	var len = $(".pagination-tab .page-number").length;
	if(now_act == len){
		return false;
	}else{
		$(".pagination-tab .page-number").eq(index-1).removeClass("active");
		$(".pagination-tab .page-number").eq(index).addClass("active");
		$(".content-tab-item").eq(index).removeClass("hide").siblings(".content-tab-item").addClass("hide");
	}
})
$(".page-number").click(function(){
	var idnex;
	$(this).addClass("active").siblings(".page-number").removeClass("active");
	index = $(".pagination-tab .page-number.active").index();
	$(".content-tab-item").eq(index-1).removeClass("hide").siblings(".content-tab-item").addClass("hide");
})
$(".page-turn span").click(function(){
	var num = $(".page-turn input").val();
	var len = $(".pagination-tab .page-number").length;
	if(num && num>0 && num<len+1){		
		$(".pagination-tab .page-number").eq(num-1).addClass("active").siblings(".page-number").removeClass("active");
		$(".content-tab-item").eq(num-1).removeClass("hide").siblings().addClass("hide");
	}
})
