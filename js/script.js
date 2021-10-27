$(".wrapper").addClass(".loaded");

$(".icon-menu").click(function (event) {
	$(this).toggleClass("active");
	$(".menu__body").toggleClass("active");
	$("body").toggleClass("lock");
});
function ibg() {
	$.each($(".ibg"), function (index, val) {
		if ($(this).find("img").length > 0) {
			$(this).css(
				"background-image",
				'url("' + $(this).find("img").attr("src") + '")'
			);
		}
	});
}

ibg();

$(window).resize(function (event) {
	mainblock();
});

function mainblock() {
	var h = $(window).outerHeight();
	$(".mainblock").css("min-height", h);
}
mainblock();

//ZOOM
if ($(".gallery").length > 0) {
	baguetteBox.run(".gallery", {
		// Custom options
	});
}

$(".filter__item").click(function (event) {
	var i = $(this).data("filter");
	if (i == 1) {
		$(".portfolio__column").show();
	} else {
		$(".portfolio__column").hide();
		$(".portfolio__column.f_" + i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');
	return false;
});
$(window).scroll(function(event){
	var s=0-$(this).scrollTop()/4;
	$('.mainblock__image').css('transform','translate3d(0,' +s+'px,0)');
});