var pjax;

console.log("Document initialized:", window.location.href);
document.addEventListener("pjax:send", function () {
	console.log("Event: pjax:send", arguments);
});
document.addEventListener("pjax:error", function () {
	console.log("Event: pjax:error", arguments);
});
document.addEventListener("pjax:complete", function () {
	//pjax时重载点js脚本 pjax_reload()
	init_anmimationPreview();
	console.log("Event: pjax:complete", arguments);
});
document.addEventListener("pjax:success", function () {
	console.log("Event: pjax:success", arguments);
});

document.addEventListener("DOMContentLoaded", function () {
	// Init Pjax instance
	pjax = new Pjax({
		elements: "a", // default is "a[href], form[action]"
		selectors: ["main"],
		cacheBust: false, //When set to true, Pjax appends a timestamp query string segment to the requested URL in order to skip the browser cache.
		scrollRestoration: false, //When set to true, Pjax will attempt to restore the scroll position when navigating backwards or forwards.
		debugg: true, //When set to true, Pjax will log messages to the console.
		switches: {
			"main": Pjax.switches.sideBySide,
		},
		switchesOptions: {
			"main": {
				// 动画效果
				classNames: {
					remove: "Animated Animated--reverse Animate--fast Animate--noDelay",
					add: "Animated-easeIn",
					backward: "Animated-easeOut",
					forward: "Animated-easeOut",
				},
				// callbacks: {
				// 	// to make a nice transition with 2 pages at the same time
				// 	// we are playing with absolute positioning for the element we are removing
				// 	// & we need live metrics to have something great
				// 	// see associated CSS below
				// 	removeElement: function (el) {
				// 		el.style.marginLeft = "-" + el.getBoundingClientRect().width / 2 + "px";
				// 	},
				// },
			},
		},
	});
	console.log("Pjax initialized.", pjax);
	init_anmimationPreview();
});


function init_anmimationPreview() {
	$(".previewbutton").click(function () {
		let buttonId = $(this).attr("id"); //modal-one
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



// 暂时无用
function stopAnima(){
	let all = $("main").has()
	for (let i = 0; i < all.length; i++) {
		all[i].stop(true);
	}
}