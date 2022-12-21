$(function () {
  let current = 1;
  $(".gallery a").eq(0).addClass("on");
  function effectImg(im, pa) {
    im.attr("src", pa)
      .css("opacity", "0")
      .stop()
      .animate({ opacity: "1" }, 500);
  }
  let interval = setInterval(intermove, 2000);

  function intermove() {
    if (current < 4) {
      current = current + 1;
    } else {
      current = 1;
    }
    console.log(current);
    $(".gallery a").each(function () {
      if ($(this).hasClass("on")) {
        $(this).removeClass("on");
      }
    });
    $(".gallery a")
      .eq(current - 1)

      .addClass("on");
    let path = "../images/photo" + current + ".jpg";
    effectImg($("#bigim img"), path);
  }
  $(".gallery a").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(intermove, 2000);
    }
  );
  $(".gallery a").click(function (e) {
    e.preventDefault();
    let path = $(this).attr("href");
    $(".gallery a").each(function () {
      if (this.hasClass("on")) {
        $(this).removeClass("on");
      }
    });
    $(this).addClass("on");
    effectImg($("#bigim img"), path);
  });
  //   effectImg("<img src ='images/photo1.jpg'>", "images/photo1.jpg");
  //effectImg($("#bigim img"), "../images/photo2.jpg");
});
