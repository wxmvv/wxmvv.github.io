$(document).ready(function () {
	anmimationPreview();
	var pjax = new Pjax({
		elements: "a", // default is "a[href], form[action]"
		selectors: ["main"],
		cacheBust: false, //When set to true, Pjax appends a timestamp query string segment to the requested URL in order to skip the browser cache.
		scrollRestoration: false, //When set to true, Pjax will attempt to restore the scroll position when navigating backwards or forwards.
		switches: {
			main: Pjax.switches.sideBySide,
		},
		switchesOptions: {
			main: {
				//动画效果
				classNames: {
					remove: "Animated-easeOut",
					add: "Animated-easeIn",
					backward: "Animated-easeOut",
					forward: "Animated-easeOut",
				},
			},
		},
	});
	// pjax.



});


document.addEventListener("pjax:complete", function () {
	//pjax时重载点js脚本 pjax_reload()
	anmimationPreview();
});

function anmimationPreview() {
	$(".previewbutton").click(function () {
		var buttonId = $(this).attr("id"); //modal-one
		$("#modal-container").removeAttr("class").addClass(buttonId);
		//点击添加图片
		let imgsrc = $(this).children("img").attr("src");
		imgsrc = imgsrc.replace("min50/", "");
		let imgalt = $(this).children("img").attr("alt");
		// $(".modal").append("<h2>I'm a Modal</h2><p>Hear me roar.</p>")
		//DONE:通过直接给图片添加属性解决大小问题
		$(".modal-img").html(`<img class="gallary-img-view" src="${imgsrc}" alt="${imgalt}" style="width:auto; height: 100vh; max-width:100%; " />`);
		$("body").addClass("modal-active");
	});

	$("#modal-container").click(function () {
		$(this).addClass("out");

		$("body").removeClass("modal-active");
		//离开时候清空modal
		// $(".modal").empty();
	});
}
