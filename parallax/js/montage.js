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
    var div = "<div data-stellar-ratio='"+this.ratio+"' data-stellar-horizontal-offset='"+this.offset+"'>";
    div += "<img src='img/"+this.name+".png' />";
    div += "</div>";
    
    return $(div).css({
      top: 300 + this.top,
      left: 600 + this.left
      //,      background: "url(img/"+this.name+".png) no-repeat center"
    }).addClass("picture");
  };
}

function init(images) {
  $.each(images, function (index) {
    $("#pictures").append(images[index].toDiv());
  });
  
  $.stellar({
		horizontalOffset: 40
	});
}