const findBlockByAlias = (alias) => {
	 return $(".reviews__content").filter((ndx, item) => {
	   return $(item).attr("data-linked-with") === alias;
	});
};

$(".reviews_link").click((e) => {
	e.preventDefault();

	const $this = $(e.currentTarget);
	const target = $this.attr("data-open");
	const itemToShow = findBlockByAlias(target);
	const curItem = $this.closest(".reviews_item");

	itemToShow.addClass("active-content").siblings().removeClass("active-content");
	curItem.addClass("reviews-active").siblings().removeClass("reviews-active");

});