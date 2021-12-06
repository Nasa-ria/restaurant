// menu popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  // sticky scroll function affecting the nav bar
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
  