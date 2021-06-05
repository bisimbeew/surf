const measureWidth = item => {
	let reqWidthItem = 0;
	const screenWidth = $(window).width();
	const container = item.closest(".accordion__list");
	const titleBlocks = container.find(".accordion__item-title");
	const titleWidth = titleBlocks.width() * titleBlocks.length;
	const textContainer = item.find(".accordion__item-container");
	const paddingLeft = parseInt(textContainer.css("padding-left"));
	const paddingRight = parseInt(textContainer.css("padding-right"));
	const isMobile = window.matchMedia("(max-width: 768px)").matches;
 
	if(isMobile){
	  reqWidthItem = screenWidth - titleWidth;
	}else{
	  reqWidthItem = 500;
	}
 
	return{
	  container: reqWidthItem,
	  textContainer: reqWidthItem - paddingRight - paddingLeft
	}
 };
 
 const closeEveryItemInContainer = (container) =>{
	const items = container.find(".accordion__item");
	const content = container.find(".accordion__item-content");
	items.removeClass("accordion__item-active");
	content.width(0);
 }
 
 
 
 const openItems = item => {
	const hiddenContent = item.find(".accordion__item-content");
	const reqWidth = measureWidth(item);
	const textBlock = item.find(".accordion__item-container");
	item.addClass("accordion__item-active")
 
	hiddenContent.width(reqWidth.container);
	textBlock.width(reqWidth.textContainer);
 
 };
 
 
 
 
 $(".accordion__item-title").on('click', e=> {
	e.preventDefault();
	const $this = $(e.currentTarget);
	const item = $this.closest(".accordion__item");
	const itemOpened = item.hasClass("accordion__item-active");
	const container = $this.closest(".accordion__list");
 
	if(itemOpened){
	  closeEveryItemInContainer(container)
	} else{
	  closeEveryItemInContainer(container)
	  openItems(item);
	}
 
 });
 
 $(".accordion__close").on('click', e => {
	e.preventDefault();
	closeEveryItemInContainer($(".accordion__list"));
 })
 