var target = 0;

$(document).ready(function(){
  var $buttons = $(".control");
  $buttons.click(uploadImage);
})

var uploadImage = function() {
  var $target = $(this).data("target");
  showImage($target);
  changeColorButton($target);
}

var showImage = function(target) {
  var $currentSlide = $("li.active");
  var $newImage = $("li[data-slide=" + target + "]");
  $currentSlide.removeClass("active");
  $newImage.addClass("active");
}

var changeColorButton = function(target) {
  var $currentButton = $("button.active");
  var $newButton = $("button[data-target=" + target + "]");
  $currentButton.removeClass("active");
  $newButton.addClass("active");
}