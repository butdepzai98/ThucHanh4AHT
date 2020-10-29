// -----------------------------Slide---------------------------------------

$(document).ready(function () {

    $('.review').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        //autoplay: true
    }); 

//     // -----------------------------Back to Top---------------------------------------
    $(window).on("scroll", function () {
        if(document.body.scrollTop > 119 || document.documentElement.scrollTop > 119)
        {
            //ScrollTop
            $('.scroll-top').addClass('bottom-100');
        }
        else
        {
            //ScrollTop
            $('.scroll-top').removeClass('bottom-100');
        }
    });
});

//Cuộn lên có gia tốc
function scrollToTop (duration) {
  // cancel if already on top
  if (document.scrollingElement.scrollTop === 0) return;

  const totalScrollDistance = document.scrollingElement.scrollTop;
  let scrollY = totalScrollDistance, oldTimestamp = null;

  function step (newTimestamp) {
      if (oldTimestamp !== null) {
          // if duration is 0 scrollY will be -Infinity
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
          if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
          document.scrollingElement.scrollTop = scrollY;
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}


