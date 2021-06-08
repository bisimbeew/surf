const sections = $("section");
const display = $(".maincontent");

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
    return sectionEq * -100;
};

const performTransition = (sectionEq) => {
    if (inScroll === false){
        inScroll = true;
        const position = countSectionPosition(sectionEq);
        const sideMenu = $(".map-fixed_list");

    display.css({
        transform: `translateY(${position}%)`
    });


    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

        setTimeout(() =>{
            inScroll = false;

    sideMenu
    .find(".map-fixed_item")
    .eq(sectionEq)
    .addClass("map-fixed_item-active")
    .siblings()
    .removeClass("map-fixed_item-active");

        }, 1300);
        }
    };
    
//здесь ок
const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length){
        performTransition(nextSection.index());
    }
    if (direction === "prev" && prevSection.length){
        performTransition(prevSection.index());
    }
};
//здесь ок
$(window).on("wheel", (e) =>{
    const deltaY = e.originalEvent.deltaY;
    
    if (deltaY > 0) {
        //next
        scrollViewport("next");
    }

    if(deltaY < 0) {
        //prev
        scrollViewport("prev");
    }
});//

$(window).on("keydown", (e) => {
      switch (e.keyCode) {
            case 38:
              scrollViewport("prev");
              break;
            case 40:
              scrollViewport("next");
              break;
      }
});

$("[data-scroll-to]").click(e=>{
    e.preventDefault();
    
    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSeqtion = $(`[data-section-id=${target}]`);

   performTransition(reqSeqtion.index());

});


$(".wrapper").on("touchmove", e=> e.preventDefault());


$("body").on( {
      on:function(event, direction) {
        const scroller = scrollViewport();
        let scrollDirection ="";
        
        if(direction ==="up") scrollDirection= "next";
        if(direction ==="down") scrollDirection= "prev";

        scrollViewport(scrollDirection);

      },
    });
    
