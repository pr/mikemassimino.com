var MediaSidebar = MediaSidebar || {
	settings: {
		mobileRenderModeBreakpoint: 850,
		oneColumnBreakpoint: 650,
		widgetClass: ".Media",
		twoColumnClass: "TwoCol",
		renderMode: "unknown",
		mobile: "m",
		desktop: "d"
	},

	init: function () {
		this.settings.renderMode = this.getRenderMode();

		if (this.settings.renderMode === this.settings.mobile) {
			return;
		}

		let videos = $(this.settings.widgetClass);
		videos.each(function (i, video) { MediaSidebar.initVideo($(video)); });

	},

	getRenderMode: function () {
		if ($(window).width() <= this.settings.mobileRenderModeBreakpoint) {
			return this.settings.mobile;
		}
		return this.settings.desktop;
	},

	initVideo: function (video) {
		$(this.settings.widgetClass + " dd").hide();

		if (video.width() > this.settings.oneColumnBreakpoint) {
			this.initTwoCol(video);
		}
		else {
			this.initOneCol(video);
		}
	},

	initOneCol: function (video) {
		video.find("dt").wrapInner("<a href='#void1'></a>");
		video.find('dl').on("click", "dt a", function (e) {
			$(this).parent().next("dd").toggle("fast");
			e.preventDefault();
		});
	},

	initTwoCol: function (video) {
		video.addClass(this.settings.twoColumnClass);

		var qs = video.find("dt");
		qs.each(function (i, e) {
			var q = $(e);
			// q.next("dd").prepend("<h3 class='MediaSidebar-QuestionClone'>" + q.text() + "</h3>");
		});
		qs.wrapInner("<a href='#void2'></a>");

		video.find('dl').on("click", "dt a", function (e) {
			video.find('dd').hide();
			video.find('dt').removeClass("active");
			var dt = $(this).parent();
			dt.addClass("active");
			dt.next("dd").show();
			e.preventDefault();
		});
		video.find('dd').height(video.height()-5);

		if (video.find('.active').length === 0) {
			video.find("dt").first().addClass("active");
		}
	},

	resize: function () {
		var newRenderMode = this.getRenderMode();
		if (this.settings.renderMode !== newRenderMode) {
			if (newRenderMode === this.settings.mobile) {
				this.reset();
			}
			this.init();
		}
	},

	reset: function () {
		var w = $(this.settings.widgetClass);
		w.removeClass(this.settings.twoColumnClass);
		// w.find(".MediaSidebar-QuestionClone").remove();
		w.find("dd").height('auto').show();
		w.find("dt").each(function (i, e) {
			var dt = $(e);
			var text = dt.text();
			dt.empty();
			dt.append(text);
		});
		w.find("dl").off();
	}
};

$(window).ready(function () {
	MediaSidebar.init();
});

$(window).resize(function () {
	clearTimeout($(this).data('timer'));
	$(this).data('timer', setTimeout(function() {MediaSidebar.resize();}, 300));
});