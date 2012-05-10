/**
 * Class image.
 */ 
function Picture(name, top, left, ratio, offset) {
  this.name = name;
  this.top = top;
  this.left = left;
  this.ratio = ratio;
  this.offset = offset;
  
  this.toDiv = function() {
    return $("<div data-stellar-ratio='"+this.ratio+"' data-stellar-horizontal-offset='"+this.offset+"'></div>").css({
      top: this.top,
      left: this.left,
      background: "url(img/"+this.name+".png) no-repeat center"
    }).addClass("pictures")
  };
}

function init(images) {
  $.each(images, function (index) {
    $("#scene").append(images[index].toDiv());
  });
  
  $.stellar({
		horizontalOffset: 40
	});
}